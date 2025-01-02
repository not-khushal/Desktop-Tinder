let users = [
    {
        profilePic : "https://images.unsplash.com/photo-1676385901160-a86dc9ccdfe1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM5fHxwb3RyYWl0c3xlbnwwfHwwfHx8MA%3D%3D",
        displayPic :"https://images.unsplash.com/photo-1700906207350-4b0c3bcfa90e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjEwfHxwb3RyYWl0c3xlbnwwfHwwfHx8MA%3D%3D",
        pendingMessage : 4,
        location : "Delhi, India",
        name : "Harshita",
        age : 23,
        interests : [{
            icon : `<i class="ri-music-2-fill"></i>`,
            interest : "Music"
        },{
            icon : `<i class="ri-quill-pen-fill"></i>`,
            interest : "Writing"
        }],
        bio : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. nimi saepe molestiae placeat  dolore debitis itaque quod tempora.",
        isFriend : null
    },
    {
        profilePic : "https://plus.unsplash.com/premium_photo-1668896122605-debd3fed81a4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBvdHJhaXRzfGVufDB8fDB8fHww",
        displayPic :"https://images.unsplash.com/photo-1613013890100-b70283f4e1d5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHBvdHJhaXRzfGVufDB8fDB8fHww",
        pendingMessage : 3,
        location : "Bhopal, India",
        name : "Shivangi",
        age : 26,
        interests : [{
            icon : `<i class="ri-brush-fill"></i>`,
            interest : "Art"
        },{
            icon : `<i class="ri-pencil-fill"></i>`,
            interest : "Writing"
        }],
        bio : "Lorem ipsum dolor sit, amet consectetur ebitis itaque quod tempora.",
        isFriend : null
    },
    {
        profilePic : "https://images.unsplash.com/photo-1615241721719-cffa5802f256?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHBvdHJhaXRzfGVufDB8fDB8fHww",
        displayPic :"https://images.unsplash.com/photo-1641400248907-fe5e91e67bf2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2lybCUyMHBvdHJhaXRzfGVufDB8fDB8fHww",
        pendingMessage : 14,
        location : "Bangalore, India",
        name : "Nishi",
        age : 26,
        interests : [{
            icon : `<i class="ri-hammer-fill"></i>`,
            interest : "DIY"
        },{
            icon : `<i class="ri-layout-3-fill"></i>`,
            interest : "Designing"
        }],
        bio : "Lorem ipsum dolor sit, amet consectetur adii saepe molestiae placeat  dolore debitis itaque quod tempora.",
        isFriend : null
    },
    {
        profilePic : "https://images.unsplash.com/photo-1614427855823-fc9eca8a5e2e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fHBvdHJhaXRzfGVufDB8fDB8fHww",
        displayPic :"https://images.unsplash.com/photo-1595781277164-b410ee840b64?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGdpcmwlMjBwb3RyYWl0c3xlbnwwfHwwfHx8MA%3D%3D",
        pendingMessage : 4,
        location : "Delhi, India",
        name : "Avinya",
        age : 19,
        interests : [{
            icon : `<i class="ri-music-2-fill"></i>`,
            interest : "Music"
        },{
            icon : `<i class="ri-quill-pen-fill"></i>`,
            interest : "Writing"
        }],
        bio : "Lorem ipsum dolor sit, amet consecteturg elit. nimi saepe molestiae placeat  dolore debitis itaque quod tempora.",
        isFriend : null
    },
    {
        profilePic : "https://images.unsplash.com/photo-1610893737956-6dfe662b203f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
        displayPic :"https://images.unsplash.com/photo-1610893737924-a6ffa4258c9e?q=80&w=2686&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage : 8,
        location : "Mumbai, India",
        name : "Kiara",
        age : 21,
        interests : [{
            icon : `<i class="ri-brush-fill"></i>`,
            interest : "Art"
        },{
            icon : `<i class="ri-pencil-fill"></i>`,
            interest : "Writing"
        }],
        bio : "Lorem ipsum dolor sit, amet consectetur  consectetur ebitis itaque  ebitis itaque quod tempora.",
        isFriend : null
    },
    {
        profilePic : "https://images.unsplash.com/photo-1618800483321-51a7473d93c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
        displayPic :"https://images.unsplash.com/photo-1618800234942-8434488b6925?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
        pendingMessage : 0,
        location : "Ranchi, India",
        name : "Anita",
        age : 31,
        interests : [{
            icon : `<i class="ri-hammer-fill"></i>`,
            interest : "DIY"
        },{
            icon : `<i class="ri-pencil-fill"></i>`,
            interest : "Writing"
        }],
        bio : "Lorem ipsum dolor sit, amet consectetur ebitis itaque quod tempora.",
        isFriend : null
    },
    {
        profilePic : "https://images.unsplash.com/photo-1500305614571-ae5b6592e65d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
        displayPic :"https://images.unsplash.com/photo-1499155286265-79a9dc9c6380?q=80&w=2784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage : 1,
        location : "Chennai, India",
        name : "Disha",
        age : 22,
        interests : [{
            icon : `<i class="ri-brush-fill"></i>`,
            interest : "Art"
        },{
            icon : `<i class="ri-pencil-fill"></i>`,
            interest : "Writing"
        }],
        bio : "Lorem ipsum dolor sit, amet consectetur ebitis itaque quod tempora.",
        isFriend : null
    },
    {
        profilePic : "https://images.unsplash.com/photo-1621786040662-455f23dcb6ff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
        displayPic :"https://images.unsplash.com/photo-1621784562877-e971f1f79f47?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
        pendingMessage : 21,
        location : "Pune, India",
        name : "Kaashvi",
        age : 18,
        interests : [{
            icon : `<i class="ri-brush-fill"></i>`,
            interest : "Art"
        },{
            icon : `<i class="ri-pencil-fill"></i>`,
            interest : "Writing"
        }],
        bio : "Lorem ipsum dolor sit, amet consectetur ebitis itaque quod tempora.",
        isFriend : null
    },
    {
        profilePic : "https://images.unsplash.com/photo-1534008757030-27299c4371b6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
        displayPic :"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage : 6,
        location : "Noida, India",
        name : "Diya",
        age : 27,
        interests : [{
            icon : `<i class="ri-brush-fill"></i>`,
            interest : "Art"
        },{
            icon : `<i class="ri-pencil-fill"></i>`,
            interest : "Writing"
        }],
        bio : "Lorem ipsum dolor sit, amet consectetur ebitis itaque it, amet consectetur ebitis itaque q quod tempora.",
        isFriend : null
    },
    {
        profilePic : "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
        displayPic :"https://images.unsplash.com/photo-1462804993656-fac4ff489837?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage : 11,
        location : "Kolkata, India",
        name : "Fatima",
        age : 21,
        interests : [{
            icon : `<i class="ri-brush-fill"></i>`,
            interest : "Art"
        },{
            icon : `<i class="ri-pencil-fill"></i>`,
            interest : "Writing"
        }],
        bio : "Lorem ipsum dolor sit, amet consectetur ebitis itaque quod tempora.",
        isFriend : null
    }
]

