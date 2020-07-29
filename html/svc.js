/************ 
 * Svc Test *
 ************/

import { PsychoJS } from './lib/core-2020.1.js';
import * as core from './lib/core-2020.1.js';
import { TrialHandler } from './lib/data-2020.1.js';
import { Scheduler } from './lib/util-2020.1.js';
import * as util from './lib/util-2020.1.js';
import * as visual from './lib/visual-2020.1.js';
import * as sound from './lib/sound-2020.1.js';

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([(- 0.773), (- 0.757), (- 0.741)]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'svc';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instructionsRoutineBegin());
flowScheduler.add(instructionsRoutineEachFrame());
flowScheduler.add(instructionsRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin, trialsLoopScheduler);
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
  {name: 'resources/yes.png', path: './resources/resources/yes.png'},
  {name: 'resources/no.png', path: './resources/resources/no.png'},
  {name: 'resources/delta-200-orange.png', path: './resources/resources/delta-200-orange.png'},
  {name: 'resources/delta-200-purple.png', path: './resources/resources/delta-200-purple.png'},
  {name: 'resources/self-200-orange.png', path: './resources/resources/self-200-orange.png'},
  {name: 'resources/self-200-purple.png', path: './resources/resources/self-200-purple.png'},
  {name: 'conditions.csv', path: './resources/conditions.csv'}
  ]
  });


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.1.2';
  expInfo['OS'] = window.navigator.platform;
  expInfo['userAgent'] = window.navigator.userAgent;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var instructionsClock;
