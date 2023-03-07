var aes = 'U2FsdGVkX19dZkHXqAXmZjkbEwf3R81ENcgAvNbgVmTJqkOANbFc9msOZ9WXy6XKpWUdzeTw1q7GZKTBqiE2I5K/NvyryRBdppA/ziSI9B6izWAcsxXS6hm5i5C5sBxCgDChd124aQJQ3tSeQpkSMgbO+jFpkvX/wuRJrktM54vE1Rgiv1NnMiYNtaeR+DyYaD4QlqVQxxh4Uno+AJ2JEz6alNvHF5ZmsoQLkRcX3Czkf0Tj6+ir8EEuArH+iyxMYKNJu9fTmnoUmUTYy9V3P+pv3RhzyHVHx1cDiVB3QAg0GYPr70bQuqT6Z03jAknHsJgqji2zPdFGOK6GHKglYN0p7Fw5eAyDQJn5M//c+yC1f0fQR4UeFjF9EEsBGwDPB37FOap7j88Pvzk3+TzrPBYCnZeGJpz93c5oMAhNPodKCnL+u5J9T87KtPJqwZfslphL3hSWYcOZBKJS3YQXzSqh/wxrfX1MArZx72EhwuaigsK/CNz1kfztzNfUazAWrgPAyu+p0OLAcJh4H0fHcIzawjzTmFQ2kfVYzfVhsIUDoQcw4VRnnjgMxqSV0ei4Mx5hboHRAQiJPRUqJH1QnQF6Dy2mRUESjOxRtS9q22DDiKhuUjAtcbYH+VbdzOmi8O5AQrrcJhp/NTPn27rR314xWdSMc/DtEFf5qcuzgfdPd291Ynh4pSndtbcVF7jhatFISfDJ6xMJ3eqUPINCnGwImY2Xsa4dkIQMJFuizxi3yKgygPMa3pw37gKpcPCLmDAEh7m7dIMnfkHtuua0gVcJi4Q1z/jwk3nIaR9/PUjS0F8Bq1iNg+5qC0upxwrr883PqOKoV4iWL6eXGSRDd/wQavvO+qqU5+3/W9FZu/wmbUFaDO2F0G7J0uNdBCY4oNnfk/Jnkq16QniPcofKLEQgdEPCGUGlzGYLumsaViI=';

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

var kopp = 0;

const writeChat = function(){
    try{
        document.querySelector('.enter-password').remove();
    }catch{
    }
    let chtmsg = document.createElement('div');
    chtmsg.classList.add('chat-message-right');
    document.querySelector('.chat').append(chtmsg);
    let text = kopp[0];
    let op = setTimeout(() => waits = delay_type(chtmsg,text,0,70), 0);
    kopp.shift();
    setTimeout(() => setInterval(check_text_lock, 3000), 3000);
}

const check_text_lock = function(){
    if (kopp.length > 0){
        if (get_lock() == false){
            let chtmsg = document.createElement('div');
            chtmsg.classList.add('chat-message-right');
            document.querySelector('.chat').append(chtmsg);
            delay_type(chtmsg,kopp[0],0,70);
            kopp.shift();
        }
    }
}

window.onload = function(){
    document.body.querySelector('.btn').onclick = function(){
        let input = document.querySelector('.password').value;
        try{
            let kop = (String(CryptoJS.AES.decrypt(String(aes), input).toString(CryptoJS.enc.Utf8)));
            kopp = JSON.parse(kop);
            document.querySelector('.chat').style = '';
            writeChat();
        }catch{
            alert('Пароль не верный!');
        }
    }
}