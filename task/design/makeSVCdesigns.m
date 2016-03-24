%% set variables for saved design info & target directory (to save .txt files)
% This script assumes that in your GA output your trait-categories rotate
% first, and then the prompt types. E.g., with 3 trait-categories and Self
% and change prompts, we'd get conditions 1 2 3 for self, and 4 5 6 for
% change.

svcTextFile = 'materials/svcTraits.txt'; % Your word list
NRealSubsTotal = 250; % the max number of subjects you might run each wave.
NWavesTotal = 3; % total number of waves for longitudinal studies
NSubsTotal = NRealSubsTotal * NWavesTotal; % this will be the total number of unique input files generated
torGAFile = 'GAoutput/torSVCdesign.mat'; % where does the optimization file live?
load('gammaDists.mat', 'gammaSVC'); % the file that has the jitter delays
promptTypes=2; % set the number of prompt types manually -- may be able to set automatically in future versions

targetDirectory = '../input'; 
fid = fopen(svcTextFile,'r');
svcCell = textscan(fid, '%s%u8%u8%u8','Delimiter',',');
fclose(fid);
% goodTraits = svcCell{1}(svcCell{2}==1);
% withdrwnTraits = svcCell{1}(svcCell{2}==2);
% aggTraits = svcCell{1}(svcCell{2}==3);
designFile = [GAoutputDirectory,filesep,(['torSVCdesign.mat'])];
load(designFile);

traitCategories=unique(svcCell{2});
numConditions=

% Generate per-run prompt-type conditions to words depending on their trait-category
% then loop through per run to pull out the right words per block.
% prompt block ordering comes from the GA input.

% get number of runs = number of prompt-types

for dCount = 1:NSubsTotal
    
  %% shuffle em' up & split across runs
  % (we can grab the other info from svcCell using strcmp later...)
  aggTraits = Shuffle(aggTraits);
  goodTraits = Shuffle(goodTraits);
  withdrwnTraits = Shuffle(withdrwnTraits);

  saList1 = aggTraits(1:7);
  sgList1 = goodTraits(1:9);
  swList1 = withdrwnTraits(1:9);
  caList1 = aggTraits(8:end);
  cgList1 = goodTraits(10:end);
  cwList1 = withdrwnTraits(10:end);
  saList2 = caList1;
  sgList2 = cgList1;
  swList2 = cwList1;
  caList2 = saList1;
  cgList2 = sgList1;
  cwList2 = swList1;
  % loop over runs
  for rCount = 1:2;
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
    reverse = NaN(length(word));
    syllables = NaN(length(word));
    % assign list per run
    if rCount == 1
      sgList = sgList1;
      saList = saList1;
      swList = swList1;
      cgList = cgList1;
      caList = caList1;
      cwList = cwList1;
    elseif rCount == 2
      sgList = sgList2;
      saList = saList2;
      swList = swList2;
      cgList = cgList2;
      caList = caList2;
      cwList = cwList2;
    end
  % loop over trials
    for tCount = 1:length(word);
      switch condition(tCount)
        case 1
          word{tCount} = sgList{1};
          sgList = popArray(sgList);
          prompt{tCount} = 'true about me?';
        case 2
          word{tCount} = swList{1};
          swList = popArray(swList);
          prompt{tCount} = 'true about me?';
        case 3
          word{tCount} = saList{1};
          saList = popArray(saList);
          prompt{tCount} = 'true about me?';    
        case 4
          word{tCount} = cgList{1};
          cgList = popArray(cgList);
          prompt{tCount} = 'can this change?';
        case 5
          word{tCount} = cwList{1};
          cwList = popArray(cwList);
          prompt{tCount} = 'can this change?';
        case 6
          word{tCount} = caList{1};
          caList = popArray(caList);
          prompt{tCount} = 'can this change?';
      end
      condition = svcDesign(dCount).(thisRun).condition;
      reverse(tCount) = svcCell{3}(strcmp(word{tCount},svcCell{1}));
      syllables(tCount) = svcCell{4}(strcmp(word{tCount},svcCell{1}));

      waveNum = floor(((dCount-1)/250)+1); % wave number is just how far you are in the count
    
      subIDNum = dCount - 250 * (waveNum - 1);

      if subIDNum < 10
          subID = ['tag00',num2str(subIDNum)];
      elseif subIDNum >= 10 & subIDNum < 100
          subID = ['tag0',num2str(subIDNum)];
      else
      subID = ['tag',num2str(subIDNum)];
      end

      fid = fopen([targetDirectory,filesep,subID,'_wave_',num2str(waveNum),'_svc_','run',num2str(rCount),'_input.txt'],'a');
      formatSpec = '%u,%u,%4.3f,%u,%u,%s\n';
      fprintf(fid, formatSpec, tCount, condition(tCount), svcJitter(tCount), reverse(tCount), syllables(tCount), word{tCount});
      fclose(fid);
    end
  end
end
saveSVCname = 'svcDesigns.mat';
save(saveSVCname,'svcDesign');
