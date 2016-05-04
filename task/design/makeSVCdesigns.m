%% set variables for saved design info & target directory (to save .txt files)
% This script assumes that in your GA output your trait-categories rotate
% first, and then the prompt types. E.g., with 3 trait-categories and Self
% and change prompts, we'd get conditions 1 2 3 for self, and 4 5 6 for
% change.

svcTextFile = 'materials/svcTraits.txt'; % Your word list
studyNamePrefix = 'tag'; %this will prepend each filename
NRealSubsTotal = 250; % the max number of subjects you might run each wave.
NWavesTotal = 3; % total number of waves for longitudinal studies
NSubsTotal = NRealSubsTotal * NWavesTotal; % this will be the total number of unique input files generated
torGAFile = 'GAoutput/torSVCdesign.mat'; % where does the optimization file live?
load('gammaDists.mat', 'gammaSVC'); % the file that has the jitter delays
promptConditionText={ % This needs to contain a number of statements equal to the number of prompt conditions
    'true about me?'
    'can this change?'};

targetDirectory = '../input';
fid = fopen(svcTextFile,'r');
svcCell = textscan(fid, '%s%u8%u8%u8','Delimiter',',');
fclose(fid);
load(torGAFile);

traitCategories=unique(svcCell{2}); % how many trait types are in your word list
numTraitCategories=length(traitCategories);
numPromptConditions=(length(unique(M.stimlist))-1)./numTraitCategories;



% for i=1:numTraitCategories
%     if mod(sum(svcCell{2}==traitCategories(i)),numPromptConditions) > 0
%         error('Number of traits in each category not divisible by number of prompt conditions')
%     end
% end

if(mod(numPromptConditions,1)>0)
    error('Number of conditions in design not divisible by number of trait categories');
end

% Generate per-run prompt-type conditions to words depending on their trait-category
% then loop through per run to pull out the right words per block.
% prompt block ordering comes from the GA input.
%
% The number of runs is equal to the number of prompt types. The reason for
% this is that we need to counterbalance the trait categories across both
% prompt types -- if we use half the words for one prompt in the first run
% then we need to use those words in the other prompt in the next run.

for dCount = 1:NSubsTotal
    wordsForCat=struct(struct('words', {}, 'nWords', [], 'forPrompt', struct('index', [])));
         
    for cat_i = 1:numTraitCategories
        wordsForCat(cat_i).words=Shuffle(svcCell{1}(svcCell{2}==traitCategories(cat_i)));
        wordsForCat(cat_i).nWords=length(wordsForCat(cat_i).words);
        for prompt_i = 1:numPromptConditions
            %Below, this keeps track of how many words we've used in each category
            wordsForCat(cat_i).forPrompt(prompt_i).index=(wordsForCat(cat_i).nWords/numPromptConditions)*(prompt_i-1)+1;
        end
    end
    
    % loop over runs
    for rCount = 1:numPromptConditions;
        thisRun = ['run',num2str(rCount)];
        
        svcDesign(dCount).(thisRun).sequence = M.stimlist;
        svcDesign(dCount).(thisRun).condition = ... % strip out the zeros
            svcDesign(dCount).(thisRun).sequence...
            (svcDesign(dCount).(thisRun).sequence~=0);
        ITIs = (Shuffle(gammaSVC./1000))'; %!! Change to gamma sum(ITIs) = 49.563; mean(ITIs) = 1.1014;
        % pad the ISI by resting after every 5th trial
        gammaSlice = repmat([0 0 0 0 4.7], 1, 10);
        svcDesign(dCount).(thisRun).jitter = ITIs+gammaSlice;
        svcJitter = ITIs+gammaSlice;
        condition = svcDesign(dCount).(thisRun).condition;
        word = cell(length(condition),1);
        prompt = word;
        reverse = NaN(1, length(word));
        syllables = NaN(1, length(word));
        
        % loop over trials
        for tCount = 1:length(word);
            %The next line gives the Prompt Condition number for each
            %condition from the GA design file. Imagine there are 3 prompts
            %and 4 trait categories. The GA file would contain conditions
            %numbered 1:12.
            %
            % >> floor((1:12-1)./4)+1
            %
            % ans =
            %
            %      1     1     1     2     2     2     2     3     3     3     3
            %
            promptCondition=floor((condition(tCount)-1)./numTraitCategories)+1;
            traitCategory=mod((condition(tCount)-1), numTraitCategories)+1;
            thisCatsWordIndex=wordsForCat(traitCategory).forPrompt(promptCondition).index;
            word{tCount}=wordsForCat(traitCategory).words{thisCatsWordIndex};
            prompt{tCount} = promptConditionText{promptCondition};
            
            thisCatsNewIndex=mod((thisCatsWordIndex), wordsForCat(traitCategory).nWords)+1; %this ensures it's never > nWords
            wordsForCat(traitCategory).forPrompt(promptCondition).index=thisCatsNewIndex;
            
            reverse(tCount) = svcCell{3}(strcmp(word{tCount},svcCell{1}));
            syllables(tCount) = svcCell{4}(strcmp(word{tCount},svcCell{1}));
        end
        
        waveNum = floor(((dCount-1)/NRealSubsTotal)+1); % wave number is just how far you are in the count
        subIDNum = dCount - NRealSubsTotal * (waveNum - 1);
        
        if subIDNum < 10
            subID = [studyNamePrefix,'00',num2str(subIDNum)];
        elseif subIDNum >= 10 & subIDNum < 100
            subID = [studyNamePrefix,'0',num2str(subIDNum)];
        else
            subID = [studyNamePrefix,num2str(subIDNum)];
        end
        
        fid = fopen([targetDirectory,filesep,subID,'_wave_',num2str(waveNum),'_svc_','run',num2str(rCount),'_input.txt'],'w');
        formatSpec = '%u,%u,%4.3f,%u,%u,%s\n';
        for tCount = 1:length(word)
            fprintf(fid, formatSpec, tCount, condition(tCount), svcJitter(tCount), reverse(tCount), syllables(tCount), word{tCount});
        end
        fclose(fid);
    end
end
saveSVCname = 'svcDesigns.mat';
save(saveSVCname,'svcDesign');
