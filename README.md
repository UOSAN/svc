# Self versus Change (versus Y) = SvCvY

This task is a generalizable implementation of the self versus change task used in the DSN lab. Users respond 'Yes' or 'No' to a series of words.
In the default task, they are asked to judge whether a word describes them (Yes or No), and in other blocks,  whether the word describes a trait that
can change.

You should be able to specify a JxK factorial paradigm where J is the number of different prompts (Self, Change, Y...) and K is the number
of different word types. For example, you may have words that are trait adjectives related to both extraversion and neuroticism.

## `~/task`

Contains code and input text to run experiments, design info/materials, task output  

All code is in psych-toolbox-3, often run on OS X using MATLAB_R2014b

Make sure to add the folders in `~/task` to the MATLAB search path. To wit, you can do:  

```matlab
addpath(genpath('~/task'));
```


SVC
authors: wem3, jflournoy, dcos  
edited: 16-03-24  