var instruction_text;
var block_instructionsClock;
var custom_orange;
var custom_purple;
var colors;
var prompt1_text;
var prompt1_images;
var prompt2_text;
var prompt2_images;
var block_color;
var block_prompt;
var prompt_image;
var block_instruction_text;
var block_image_prompt;
var trialClock;
var image_prompt;
var trait_text;
var key_resp;
var yes_image;
var no_image;
var ISIClock;
var blank_text_for_ISI;
var endClock;
var end_text;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  instruction_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction_text',
    text: 'Self v Change instruction text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.075,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "block_instructions"
  block_instructionsClock = new util.Clock();
  custom_orange = "#FC9337";
  custom_purple = "#7C46F1";
  colors = [custom_orange, custom_purple];
  util.shuffle(colors);
  prompt1_text = "True about me as a parent?";
  prompt1_images = {[custom_orange]: "resources/self-200-orange.png", [custom_purple]: "resources/self-200-purple.png"};
  prompt2_text = "Can this change for a parent?";
  prompt2_images = {[custom_orange]: "resources/delta-200-orange.png", [custom_purple]: "resources/delta-200-purple.png"};
  block_color = colors[0];
  block_prompt = prompt1_text;
  prompt_image = prompt1_images[block_color];
  
  block_instruction_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'block_instruction_text',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.075,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  block_image_prompt = new visual.ImageStim({
    win : psychoJS.window,
    name : 'block_image_prompt', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : undefined,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  image_prompt = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_prompt', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : undefined,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  trait_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'trait_text',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.075,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  yes_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'yes_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [(- 0.21), (- 0.075)], size : undefined,
    color : new util.Color('white'), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  no_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'no_image', units : undefined, 
    image : 'resources/no.png', mask : undefined,
    ori : 0, pos : [0.21, (- 0.075)], size : undefined,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -4.0 
  });
  // Initialize components for Routine "ISI"
  ISIClock = new util.Clock();
  blank_text_for_ISI = new visual.TextStim({
    win: psychoJS.window,
    name: 'blank_text_for_ISI',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  end_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_text',
    text: 'Thank you',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.075,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var instructionsComponents;
function instructionsRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'instructions'-------
    t = 0;
    instructionsClock.reset(); // clock
    frameN = -1;
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(instruction_text);
    
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var frameRemains;
var continueRoutine;
function instructionsRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'instructions'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruction_text* updates
    if (t >= 0.0 && instruction_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_text.tStart = t;  // (not accounting for frame time here)
      instruction_text.frameNStart = frameN;  // exact frame index
      
      instruction_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (instruction_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      instruction_text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionsRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'instructions'-------
    for (const thisComponent of instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var trials;
var currentLoop;
function trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'conditions.csv',
    seed: undefined, name: 'trials'
  });
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrial of trials) {
    const snapshot = trials.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(block_instructionsRoutineBegin(snapshot));
    thisScheduler.add(block_instructionsRoutineEachFrame(snapshot));
    thisScheduler.add(block_instructionsRoutineEnd(snapshot));
    thisScheduler.add(trialRoutineBegin(snapshot));
    thisScheduler.add(trialRoutineEachFrame(snapshot));
    thisScheduler.add(trialRoutineEnd(snapshot));
    thisScheduler.add(ISIRoutineBegin(snapshot));
    thisScheduler.add(ISIRoutineEachFrame(snapshot));
    thisScheduler.add(ISIRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var _pj;
var block_size;
var block_duration;
var temp_condition;
var block_instructionsComponents;
function block_instructionsRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'block_instructions'-------
    t = 0;
    block_instructionsClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    block_size = 5;
    if ((((trials.thisTrialN > 0) && ((trials.thisTrialN % block_size) === 0)) || (trials.thisTrialN === 0))) {
        block_duration = 4.7;
        temp_condition = trials.getCurrentTrial()["condition"];
        if (_pj.in_es6(temp_condition, [1, 2, 3])) {
            block_prompt = prompt1_text;
            block_color = colors[0];
            prompt_image = prompt1_images[block_color];
        } else {
            block_prompt = prompt2_text;
            block_color = colors[1];
            prompt_image = prompt2_images[block_color];
        }
    } else {
        block_duration = 0.0;
    }
    
    block_instruction_text.setColor(new util.Color(block_color));
    block_instruction_text.setText(block_prompt);
    block_image_prompt.setImage(prompt_image);
    // keep track of which components have finished
    block_instructionsComponents = [];
    block_instructionsComponents.push(block_instruction_text);
    block_instructionsComponents.push(block_image_prompt);
    
    for (const thisComponent of block_instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function block_instructionsRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'block_instructions'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = block_instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *block_instruction_text* updates
    if (t >= 0.0 && block_instruction_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      block_instruction_text.tStart = t;  // (not accounting for frame time here)
      block_instruction_text.frameNStart = frameN;  // exact frame index
      
      block_instruction_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + block_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (block_instruction_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      block_instruction_text.setAutoDraw(false);
    }
    
    // *block_image_prompt* updates
    if (t >= 0.0 && block_image_prompt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      block_image_prompt.tStart = t;  // (not accounting for frame time here)
      block_image_prompt.frameNStart = frameN;  // exact frame index
      
      block_image_prompt.setAutoDraw(true);
    }

    frameRemains = 0.0 + block_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (block_image_prompt.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      block_image_prompt.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of block_instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function block_instructionsRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'block_instructions'-------
    for (const thisComponent of block_instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "block_instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_allKeys;
var trialComponents;
function trialRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    image_prompt.setImage(prompt_image);
    trait_text.setText(trait);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    yes_image.setColor(new util.Color([1, 1, 1]));
    yes_image.setImage('resources/yes.png');
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(image_prompt);
    trialComponents.push(trait_text);
    trialComponents.push(key_resp);
    trialComponents.push(yes_image);
    trialComponents.push(no_image);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function trialRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'trial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_prompt* updates
    if (t >= 0.0 && image_prompt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_prompt.tStart = t;  // (not accounting for frame time here)
      image_prompt.frameNStart = frameN;  // exact frame index
      
      image_prompt.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.7 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_prompt.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_prompt.setAutoDraw(false);
    }
    
    // *trait_text* updates
    if (t >= 0.0 && trait_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trait_text.tStart = t;  // (not accounting for frame time here)
      trait_text.frameNStart = frameN;  // exact frame index
      
      trait_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.7 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (trait_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      trait_text.setAutoDraw(false);
    }
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['left', 'right', 'comma', 'period'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *yes_image* updates
    if (t >= 0.0 && yes_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      yes_image.tStart = t;  // (not accounting for frame time here)
      yes_image.frameNStart = frameN;  // exact frame index
      
      yes_image.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.7 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (yes_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      yes_image.setAutoDraw(false);
    }
    
    // *no_image* updates
    if (t >= 0.0 && no_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      no_image.tStart = t;  // (not accounting for frame time here)
      no_image.frameNStart = frameN;  // exact frame index
      
      no_image.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.7 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (no_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      no_image.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'trial'-------
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var ISIComponents;
function ISIRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'ISI'-------
    t = 0;
    ISIClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // keep track of which components have finished
    ISIComponents = [];
    ISIComponents.push(blank_text_for_ISI);
    
    for (const thisComponent of ISIComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function ISIRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'ISI'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = ISIClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *blank_text_for_ISI* updates
    if (t >= 0.0 && blank_text_for_ISI.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blank_text_for_ISI.tStart = t;  // (not accounting for frame time here)
      blank_text_for_ISI.frameNStart = frameN;  // exact frame index
      
      blank_text_for_ISI.setAutoDraw(true);
    }

    frameRemains = 0.0 + jitter - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (blank_text_for_ISI.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      blank_text_for_ISI.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ISIComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ISIRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'ISI'-------
    for (const thisComponent of ISIComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "ISI" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var endComponents;
function endRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'end'-------
    t = 0;
    endClock.reset(); // clock
    frameN = -1;
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(end_text);
    
    for (const thisComponent of endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function endRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'end'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *end_text* updates
    if (t >= 0.0 && end_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_text.tStart = t;  // (not accounting for frame time here)
      end_text.frameNStart = frameN;  // exact frame index
      
      end_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (end_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      end_text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'end'-------
    for (const thisComponent of endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(thisScheduler, loop) {
  // ------Prepare for next entry------
  return function () {
    if (typeof loop !== 'undefined') {
      // ------Check if user ended loop early------
      if (loop.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(loop);
        }
      thisScheduler.stop();
      } else {
        const thisTrial = loop.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(loop);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(trials) {
  return function () {
    psychoJS.importAttributes(trials.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
