### 2일차

### 슬라이드 S-2

![깃헙0](https://github.com/GEUMAIN/webDesignSlide/assets/128437656/b1f7c9c2-a00b-44fe-b07f-ce25fe0a46cb)

---

### HTML

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>웹디자인기능사 슬라이드 S-2</title>
    <link href="https://webfontworld.github.io/gmarket/GmarketSans.css" rel="stylesheet">
    <link rel="stylesheet" href="CSS/style.css">
    <script src="JS/script.js"></script>
</head>

<body>
    <div id="wrap">
        <header id="header">
            <h1 class="logo"></h1>
            <nav class="nav"></nav>
        </header>

        <article id="slider">
            <div class="sliderWrap">
                <div class="slider s1">
                    <img src="../images/slider01.jpg" alt="">
                    <span>이미지1</span>
                </div>

                <div class="slider s2">
                    <img src="../images/slider02.jpg" alt="">
                    <span>이미지2</span>
                </div>

                <div class="slider s3">
                    <img src="../images/slider03.jpg" alt="">
                    <span>이미지3</span>
                </div>
            </div>
        </article>

        <main id="contents">
            <section class="content1"></section>
            <section class="content2"></section>
            <section class="content3"></section>

        </main>

        <footer id="footer">
            <div class="footer1"></div>
            <div class="footer2"></div>
            <div class="footer3"></div>
        </footer>
    </div>
</body>

</html>
```

---

### CSS

```css
* {
    margin: 0;
    padding: 0;
    font-family: 'GmarketSans';
}

#wrap {
    width: 1200px;
    margin: 0 auto;
}

#header {
    width: 100%;
    display: flex;

}

#header .logo {
    width: 20%;
    height: 100px;
    background-color: #efefef;
}

#header .nav {
    width: 80%;
    height: 100px;
    background-color: #e3e3e3;
}

#slider {
    width: 100%;
    height: 300px;
    background-color: #c9c9c9;
}

#contents {
    width: 100%;
    display: flex;
}

#contents .content1 {
    width: 33.3333%;
    height: 200px;
    background-color: #d1d1d1;
}

#contents .content2 {
    width: 33.3333%;
    height: 200px;
    background-color: #c7c7c7;
}

#contents .content3 {
    width: 33.3333%;
    height: 200px;
    background-color: #bcbcbc;
}

#footer {
    width: 100%;
    display: flex;
}

#footer .footer1 {
    width: 20%;
    height: 100px;
    background-color: #b1b1b1;
}

#footer .footer2 {
    width: 60%;
    height: 100px;
    background-color: #a3a3a3;
}

#footer .footer3 {
    width: 20%;
    height: 100px;
    background-color: #9d9d9d;
}

#slider {
    overflow: hidden;
}

.sliderWrap {
    display: flex;
}

.sliderWrap .slider {
    position: relative;
}

.sliderWrap .slider img {
    vertical-align: top;
}

.sliderWrap .slider span {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.3);
    color: #fff;
    padding: 10px 20px;
}
```

---

### JavaScript

```jsx
window.onload = function () {
    let currentIndex = 0;
    const sliderWrap = document.querySelector(".sliderWrap");
    const slider = document.querySelector(".slider");
    const sliderClone = sliderWrap.firstElementChild.cloneNode(true);
    sliderWrap.appendChild(sliderClone);

    setInterval(() => {
        currentIndex++;
        sliderWrap.style.marginLeft = -currentIndex * 100 + "%";
        sliderWrap.style.transition = "all 0.6s";

        if (currentIndex == 3) {
            setTimeout(() => {
                sliderWrap.style.transition = "0s";
                sliderWrap.style.marginLeft = "0";
                currentIndex = 0;
            }, 700);
        }
    }, 3000)
}
```

---

### 슬라이드 S-3

![깃헙1](https://github.com/GEUMAIN/webDesignSlide/assets/128437656/57959195-6331-4b95-8a6c-8b1ad9046e9e)

---

### HTML

```html
<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>웹디자인기능사 슬라이드 S-3</title>
    <link href="https://webfontworld.github.io/gmarket/GmarketSans.css" rel="stylesheet">
    <link rel="stylesheet" href="CSS/style.css">
    <script src="JS/script.js"></script>
</head>

<body>
    <div id="wrap">
        <header id="header">
            <h1 class="logo"></h1>
            <nav class="nav"></nav>
        </header>

        <article id="slider">
            <div class="sliderWrap">
                <div class="slider s1">
                    <img src="../images/slider01.jpg" alt="">
                    <span>이미지1</span>
                </div>

                <div class="slider s2">
                    <img src="../images/slider02.jpg" alt="">
                    <span>이미지2</span>
                </div>

                <div class="slider s3">
                    <img src="../images/slider03.jpg" alt="">
                    <span>이미지3</span>
                </div>
            </div>
        </article>

        <main id="contents">
            <section class="content1"></section>
            <section class="content2"></section>
            <section class="content3"></section>
        </main>
        
    </div>
</body>

</html>
```

---

### CSS

```css
* {
    margin: 0;
    padding: 0;
    font-family: 'GmarketSans';
}

#wrap {
    width: 1200px;
    margin: 0 auto;
}

#header {
    width: 100%;
    display: flex;
}

#header .logo {
    width: 20%;
    height: 100px;
    background-color: #efefef;
}

#header .nav {
    width: 80%;
    height: 100px;
    background-color: #e3e3e3;
}

#slider {
    width: 100%;
    height: 300px;
    background-color: #d9d9d9;
}

#contents {
    width: 100%;
    display: flex;
}

#contents .content1 {
    width: 33.3333%;
    height: 200px;
    background-color: #b1b1b1;
}

#contents .content2 {
    width: 33.3333%;
    height: 200px;
    background-color: #c7c7c7;
}

#contents .content3 {
    width: 33.3333%;
    height: 200px;
    background-color: #bcbcbc;
}

#footer {
    width: 100%;
    display: flex;
}

#footer .footer1 {
    width: 20%;
    height: 100px;
    background-color: #b1b1b1;
}

#footer .footer2 {
    width: 60%;
    height: 100px;
    background-color: #a3a3a3;
}

#footer .footer3 {
    width: 20%;
    height: 100px;
    background-color: #9d9d9d;
}

#slider {
    overflow: hidden;
}

#slider .sliderWrap .slider {
    position: relative;
}

#slider .sliderWrap .slider img {
    vertical-align: top;
}

#slider .sliderWrap .slider span {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.3);
    color: #fff;
    padding: 10px 20px;
}
```

---

### JavaScript

```jsx
window.onload = function () {
    let currentIndex = 0;
    const sliderWrap = document.querySelector(".sliderWrap");
    const slider = document.querySelectorAll(".slider");
    const sliderClone = sliderWrap.firstElementChild.cloneNode(true);
    sliderWrap.appendChild(sliderClone);

    setInterval(() => {
        currentIndex++;
        sliderWrap.style.transition = "all 0.6s";
        sliderWrap.style.marginTop = -currentIndex * 300 + "px";

        if (currentIndex == slider.length) {
            setTimeout(() => {
                sliderWrap.style.transition = "0s";
                sliderWrap.style.marginTop = "0";
                currentIndex = 0;
            }, 700);
        }
    }, 3000);
}
```
