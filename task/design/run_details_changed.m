%This determines on what trials the prompt is switched, and what it
%switches to. So, for 5 trials per block

rundetails.Trials_Per_Block=4;
rundetails.Prompt_1_Condition_Nums=[1 2]; %These must be exclusive
rundetails.Prompt_2_Condition_Nums=[3 4];
rundetails.Prompt_3_Condition_Nums=[5 6];
rundetails.Prompt_1_text='true about me?';
rundetails.Prompt_2_text='true about friend?';
rundetails.Prompt_3_text='can it change?';