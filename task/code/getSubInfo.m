function [ svc ] = getSubInfo()
% GETSUBINFO.M %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%
%   usage: demo = getSubInfo()
%   takes no input, saves harvested subject info dialog to svc structure
%
%   author: wem3
%   written: 141031
%   modified: 141104 ~wem3
%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% prompt for study directory (highest level)
studyDir = uigetdir('~/Documents/code/svc/','Select study directory');

% interactive dialog to get demographic info
prompt = {...
'subID: ',...,
'experimentor: '...,
'wave: '};

dTitle = 'define subject specific variables';
nLines = 1;

% defaults
def = { '999' , 'SVC', '1' };
manualInput = inputdlg(prompt,dTitle,nLines,def);

% the order is funky here because we want the structure output 
% to be readily readable in summary form (so this, err, isn't)
svc.subID = ['svc',manualInput{1}];
svc.studyDir = studyDir;
svc.subNum = str2num(manualInput{1});
svc.waveNum = str2num(manualInput{3});
svc.input.path = [studyDir,filesep,'task',filesep,'input'];
svc.output.path = [studyDir,filesep,'task',filesep,'output'];

% stimFile created by makesvcstimulus.m
stimFile = [studyDir,filesep,'task',filesep,'SVCstim.mat'];
load(stimFile);

demo.name = '';
demo.exptID = manualInput{2};
demo.exptDate = datestr(now);
svc.demo = demo;


% make icons for svc (there are only two, their colors don't change)
% but make boxen 3 & 4 out of convenience for condition code
stim.promptColors = Shuffle({stim.orange, stim.purple});
for rgbCount = 1:3
  stim.promptMatrix{1}(:,:,rgbCount) = ones(200,200) .* stim.promptColors{1}(rgbCount);
  stim.promptMatrix{2}(:,:,rgbCount) = ones(200,200) .* stim.promptColors{2}(rgbCount);
end
stim.promptMatrix{1}(:,:,4) = (stim.alpha.self) ./255;
stim.promptMatrix{2}(:,:,4) = (stim.alpha.delta) ./255;


% store stim in svc and save
svc.stim = stim;
saveFile = [svc.input.path,filesep,[svc.subID,'_wave_',num2str(svc.waveNum),'_info.mat']];
save(saveFile,'svc');

return

