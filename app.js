var studentData = {
    student1 :{
        name : 'umer',
        rollno : 14,
        section:'A',
        gpa : 3.50
    },
    student2 :{
        name : 'shahid',
        rollno : 04,
        section:'C',
        gpa : 2.90
    },
    student3 :{
        name : 'abbas',
        rollno : 10,
        section:'A',
        gpa : 3.00
    },
    student4 :{
        name : 'shayan',
        rollno : 11,
        section:'D',
        gpa : 2.20
    },
    student5 :{
        name : 'yaseen',
        rollno : 15,
        section:'B',
        gpa : 2.70
    },
    student6 :{
        name : 'wasif',
        rollno : 20,
        section:'B',
        gpa : 3.90
    }
}

var div = document.createElement('div')
div.setAttribute("class",'container')

var h2 = document.createElement('h2')
var h2Text = document.createTextNode('Result Anouncement 3rd semester 2nd year')
h2.appendChild(h2Text)

var ul = document.createElement('ul')
ul.setAttribute("class",'responsive-table')

var li = document.createElement('li')
li.setAttribute("class",'table-header')
var div1 = document.createElement('div')
var div2 = document.createElement('div')
var div3 = document.createElement('div')
var div4 = document.createElement('div')
div1.setAttribute("class",'col col-1')
div2.setAttribute("class",'col col-2')
div3.setAttribute("class",'col col-3')
div4.setAttribute("class",'col col-4')
var div1Text = document.createTextNode("ROLL NO")
var div2Text = document.createTextNode("STUDENT'S NAME")
var div3Text = document.createTextNode("SECTION")
var div4Text = document.createTextNode("GPA")
div1.appendChild(div1Text)
div2.appendChild(div2Text)
div3.appendChild(div3Text)
div4.appendChild(div4Text)
li.appendChild(div1)
li.appendChild(div2)
li.appendChild(div3)
li.appendChild(div4)

var li1 = document.createElement('li')
li1.setAttribute("class",'table-row')
var div5 = document.createElement('div')
var div6 = document.createElement('div')
var div7 = document.createElement('div')
var div8 = document.createElement('div')
div5.setAttribute("class",'col col-1')
div6.setAttribute("class",'col col-2')
div7.setAttribute("class",'col col-3')
div8.setAttribute("class",'col col-4')
var div5Text = document.createTextNode(studentData.student1.rollno)
var div6Text = document.createTextNode(studentData.student1.name)
var div7Text = document.createTextNode(studentData.student1.section)
var div8Text = document.createTextNode(studentData.student1.gpa)
div5.appendChild(div5Text)
div6.appendChild(div6Text)
div7.appendChild(div7Text)
div8.appendChild(div8Text)
li1.appendChild(div5)
li1.appendChild(div6)
li1.appendChild(div7)
li1.appendChild(div8)



var li2 = document.createElement('li')
li2.setAttribute("class",'table-row')
var div9 = document.createElement('div')
var div10 = document.createElement('div')
var div11 = document.createElement('div')
var div12 = document.createElement('div')
div9.setAttribute("class",'col col-1')
div10.setAttribute("class",'col col-2')
div11.setAttribute("class",'col col-3')
div12.setAttribute("class",'col col-4')
var div9Text = document.createTextNode(studentData.student2.rollno)
var div10Text = document.createTextNode(studentData.student2.name)
var div11Text = document.createTextNode(studentData.student2.section)
var div12Text = document.createTextNode(studentData.student2.gpa)
div9.appendChild(div9Text)
div10.appendChild(div10Text)
div11.appendChild(div11Text)
div12.appendChild(div12Text)
li2.appendChild(div9)
li2.appendChild(div10)
li2.appendChild(div11)
li2.appendChild(div12)


var li3 = document.createElement('li')
li3.setAttribute("class",'table-row')
var div13 = document.createElement('div')
var div14 = document.createElement('div')
var div15 = document.createElement('div')
var div16 = document.createElement('div')
div13.setAttribute("class",'col col-1')
div14.setAttribute("class",'col col-2')
div15.setAttribute("class",'col col-3')
div16.setAttribute("class",'col col-4')
var div13Text = document.createTextNode(studentData.student3.rollno)
var div14Text = document.createTextNode(studentData.student3.name)
var div15Text = document.createTextNode(studentData.student3.section)
var div16Text = document.createTextNode(studentData.student3.gpa)
div13.appendChild(div13Text)
div14.appendChild(div14Text)
div15.appendChild(div15Text)
div16.appendChild(div16Text)
li3.appendChild(div13)
li3.appendChild(div14)
li3.appendChild(div15)
li3.appendChild(div16)


var li4 = document.createElement('li')
li4.setAttribute("class",'table-row')
var div17 = document.createElement('div')
var div18 = document.createElement('div')
var div19 = document.createElement('div')
var div20 = document.createElement('div')
div17.setAttribute("class",'col col-1')
div18.setAttribute("class",'col col-2')
div19.setAttribute("class",'col col-3')
div20.setAttribute("class",'col col-4')
var div17Text = document.createTextNode(studentData.student4.rollno)
var div18Text = document.createTextNode(studentData.student4.name)
var div19Text = document.createTextNode(studentData.student4.section)
var div20Text = document.createTextNode(studentData.student4.gpa)
div17.appendChild(div17Text)
div18.appendChild(div18Text)
div19.appendChild(div19Text)
div20.appendChild(div20Text)
li4.appendChild(div17)
li4.appendChild(div18)
li4.appendChild(div19)
li4.appendChild(div20)


var li5 = document.createElement('li')
li5.setAttribute("class",'table-row')
var div21 = document.createElement('div')
var div22 = document.createElement('div')
var div23 = document.createElement('div')
var div24 = document.createElement('div')
div21.setAttribute("class",'col col-1')
div22.setAttribute("class",'col col-2')
div23.setAttribute("class",'col col-3')
div24.setAttribute("class",'col col-4')
var div21Text = document.createTextNode(studentData.student5.rollno)
var div22Text = document.createTextNode(studentData.student5.name)
var div23Text = document.createTextNode(studentData.student5.section)
var div24Text = document.createTextNode(studentData.student5.gpa)
div21.appendChild(div21Text)
div22.appendChild(div22Text)
div23.appendChild(div23Text)
div24.appendChild(div24Text)
li5.appendChild(div21)
li5.appendChild(div22)
li5.appendChild(div23)
li5.appendChild(div24)


var li6 = document.createElement('li')
li6.setAttribute("class",'table-row')
var div25= document.createElement('div')
var div26= document.createElement('div')
var div27= document.createElement('div')
var div28= document.createElement('div')
div25.setAttribute("class",'col col-1')
div26.setAttribute("class",'col col-2')
div27.setAttribute("class",'col col-3')
div28.setAttribute("class",'col col-4')
var div25Text = document.createTextNode(studentData.student6.rollno)
var div26Text = document.createTextNode(studentData.student6.name)
var div27Text = document.createTextNode(studentData.student6.section)
var div28Text = document.createTextNode(studentData.student6.gpa)
div25.appendChild(div25Text)
div26.appendChild(div26Text)
div27.appendChild(div27Text)
div28.appendChild(div28Text)
li6.appendChild(div25)
li6.appendChild(div26)
li6.appendChild(div27)
li6.appendChild(div28)


ul.appendChild(li)
ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3)
ul.appendChild(li4)
ul.appendChild(li5)
ul.appendChild(li6)

div.appendChild(h2)
div.appendChild(ul)


document.getElementById("main").appendChild(div)