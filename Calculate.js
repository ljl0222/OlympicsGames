//覆盖系统alert 避免出现失去焦点的情况
const { dialog } = require('electron').remote;
alert = function (str) {
    var options = {
        type: 'warning',
        buttons: ["确定"],
        defaultId: 0,
        cancelId: 0,
        detail: str,
        message: ''
    }
    dialog.showMessageBoxSync(null, options)
}

function getAllCountry()
{
    var numCountry = document.getElementById("countryNum").value;
    var AllCountry = new Array(parseInt(numCountry) + parseInt(1));

    let numManProject = document.getElementById("manProjectNum").value;
    let numWomanProject = document.getElementById("womanProjectNum").value;
    let inputData = document.getElementById("scoreInf").value;

    let numProject = parseInt(numManProject) + parseInt(numWomanProject);

    for (let cnt = 0; cnt < parseInt(numCountry) + parseInt(1); cnt++)
    {
        if (cnt == 0)
        {
            AllCountry[cnt] = new Country(-1);
            AllCountry[cnt].Score = -1;
            AllCountry[cnt].ManScore = -1;
            AllCountry[cnt].WomanScore = -1;
        }
        else
        {
            AllCountry[cnt] = new Country(cnt);
            AllCountry[cnt].Projects = new Array(parseInt(numProject) + parseInt(1));
            for (let i = 0; i < parseInt(numProject) + parseInt(1); i++)
            {
                AllCountry[cnt].Projects[i] = -1;
            }
        }
    }

    let dataLine = inputData.split("\n");

    console.log("总项目数目:"+numProject);

    for (let cnt = 0; cnt < numProject; cnt++)
    {
        let numArr = dataLine[cnt].split(" ");

        console.log("共有多少个数字:"+numArr.length);
        console.log("输出的数字:"+numArr);

        // 统计总分
        if (numArr.length == 5)
        {
            AllCountry[numArr[0]].Score += parseInt(7);
            console.log(AllCountry[numArr[0]].Score);

            AllCountry[numArr[1]].Score += parseInt(5);
            AllCountry[numArr[2]].Score += parseInt(3);
            AllCountry[numArr[3]].Score += parseInt(2);
            AllCountry[numArr[4]].Score += parseInt(1);

            // 记录项目与名次
            AllCountry[numArr[0]].Projects[parseInt(cnt) + parseInt(1)] = 1;
            AllCountry[numArr[1]].Projects[parseInt(cnt) + parseInt(1)] = 2;
            AllCountry[numArr[2]].Projects[parseInt(cnt) + parseInt(1)] = 3;
            AllCountry[numArr[3]].Projects[parseInt(cnt) + parseInt(1)] = 4;
            AllCountry[numArr[4]].Projects[parseInt(cnt) + parseInt(1)] = 5;

            // 统计男女团体分数
            if (cnt < numManProject)
            {
                AllCountry[numArr[0]].ManScore += parseInt(7);
                AllCountry[numArr[1]].ManScore += parseInt(5);
                AllCountry[numArr[2]].ManScore += parseInt(3);
                AllCountry[numArr[3]].ManScore += parseInt(2);
                AllCountry[numArr[4]].ManScore += parseInt(1);
            }
            else
            {
                AllCountry[numArr[0]].WomanScore += parseInt(7);
                AllCountry[numArr[1]].WomanScore += parseInt(5);
                AllCountry[numArr[2]].WomanScore += parseInt(3);
                AllCountry[numArr[3]].WomanScore += parseInt(2);
                AllCountry[numArr[4]].WomanScore += parseInt(1);
            }
        }
        else if (numArr.length == 3)
        {
            AllCountry[numArr[0]].Score += parseInt(5);
            AllCountry[numArr[1]].Score += parseInt(3);
            AllCountry[numArr[2]].Score += parseInt(2);

            AllCountry[numArr[0]].Projects[parseInt(cnt) + parseInt(1)] = 1;
            AllCountry[numArr[1]].Projects[parseInt(cnt) + parseInt(1)] = 2;
            AllCountry[numArr[2]].Projects[parseInt(cnt) + parseInt(1)] = 3;

            // 统计男女团体分数
            if (cnt < numManProject)
            {
                AllCountry[numArr[0]].ManScore += parseInt(5);
                AllCountry[numArr[1]].ManScore += parseInt(3);
                AllCountry[numArr[2]].ManScore += parseInt(2);
            }
            else
            {
                AllCountry[numArr[0]].WomanScore += parseInt(5);
                AllCountry[numArr[1]].WomanScore += parseInt(3);
                AllCountry[numArr[2]].WomanScore += parseInt(2);
            }
        }
        else
        {
            console.log("Error!");
            alert("Error!");
            return "Error";
            // remote.dialog.showErrorBox('错误','还没做呢');
        }
    }

    for (let cnt = 0; cnt < parseInt(numCountry) + parseInt(1); cnt++)
    {
        console.log("国家"+cnt+":"+AllCountry[cnt].Score);
    }

    return AllCountry;
}

