//结构样式行为彻底分离
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != "function")
        window.onload = func;
    else window.onload = function () {
        oldonload();
        func();
    }
}

function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement)
        parent.appendChild(newElement);
    else parent.insertBefore(newElement, targetElement.nextSibling);
}

function preparePlaceholder() {
    if (!document.createTextNode) return false;
    if (!document.createElement) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id", "placeholder");
    placeholder.setAttribute("src", "pic/来吧.gif");
    placeholder.setAttribute("alt", "");
    var gallery = document.getElementById("imagegallery");
    insertAfter(placeholder, gallery);
    var description = document.createElement("p");
    description.setAttribute("id", "description");
    var desctext = document.createTextNode("👆任选一个，看高清基艾艾弗图");
    description.appendChild(desctext);
    insertAfter(description, placeholder);
}


function prepareGallery() {
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;
    if (!document.getElementsByTagName) return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            return !showPic(this);
        }
    }
}

function showPic(whichpic) {
    var newsrc = whichpic.getAttribute("href");
    var newdesc = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "找不到title属性";
    if (!document.getElementById("placeholder")) return false;
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", newsrc);
    if (!document.getElementById("description")) return false;
    var description = document.getElementById("description");
    if (description.firstChild.nodeType == 3)
        description.firstChild.nodeValue = newdesc;
    return true;
}

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);

function reset() {
    alert("不就是刷新页面吗，还要麻烦我来按。。。\n^(*￣(oo)￣)^");
    location.reload();
}