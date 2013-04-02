var EventUtil={addHandler:function(element,type,handler){if(element.addEventListener){element.addEventListener(type,handler,false)}
else if(element.attachEvent){element.attachEvent("on"+type,handler)}
else{element["on"+type]=handler;}},getEvent:function(event){return event?event:window.event;},getTarget:function(event){return event.target||event.srcElement;},preventDefault:function(event){if(event.preventDefault){event.preventDefault();}else{event.returnValue=false;}},stopPropagation:function(event){if(event.stopPropagation){event.stopPropagation();}else{event.cancelBubble=true;}},removeHandler:function(element,type,handler){if(element.removeEventListener){element.removeEventListener(type,handler,false)}
else if(element.detachEvent){element.detachEvent("on"+type,handler)}
else{element["on"+type]=null;}}};var Popup=function(){var dragging=null,diffX=0,diffY=0;function handler(event){event=EventUtil.getEvent(event);var target=EventUtil.getTarget(event);switch(event.type){case"mousedown":if(target.className.indexOf("drag")>-1){dragging=target;diffX=event.clientX-target.offsetLeft;diffY=event.clientY-target.offsetTop;}
break;case"mousemove":if(dragging!==null){dragging.style.left=(event.clientX-diffX)+"px";dragging.style.top=(event.clientY-diffY)+"px";}
break;case"mouseup":dragging=null;break;}};return{enable:function(){EventUtil.addHandler(document,"mousedown",handler);EventUtil.addHandler(document,"mousemove",handler);EventUtil.addHandler(document,"mouseup",handler);},disable:function(){EventUtil.removeHandler(document,"mousedown",handler);EventUtil.removeHandler(document,"mousemove",handler);EventUtil.removeHandler(document,"mouseup",handler);},popping:function(id,boolean){var pop_obj=document.getElementById(id);pop_obj.style.display="block";var pop_obj_h=pop_obj.offsetHeight,pop_obj_w=pop_obj.offsetWidth;pop_obj.style.top=((document.documentElement.clientHeight-pop_obj_h)/2)+document.documentElement.scrollTop+"px";pop_obj.style.left=(document.documentElement.clientWidth-pop_obj_w)/2+"px";if(boolean){mask=document.createElement("div");mask.style.position="absolute";mask.style.top=0+"px";mask.style.backgroundColor="#000";mask.style.zIndex=500;mask.style.width="100%";mask.style.height=document.body.clientHeight+"px";mask.style.opacity=0.5;mask.style.filter="alpha(opacity=50)";document.body.appendChild(mask);}},closed:function(id){tar=document.getElementById(id);tar.style.display="none";if(typeof mask!='undefined'){mask.style.display="none";}}}}();var Browser={"iswhich":"",is:function(){var ua=navigator.userAgent.toLocaleLowerCase();if(ua.indexOf("msie")>-1){this.iswhich="IE";}
else if(ua.indexOf("firefox")>-1){this.iswhich="firefox";}
else if(ua.indexOf("chrome")>-1){this.iswhich="chrome";}
else if(ua.indexOf("safari")>-1){this.iswhich="safari";}}}
Browser.is();var Node={nextNode:function(nod){if(nod.nextSibling.nodeType==1){return nod.nextSibling;}else{return nod.nextSibling.nextSibling;}}}
function tag(ulid,conid,a){var lis=document.getElementById(ulid).getElementsByTagName("li");for(var i=0;i<lis.length;i++){lis[i].className=(i==a)?"hover":"";document.getElementById(conid+i).style.display=(i==a)?"block":"none";}}
var form={formBeautify:function(ID,cls){var form=document.getElementById(ID);for(i=0;i<form.elements.length;i++){(function(num){if(form.elements[num].type=="text"||form.elements[num].type=="password"){form.elements[num].onfocus=function(){form.elements[num].className=cls;if(form.elements[num].value==form.elements[num].defaultValue){form.elements[num].value="";};};form.elements[num].onblur=function(){form.elements[num].removeAttribute("class");if(form.elements[num].value==""){form.elements[num].value=form.elements[num].defaultValue;form.elements[num].style.color="#ccc";}else{form.elements[num].style.color="#000";}};}})(i);}}}
//以上代码务必不要修改
//******************************************************//