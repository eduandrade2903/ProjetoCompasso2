let navSocialPage3 = $('#item-social-page3');

function returnPage2(){
    page1.style.display = 'none';
    page2.style.display = 'block';
    page3.style.display = 'none';
}
navSocialPage3.addEventListener('click', () => {
    returnPage2();
});


