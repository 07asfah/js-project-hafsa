document.addEventListener('DOMContentLoaded', function() {
const filterBtns = document.querySelectorAll('.filter a');
const menuItems = document.querySelectorAll('.item');

    filterBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
            e.preventDefault();
            filterBtns.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const filter = this.getAttribute('data-filter');
            filterMenuItems(filter);
        });
    });
function filterMenuItems(filter) {
        menuItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    }
});

//menu

var specialsData = [
    {
        title: "Architecto ut aperiam autem id",
        subtitle: "Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka",
        description: "Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero",
        image: "./public/images/restau/specials-1.png"
    },
    {
        title: "Et blanditiis nemo veritatis excepturi",
        subtitle: "Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka",
        description: "Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal",
        image: "./public/images/restau/specials-2.png"
    },
    {
        title: "Impedit facilis occaecati odio neque aperiam sit",
        subtitle: "Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut",
        description: "Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae",
        image: "./public/images/restau/specials-3.png"
    },
    {
        title: "Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore",
        subtitle: "Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus",
        description: "Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore",
        image: "./public/images/restau/specials-4.png"
    },
    {
        title: "Est eveniet ipsam sindera pad rone matrelat sando reda",
        subtitle: "Omnis blanditiis saepe eos autem qui sunt debitis porro quia.",
        description: "Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel",
        image: "./public/images/restau/specials-5.png"
    }
];

    var menuItems = document.getElementsByClassName("menu-item");
    var textSection = document.getElementById("text-section");
    var imageElement = document.querySelector(".image-section img");
    for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", function () {
    var index = this.getAttribute("data-index");
    for (var j = 0; j < menuItems.length; j++) {
        menuItems[j].classList.remove("active");
    }
    this.classList.add("active");
    var data = specialsData[index];
    textSection.innerHTML =
        "<h2>" + data.title + "</h2>" +
        "<span>" + data.subtitle + "</span>" +
        "<p>" + data.description + "</p>";
    imageElement.src = data.image;
    });
}


//carousel 
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const indicators = document.querySelectorAll('.carousel-indicator');
indicators.forEach(indicator => {
    indicator.addEventListener('click', () => {
    const index = parseInt(indicator.getAttribute('data-index'));
    const slideWidth = slides[0].getBoundingClientRect().width;
      track.style.transform = `translateX(-${slideWidth * index}px)`;
        indicators.forEach(ind => ind.classList.remove('active'));
        indicator.classList.add('active');
    });
});

//header

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".navmenu");
    menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    });
});
  