function ShowStatics()
{
    var AllCountry = getAllCountry();
   
    let numCountry = document.getElementById("countryNum").value;

    // 输出最终总分结果
    for (let cnt = 0; cnt < parseInt(numCountry) + parseInt(1); cnt++)
    {
        console.log("国家"+cnt+":"+AllCountry[cnt].Score);
    }

    // 输出到html中
    var html = "";
    html+="<h2>下面展示各个国家总分数</h2>";
    html+="<table border=1 class=\"table\">";
        html+="<tr>";
            html+="<th>";
                html+="国家编号";
            html+="</th>";
            html+="<th>";
                html+="国家总分";
            html+="</th>";
            html+="<th>";
                html+="国家男子团体分数";
            html+="</th>";
            html+="<th>";
                html+="国家女子团体分数";
            html+="</th>";
        html+="</tr>";
    for (let cnt = 1; cnt < parseInt(numCountry) + parseInt(1); cnt++)
    {
        // html+="<p>"+"国家"+cnt+"总分数"+AllCountry[cnt].Score+"</p>";
        html+="<tr>";
            html+="<td>";
                html+=cnt;
            html+="</td>";
            html+="<td>";
                html+=AllCountry[cnt].Score;
            html+="</td>";
            html+="<td>";
                html+=AllCountry[cnt].ManScore;
            html+="</td>";
            html+="<td>";
                html+=AllCountry[cnt].WomanScore;
            html+="</td>";
        html+="</tr>";
    }
    
    html+="</table>"

    document.getElementById("inputData").style.display = "none";
    document.getElementById("showAllScoresButton").style.display = "none";
    document.getElementById("sortByNumButton").style.display = "inline";
    document.getElementById("sortByScoreButton").style.display = "inline";
    document.getElementById("sortByManScoreButton").style.display = "inline";
    document.getElementById("sortByWomanScoreButton").style.display = "inline";
    document.getElementById("returnButton").style.display = "inline";
    document.getElementById("showAllScores").innerHTML = html;
    document.getElementById("showAllScores").style.display = "block";

}

function SortByNum()
{
    var AllCountry = getAllCountry();
    let numCountry = document.getElementById("countryNum").value;

    // 输出最终总分结果
    for (let cnt = 0; cnt < parseInt(numCountry) + parseInt(1); cnt++)
    {
        console.log("国家"+cnt+":"+AllCountry[cnt].Score);
    }

    // 输出到html中
    var html = "";
    html+="<h2>按照国家编号排序展示统计数据如下：</h2>";
    html+="<table border=1 class=\"table\">";
        html+="<tr>";
            html+="<th>";
                html+="国家编号";
            html+="</th>";
            html+="<th>";
                html+="国家总分";
            html+="</th>";
            html+="<th>";
                html+="国家男子团体分数";
            html+="</th>";
            html+="<th>";
                html+="国家女子团体分数";
            html+="</th>";
        html+="</tr>";
    for (let cnt = 1; cnt < parseInt(numCountry) + parseInt(1); cnt++)
    {
        // html+="<p>"+"国家"+cnt+"总分数"+AllCountry[cnt].Score+"</p>";
        html+="<tr>";
            html+="<td>";
                html+=AllCountry[cnt].Num;
            html+="</td>";
            html+="<td>";
                html+=AllCountry[cnt].Score;
            html+="</td>";
            html+="<td>";
                html+=AllCountry[cnt].ManScore;
            html+="</td>";
            html+="<td>";
                html+=AllCountry[cnt].WomanScore;
            html+="</td>";
        html+="</tr>";
    }
    
    html+="</table>"

    document.getElementById("inputData").style.display = "none";
    document.getElementById("showAllScoresButton").style.display = "inline";
    document.getElementById("sortByNumButton").style.display = "none";
    document.getElementById("sortByScoreButton").style.display = "inline";
    document.getElementById("sortByManScoreButton").style.display = "inline";
    document.getElementById("sortByWomanScoreButton").style.display = "inline";
    document.getElementById("returnButton").style.display = "inline";
    document.getElementById("showAllScores").innerHTML = html;
    document.getElementById("showAllScores").style.display = "block";
}

