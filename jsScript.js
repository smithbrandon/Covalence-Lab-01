function displayPosition(comp, job, desc){
    console.log('* ' + job + ' at ' + comp + " - " + desc);
}

function displaySkill(title, BAM){
    var fullSkill = '* ';
    if(BAM){
        fullSkill += 'BAM: '
    }
    console.log(fullSkill + title);
}
console.log('\nName: ' +  ('Brandon Smith').toUpperCase());
console.log('Career: Full Stack Engineer');
console.log('Description: When I am not coding I am sleeping... \n');
console.log('\nMy Interests:');
console.log('* Wakeboarding \n* Snowboarding \n* Getting lost in code')
console.log('\nMy Previous Experience: ');
displayPosition('CMD Group, Inc','Sr. Business Analyst','wrote SQL queries.  A lot of them.');
displayPosition('Shaw Industries','Interactive Marketing Manager','Manage the build and deployment of various websites.');
displayPosition('Shaw Industries','Six Sigma Blackbelt','Lots and lots of stats.');
console.log('\nMy Skills');
displaySkill('Javaskript', true);
displaySkill('PHP', false);
displaySkill('Ruby', false);
displaySkill('HTML5', true);
displaySkill('CSS', true);
displaySkill('AngularJs', true);
displaySkill('Node', false);