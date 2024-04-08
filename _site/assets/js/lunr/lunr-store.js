var store = [,{
    "title": "Page Not Found",
    "excerpt":"Sorry, but the page you were trying to view does not exist.  ","url": "/404.html"
  },{
    "title": "About",
    "excerpt":"The UKI discs meeting aims to bring together different astrophysical disc communities across the UK &amp; Ireland. We are delighted to announce the first meeting of this series will be hosted at the University of Warwick on 9th-11th September 2024! The theme of the meeting will be Protoplanetary Discs and...","url": "/"
  },{
    "title": "Info",
    "excerpt":"Getting Here Food Accommodation Childcare Support Financial Support The UKI Discs Meeting will be held in the Zeeman Building at the University of Warwick. The university is located on the outskirts of Coventry, about 3 miles to the city centre. The town of Kenilworth is slightly closer (2 miles), but...","url": "/info/"
  },{
    "title": "Mailing List",
    "excerpt":"Want to know about the latest events, learning opportunities, and upcoming job positions? Sign up for the UK &amp; Ireland Discs email list! Follow the link here:   Mailing list signup   Note: This mailing list is separate to the conference mailing list.  ","url": "/mailing-list/"
  },{
    "title": "Participants",
    "excerpt":"Coming soon.   ","url": "/participants/"
  },{
    "title": "Programme",
    "excerpt":"Coming soon.  ","url": "/programme/"
  },{
    "title": "Register",
    "excerpt":"Registration for this meeting is free! The meeting includes 3 days of traditional conference-style talks and discussion sessions. The SOC will select talks with the aim of ensuring that a range of topics are presented, that priority is given to early-career researchers, and that those from under-represented groups in astronomy...","url": "/register/"
  },{
    "title": null,
    "excerpt":"var idx = lunr(function () { this.field('title') this.field('excerpt') this.field('categories') this.field('tags') this.ref('id') this.pipeline.remove(lunr.trimmer) for (var item in store) { this.add({ title: store[item].title, excerpt: store[item].excerpt, categories: store[item].categories, tags: store[item].tags, id: item }) } }); $(document).ready(function() { $('input#search').on('keyup', function () { var resultdiv = $('#results'); var query = $(this).val().toLowerCase(); var result = idx.query(function...","url": "/assets/js/lunr/lunr-en.js"
  },{
    "title": null,
    "excerpt":"step1list = new Array(); step1list[\"ΦΑΓΙΑ\"] = \"ΦΑ\"; step1list[\"ΦΑΓΙΟΥ\"] = \"ΦΑ\"; step1list[\"ΦΑΓΙΩΝ\"] = \"ΦΑ\"; step1list[\"ΣΚΑΓΙΑ\"] = \"ΣΚΑ\"; step1list[\"ΣΚΑΓΙΟΥ\"] = \"ΣΚΑ\"; step1list[\"ΣΚΑΓΙΩΝ\"] = \"ΣΚΑ\"; step1list[\"ΟΛΟΓΙΟΥ\"] = \"ΟΛΟ\"; step1list[\"ΟΛΟΓΙΑ\"] = \"ΟΛΟ\"; step1list[\"ΟΛΟΓΙΩΝ\"] = \"ΟΛΟ\"; step1list[\"ΣΟΓΙΟΥ\"] = \"ΣΟ\"; step1list[\"ΣΟΓΙΑ\"] = \"ΣΟ\"; step1list[\"ΣΟΓΙΩΝ\"] = \"ΣΟ\"; step1list[\"ΤΑΤΟΓΙΑ\"] = \"ΤΑΤΟ\"; step1list[\"ΤΑΤΟΓΙΟΥ\"] = \"ΤΑΤΟ\"; step1list[\"ΤΑΤΟΓΙΩΝ\"] = \"ΤΑΤΟ\"; step1list[\"ΚΡΕΑΣ\"]...","url": "/assets/js/lunr/lunr-gr.js"
  },{
    "title": null,
    "excerpt":"var store = [ {%- for c in site.collections -%} {%- if forloop.last -%} {%- assign l = true -%} {%- endif -%} {%- assign docs = c.docs | where_exp:'doc','doc.search != false' -%} {%- for doc in docs -%} {%- if doc.header.teaser -%} {%- capture teaser -%}{{ doc.header.teaser }}{%- endcapture...","url": "/assets/js/lunr/lunr-store.js"
  },{
    "title": null,
    "excerpt":"{% if page.xsl %}{% endif %}Jekyll{{ site.time | date_to_xmlschema }}{{ page.url | absolute_url | xml_escape }}{% assign title = site.title | default: site.name %}{% if page.collection != \"posts\" %}{% assign collection = page.collection | capitalize %}{% assign title = title | append: \" | \" | append: collection %}{% endif...","url": "/feed.xml"
  },{
    "title": null,
    "excerpt":"{% if page.xsl %} {% endif %} {% assign collections = site.collections | where_exp:'collection','collection.output != false' %}{% for collection in collections %}{% assign docs = collection.docs | where_exp:'doc','doc.sitemap != false' %}{% for doc in docs %} {{ doc.url | replace:'/index.html','/' | absolute_url | xml_escape }} {% if doc.last_modified_at or doc.date...","url": "/sitemap.xml"
  },{
    "title": null,
    "excerpt":"Sitemap: {{ \"sitemap.xml\" | absolute_url }} ","url": "/robots.txt"
  }]