function SortByScore()
{
    var AllCountryCpy = getAllCountry();
    var AllCountry = AllCountryCpy.sort(
    function(a, b){
        return (b.Score - a.Score);
    });
    let numCountry = document.getElementById("countryNum").value;

    // 输出到html中
    var html = "";
    html+="<h2>按照总分排序展示统计数据如下：</h2>";
    html+="<table border=1 class=\"table\">";
        html+="<tr>";
            html+="<th>";
                html+="国家编号";
            html+="</th>";
            html+="<th>";
                html+="国家总分";
            html+="</th>";
            html+="<th>";
                html+="国家男子团体分数";
            html+="</th>";
            html+="<th>";
                html+="国家女子团体分数";
            html+="</th>";
        html+="</tr>";
    for (let cnt = 0; cnt < parseInt(numCountry); cnt++)
    {
        // html+="<p>"+"国家"+cnt+"总分数"+AllCountry[cnt].Score+"</p>";
        html+="<tr>";
            html+="<td>";
                html+=AllCountry[cnt].Num;
            html+="</td>";
            html+="<td>";
                html+=AllCountry[cnt].Score;
            html+="</td>";
            html+="<td>";
                html+=AllCountry[cnt].ManScore;
            html+="</td>";
            html+="<td>";
                html+=AllCountry[cnt].WomanScore;
            html+="</td>";
        html+="</tr>";
    }
    
    html+="</table>"

    document.getElementById("inputData").style.display = "none";
    document.getElementById("showAllScoresButton").style.display = "inline";
    document.getElementById("sortByNumButton").style.display = "inline";
    document.getElementById("sortByScoreButton").style.display = "none";
    document.getElementById("sortByManScoreButton").style.display = "inline";
    document.getElementById("sortByWomanScoreButton").style.display = "inline";
    document.getElementById("returnButton").style.display = "inline";
    document.getElementById("showAllScores").innerHTML = html;
    document.getElementById("showAllScores").style.display = "block";
}

function SortByManScore()
{
    var AllCountryCpy = getAllCountry();
    var AllCountry = AllCountryCpy.sort(
    function(a, b){
        return (b.ManScore - a.ManScore);
    });
    let numCountry = document.getElementById("countryNum").value;

    // 输出到html中
    var html = "";
    html+="<h2>按照国家男子团体分数排序展示统计数据如下：</h2>";
    html+="<table border=1 class=\"table\">";
        html+="<tr>";
            html+="<th>";
                html+="国家编号";
            html+="</th>";
            html+="<th>";
                html+="国家总分";
            html+="</th>";
            html+="<th>";
                html+="国家男子团体分数";
            html+="</th>";
            html+="<th>";
                html+="国家女子团体分数";
            html+="</th>";
        html+="</tr>";
    for (let cnt = 0; cnt < parseInt(numCountry); cnt++)
    {
        // html+="<p>"+"国家"+cnt+"总分数"+AllCountry[cnt].Score+"</p>";
        html+="<tr>";
            html+="<td>";
                html+=AllCountry[cnt].Num;
            html+="</td>";
            html+="<td>";
                html+=AllCountry[cnt].Score;
            html+="</td>";
            html+="<td>";
                html+=AllCountry[cnt].ManScore;
            html+="</td>";
            html+="<td>";
                html+=AllCountry[cnt].WomanScore;
            html+="</td>";
        html+="</tr>";
    }
    
    html+="</table>"

    document.getElementById("inputData").style.display = "none";
    document.getElementById("showAllScoresButton").style.display = "inline";
    document.getElementById("sortByNumButton").style.display = "inline";
    document.getElementById("sortByScoreButton").style.display = "inline";
    document.getElementById("sortByManScoreButton").style.display = "none";
    document.getElementById("sortByWomanScoreButton").style.display = "inline";
    document.getElementById("returnButton").style.display = "inline";
    document.getElementById("showAllScores").innerHTML = html;
    document.getElementById("showAllScores").style.display = "block";
}

function SortByWomanScore()
{
    var AllCountryCpy = getAllCountry();
    var AllCountry = AllCountryCpy.sort(
    function(a, b){
        return (b.WomanScore - a.WomanScore);
    });
    let numCountry = document.getElementById("countryNum").value;

    // 输出到html中
    var html = "";
    html+="<h2>按照国家女子团体分数排序展示统计数据如下：</h2>";
    html+="<table border=1 class=\"table\">";
        html+="<tr>";
            html+="<th>";
                html+="国家编号";
            html+="</th>";
            html+="<th>";
                html+="国家总分";
            html+="</th>";
            html+="<th>";
                html+="国家男子团体分数";
            html+="</th>";
            html+="<th>";
                html+="国家女子团体分数";
            html+="</th>";
        html+="</tr>";
    for (let cnt = 0; cnt < parseInt(numCountry); cnt++)
    {
        // html+="<p>"+"国家"+cnt+"总分数"+AllCountry[cnt].Score+"</p>";
        html+="<tr>";
            html+="<td>";
                html+=AllCountry[cnt].Num;
            html+="</td>";
            html+="<td>";
                html+=AllCountry[cnt].Score;
            html+="</td>";
            html+="<td>";
                html+=AllCountry[cnt].ManScore;
            html+="</td>";
            html+="<td>";
                html+=AllCountry[cnt].WomanScore;
            html+="</td>";
        html+="</tr>";
    }
    
    html+="</table>"

    document.getElementById("inputData").style.display = "none";
    document.getElementById("showAllScoresButton").style.display = "inline";
    document.getElementById("sortByNumButton").style.display = "inline";
    document.getElementById("sortByScoreButton").style.display = "inline";
    document.getElementById("sortByManScoreButton").style.display = "inline";
    document.getElementById("sortByWomanScoreButton").style.display = "none";
    document.getElementById("returnButton").style.display = "inline";
    document.getElementById("showAllScores").innerHTML = html;
    document.getElementById("showAllScores").style.display = "block";
}

