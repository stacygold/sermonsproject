'use strict';
/************************
 * Random Quotes array
 ************************/
var quotes = [
    'Philippians 4:13 - I can do all this through him who gives me strength.',
    'Proverbs 3:5 - Trust in the LORD with all your heart and lean not on your own understanding;',
    'Hebrews 11:1 - Now faith is confidence in what we hope for and assurance about what we do not see.', 
    'Proverbs 22:6 - Start children off on the way they should go, and even when they are old they will not turn from it.', 
    'James 5:16 - Therefore confess your sins to each other and pray for each other so that you may be healed. The prayer of a righteous person is powerful and effective.', 
    'Matthew 11:28 - Come to me, all you who are weary and burdened, and I will give you rest.', 
    'Proverbs 22:4 - True humility and fear of the Lord lead to riches, honor, and long life.', 
    'Romans 12:21 - Don\’t let evil conquer you, but conquer evil by doing good.',
    '2 Corinthians 5:7 - For we live by believing and not by seeing.', 
    '1 John 4:19 - We love each other[a] because he loved us first.', 
    '1 Peter 5:7 - Give all your worries and cares to God, for he cares about you.', 
    'John 1:5 - The light shines in the darkness, and the darkness can never extinguish it.', 
    'Psalm 119:11 - I have hidden your word in my heart, that I might not sin against you.'
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

/************************************
 * Clicking the thumbnail to enlarge
 ************************************/
var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';

function setDetails(imageUrl, titleText) {
    'use strict';
    var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    detailImage.setAttribute('src', imageUrl);

    var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
    detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail) {
    'use strict';
    setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumbnail) {
    'use strict';
    thumbnail.addEventListener('click', function (event) {
        event.preventDefault();
        setDetailsFromThumb(thumbnail);
    });
}

function getThumbnailsArray() {
    'use strict'
    var thumbnail = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    var thumbnailArray = [].slice.call(thumbnail);
    return thumbnailArray;
}

function initializeEvents() {
    'use strict';
    var thumbnail = getThumbnailsArray();
    thumbnail.forEach(addThumbClickHandler);
}

initializeEvents();