let curr = 0;
let isAnimating = false;


function setData(index){
    document.querySelector(".prflimg img ").src = users[index].profilePic;
    document.querySelector(".badge h5").textContent = users[index].pendingMessage;
    document.querySelector(".location h3").textContent = users[index].location;
    document.querySelector(".name h1:nth-child(1)").textContent = users[index].name;
    document.querySelector(".name h1:nth-child(2)").textContent = users[index].age;

    let clutter = "";
    users[index].interests.forEach(function(interest){
        clutter += `<div class="tag flex items-center bg-white/20 px-3 py-1 rounded-full gap-1">
        ${interest.icon}
        <h3 class = "text-sm tracking-tight capitalize">${interest.interest}</h3>
    </div>`
    })
    document.querySelector(".tags").innerHTML = clutter;
    document.querySelector(".bio p").textContent = users[index].bio;
}


(function setInitial(){
    document.querySelector(".maincard img").src = users[curr].displayPic;
    document.querySelector(".incomingcard img").src = users[curr+1]?.displayPic;

    setData(curr);
    curr = 2;
})();

function imageChange(){
    if(!isAnimating){
        isAnimating = true;
        let tl = gsap.timeline({
        onComplete: function(){
            isAnimating = false;
            let main = document.querySelector(".maincard");
            let incoming = document.querySelector(".incomingcard");

            incoming.classList.remove("z-[2]");
            incoming.classList.add("z-[3]");
            incoming.classList.remove("incomingcard");

            main.classList.remove("z-[3]");
            main.classList.add("z-[2]");
            gsap.set(main, {
                scale : 1,
                opacity : 1
            })
            if (curr === users.length) curr = 0;
            document.querySelector(".maincard img").src = users[curr].displayPic;
            curr++;
            main.classList.remove("maincard");
            incoming.classList.add("maincard");
            main.classList.add("incomingcard");
        }
    })

    tl.to(".maincard", {
        scale : 1.1,
        opacity : 0,
        ease : Circ,
        duration : 0.9
    }, "a")
    .from(".incomingcard", {
        scale : 0.9,
        opacity : 0,
        ease : Circ,
        duration : 1.1
    }, "a")
    }
};

let deny = document.querySelector(".deny");
let accept = document.querySelector(".accept");

deny.addEventListener("click", function(){
    imageChange();
    setData(curr-1);
    gsap.from(".details .element", {
        x : "100%",
        stagger : .06,
        ease : Power4.easeInOut,
        duration : 1,
    })
})
accept.addEventListener("click", function(){
    imageChange();
    setData(curr-1);
    gsap.from(".details .element", {
        x : "-100%",
        stagger : .06,
        ease : Power4.easeInOut,
        duration : 1,
    })
})