function Search()
{
    var AllCountry = getAllCountry();
    let numManProject = document.getElementById("manProjectNum").value;
    let numWomanProject = document.getElementById("womanProjectNum").value;

    let numProject = parseInt(numManProject) + parseInt(numWomanProject);

    // 以国家为关键字查找
    if (document.getElementById("idCountry").value != '' && document.getElementById("idProject").value == '')
    {
        let idCountry = document.getElementById("idCountry").value;
        // 输出到html中
        var html = "";
        html+="<h2>国家"+idCountry+"取得名次的项目编号如下：</h2>";
        html+="<table border=1 class=\"table\">";
            html+="<tr>";
                html+="<th>";
                    html+="项目编号";
                html+="</th>";
                html+="<th>";
                    html+="取得名次";
                html+="</th>";
            html+="</tr>";
            for (let cnt = 1; cnt < parseInt(numProject) + parseInt(1); cnt++)
            {
                // html+="<p>"+AllCountry[idCountry].Projects[cnt]+"</p>";
                html+="<tr>";
                    html+="<td>";
                        html+=cnt;
                    html+="</td>";
                    html+="<td>";
                        if (AllCountry[idCountry].Projects[cnt] == -1)
                        {
                            html+="未取得名次";
                        }
                        else
                        {
                            html+=AllCountry[idCountry].Projects[cnt];
                        }
                    html+="</td>";
                html+="</tr>";
            }
        html+="</table>";

        
    }

    // 以项目编号为关键字查找
    else if (document.getElementById("idCountry").value == '' && document.getElementById("idProject").value != '')
    {
        let idProject = document.getElementById("idProject").value;
        let inputData = document.getElementById("scoreInf").value;
        let dataLine = inputData.split("\n");
        let numArr = dataLine[parseInt(idProject) - parseInt(1)].split(" ");
        // 输出到html中
        var html = "";
        html+="<h2>项目"+idProject+"该项目获得名次的国家编号如下：</h2>";
        html+="<table border=1>";
            html+="<tr>";
                html+="<th>";
                    html+="名次";
                html+="</th>";
                html+="<th>";
                    html+="国家编号";
                html+="</th>";
            html+="</tr>";
            for (let cnt = 1; cnt < parseInt(numArr.length) + parseInt(1); cnt++)
            {
                html+="<tr>";
                    html+="<td>";
                        html+=cnt;
                    html+="</td>";
                    html+="<td>";
                        html+=numArr[parseInt(cnt) - parseInt(1)];
                    html+="</td>";
                html+="</tr>";
            }
            
        html+="</table>";
    }

    // 同时以两个为关键字进行查找
    else
    {
        let idCountry = document.getElementById("idCountry").value;
        let idProject = document.getElementById("idProject").value;
        var html = "";
        html+="<h2>查询结果如下所示：</h2>"
        if (AllCountry[idCountry].Projects[idProject] == -1)
        {   
            html+="&nbsp;&nbsp;国家";
            html+=idCountry;
            html+="在项目";
            html+=idProject;
            html+="中未取得名次";
        }
        else
        {
            html+="&nbsp;&nbsp;国家";
            html+=idCountry;
            html+="在项目";
            html+=idProject;
            html+="中取得了第";
            html+=AllCountry[idCountry].Projects[idProject];
            html+="名";
        }

    }

    document.getElementById("inputData").style.display = "none";
    document.getElementById("showAllScoresButton").style.display = "inline";
    document.getElementById("sortByNumButton").style.display = "inline";
    document.getElementById("sortByScoreButton").style.display = "inline";
    document.getElementById("sortByManScoreButton").style.display = "inline";
    document.getElementById("sortByWomanScoreButton").style.display = "inline";
    document.getElementById("returnButton").style.display = "inline";
    document.getElementById("showAllScores").innerHTML = html;
    document.getElementById("showAllScores").style.display = "block";
}