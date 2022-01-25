const $section = document.querySelector("section");

const $article_arr = [
    ["t-1-213373", "Make a Whish", "2020.08.19", "This work is about the centimental & cute baby."],
    ["t-3-325075", "Purple Haze", "2020.07.29", ""],
    ["t-21-545213", "Masked Model", "2020.04.30", ""],
    ["t-7-360109", "Birds of Beauty", "2020.05.04", ""],
    ["t-8-308603", "Summer Wheat", "2019.06.14", ""],
    ["t-9-340072", "Before the Storm", "2021.03.17", ""],
    ["t-17-247234", "Young Woman", "2019.10.07", ""],
    ["shutterstock_58264459-111274", "Before the Storm", "2020.12.24", ""],
    ["t-13-584189", "A Loving Couple", "2021.02.21", ""],
    ["shutterstock_56785618-132726", "Spiral Staircase", "2019.10.13", ""],
    ["t-5-236106", "Lonely Ladybug", "2021.01.16", ""],
    ["t3-8-321596", "Emphasis Lafuta", "2020.07.07", ""],
    ["t-19-373493", "Monk Walks", "2021.03.12", ""],
    ["t3-9-289799", "Arena Vivian", "2020.04.05", ""]
];

for(i in $article_arr){
    console.log(typeof i);
    $section.innerHTML += `
    <article style="background-image:url(./img/${$article_arr[i][0]}_640x480.jpg)">
        <div class="cover">
            <div class="cont">
                <h3 class="tit">${$article_arr[i][1]}</h3>
                <h4 class="date">${$article_arr[i][2]}</h4>
                <div class="bar"></div>
                <p>${$article_arr[i][3]}</p>
                <div class="icon"><a href=""><img src="./img/zoom.png" alt=""></a></div>
            </div>
        </div>
    </article>
    `;
}