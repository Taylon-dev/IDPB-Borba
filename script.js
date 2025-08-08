function gtoimg1(){

    let r1 = document.getElementById("r1").checked;

    if(r1){

    const imgSlide = document.getElementsByClassName("imgSlide");

    imgSlide.classList.remove("animar1");

    void imgSlide.offsetWidth;

    imgSlide.classList.add("animar1");
    }
}
