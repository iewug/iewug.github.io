var cnt = 0;
function showPic(pic)
{
    var source = pic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);
    var text = pic.getAttribute("title");
    var description = document.getElementById("description");
    if (text == "重置")
    {
        cnt++;
        text = "第" + cnt + "遍再来！";
    }
    else text = "噫！居然要看" + text + "的高清基艾艾弗图";
    description.firstChild.nodeValue = text;
}

function reset()
{
    alert("不就是刷新页面吗，还要麻烦我来按。。。\n^(*￣(oo)￣)^");
    location.reload();
}