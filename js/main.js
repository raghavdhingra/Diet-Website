const products = {
    contour: {
        name: "Contour",
        details: "A blend of organic Ayurveda Herbs, promotes wellness and weight, Fat / Inch loss. Garcinia Combogia, is a fruit contain HCA, helps suppress the appetite and promote weight loss. Oolong tea contains vitamins, minerals,amino acids and beneficial tea polyphenol antioxidants. Moringa is a rich source of vitamins, minerals, and amino acids. It fights free radicals. It fights inflammation. Its not just a tea, Contoue is a blend of more than 10 natural herbs and species, promote healthy wellbeing.",
        link: "https://google.com",
        image: "./images/contour.jpeg",
        lower_content: "none"
    },
    panacea: {
        name: "Panacea",
        details: "Ashwagandha that supported by science. It's an ancient Medicinal Herb. Its has Anti-Cancer Properties. Boost the immune system,  soothe and enhance the nervous system, and promote longevity and vitality. One of ashwagandha's most touted benefits is its abilityto create more balanced energy. Shankhapushpi is used as medhya, laxative, aphrodisiac, nervine tonic, rejuventor, health promoting and complexion promoting. Punarnava is often a component in anti-obesity formulations. It is believed to stimulate the digestive fire and boost sluggish disgestion. It also reduces water retention in the body beacause of its diuretic effect. Shatavari, or Asparagus rejuvenative tonic for the female reproductive system. Supports a healthy female reproduxtive system. Healthy levels of breast milk production. Supports balanced female hormones. Turmeric is a powerful anti-inflamation on a molecular level by blocking a molecule that travels to the nuclei of the cells and helpful in PCOS.",
        link: "https://yahoo.com",
        image: "./images/panacea.jpeg",
        lower_content: "none"
    },
    immuno: {
        name: "Immuno Sip",
        details: "It helps the body to detoxify itself from harmful toxins. Nettle is a diuretic, helps in flushing out harmful chemicals and excess liquids from the body. Nettle contains iron and vitamin C. Vitamin C improves the body's absorption of iron-6, which aids in alleviation anemia and fatigue. Echinacea the herb encourages the immune system and reduces many of the symptoms. Holy Basil is well known for medicial properties. It has Anti-Inflammatory Effects, protects the Liver, Protects against and heals stomach ulcers. Licorice reduces nausea, stomach pain, and heartburn. This is due to the anti-inflammatory and immune-boosting properties of the glycyrrhizic acid.",
        link: "none",
        image: "./images/immuno_sip.jpeg",
        lower_content: "none"
    },
    divine: {
        name: "Divine Sip",
        details: "Blend of natural dry petals of Lavendar, Chammomile, Rose, Jasmine, and Hibicus. The floral teas are well known for managing stress, boost immunity with several benefits. Jasmine tea reduces stress and enhances mood. Rose petals helps in strengthen immune system and use for glowing skin. Lavendar reduces anxiety and stress. Chammomile helps treating diabetes and lowering blood sugar level, reducing inflamation and has anti-cancerous properties. Hibicus is packed with antioxidants. Helps lowering blood pressure, helps lower fat levels, boost liver health and promote weight loss.",
        link: "k",
        image: "./images/divine_sip.jpeg",
        lower_content: "none"
    }
}

const popup = document.getElementById("popup");
const popup_lower_content = document.getElementById("popup_lower_content");
const content_head = document.getElementById("content_head");
const content_text = document.getElementById("content_text");
const popup_img = document.getElementById("popup_img");
const popup_content_link = document.getElementById("popup_content_link");



const mpopup = document.getElementById("mpopup");
const mpopup_lower_content = document.getElementById("mpopup_lower_content");
const mcontent_head = document.getElementById("mcontent_head");
const mcontent_text = document.getElementById("mcontent_text");
const mpopup_img = document.getElementById("mpopup_img");
const mpopup_content_link = document.getElementById("mpopup_content_link");


const close_popup = () => {
    popup.style.display="none";
    mpopup.style.display="none";
}

const details_1 = () => {
    if (screen.width <= 700){
        mpopup.style.display="block";
        mpopup_lower_content.innerText = products.contour.lower_content;
        mcontent_head.innerText = products.contour.name;
        mcontent_text.innerText = products.contour.details;
        mpopup_img.src = products.contour.image;
        mpopup_content_link.href=products.contour.link;
    }
    else {
        popup.style.display="block";
        popup_lower_content.innerText = products.contour.lower_content;
        content_head.innerText = products.contour.name;
        content_text.innerText = products.contour.details;
        popup_img.src = products.contour.image;
        popup_content_link.href=products.contour.link;
    }
}
const details_2 = () => {
    if (screen.width <= 700){
        mpopup.style.display="block";
        mpopup_lower_content.innerText = products.panacea.lower_content;
        mcontent_head.innerText = products.panacea.name;
        mcontent_text.innerText = products.panacea.details;
        mpopup_img.src = products.panacea.image;
        mpopup_content_link.href=products.panacea.link;
    }
    else{
        popup.style.display="block";
        popup_lower_content.innerText = products.panacea.lower_content;
        content_head.innerText = products.panacea.name;
        content_text.innerText = products.panacea.details;
        popup_img.src = products.panacea.image;
        popup_content_link.href=products.panacea.link;
    }
}
const details_3 = () => {
    if (screen.width <= 700){
        mpopup.style.display="block";
        mpopup_lower_content.innerText = products.immuno.lower_content;
        mcontent_head.innerText = products.immuno.name;
        mcontent_text.innerText = products.immuno.details;
        mpopup_img.src = products.immuno.image;
        mpopup_content_link.href=products.immuno.link;
    }
    else{
        popup.style.display="block";
        popup_lower_content.innerText = products.immuno.lower_content;
        content_head.innerText = products.immuno.name;
        content_text.innerText = products.immuno.details;
        popup_img.src = products.immuno.image;
        popup_content_link.href=products.immuno.link;
    }
}
const details_4 = () => {
    if (screen.width <= 700){
        mpopup.style.display="block";
        mpopup_lower_content.innerText = products.divine.lower_content;
        mcontent_head.innerText = products.divine.name;
        mcontent_text.innerText = products.divine.details;
        mpopup_img.src = products.divine.image;
        mpopup_content_link.href=products.divine.link;
    }
    else{
        popup.style.display="block";
        popup_lower_content.innerText = products.divine.lower_content;
        content_head.innerText = products.divine.name;
        content_text.innerText = products.divine.details;
        popup_img.src = products.divine.image;
        popup_content_link.href=products.divine.link;
    }
}