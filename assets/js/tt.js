var text_lock=false;var hlock=false;var hloo='';function append(all_content,node,text,delay){text_lock=true;if(hlock==false){if(text=='<'){hlock=true;hloo='<';return False;}}else{if(text=='>'){hlock=false;hloo=hloo+'>';node.innerHTML+=hloo;}else{hloo=hloo+text;}
return False;}
if(delay==true){node.innerHTML+=text;}else{node.innerHTML+='\n'+text;}
if(all_content=='stopit'){text_lock=false;}}
function stop_wakelock(content){text_lock=false;}
function delay_type(node,content,time,delay){let maxim=0;for(let i in content){if(content.length-1==i){setTimeout(append,delay*(time+i),'stopit',node,content[i],true);}else{setTimeout(append,delay*(time+i),'no',node,content[i],true);}
if(time+i>maxim){maxim=time+i;}}
return maxim;}
function wipe(node){node.innerHTML='';}
function get_lock(){return text_lock;}