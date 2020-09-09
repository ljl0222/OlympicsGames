
// 定义项目类
var Project = function(num, sexOption, numOption)
{
    this.Num = num;
    this.SexOption = sexOption; // 0 女 1 男
    this.NumOption = numOption; // 0 3 1 5（涉及到分数
    this.Countries = new Array();
}

// 定义国家类
var Country = function(num)
{
    this.Num = num; // 序号
    this.Score = 0;
    this.ManScore = 0;
    this.WomanScore = 0;
    this.Projects = new Array();
}
