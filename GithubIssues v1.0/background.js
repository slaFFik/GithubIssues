var t, ttext, ino;

t = document.getElementsByTagName( 'title' );
ttext = t[0].innerHTML;
ino = ttext.match(/Issue #([0-9]+)/);
t[0].innerHTML = "#" + ino[1] + " " + ttext;