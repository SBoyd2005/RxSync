export default function About(){
    return `
    <!-- Slideshow container -->
<div class="slideshow-container">
    <img src="https://www.smmcnj.com/images/Content/Emergency-Room-Nurses-Station.jpg" style="width:100%">
  </div>
  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a class="next" onclick="plusSlides(1)">&#10095;</a>
<br>
<div style="text-align:center">
  <span class="dot" onclick="currentSlide(1)"></span> 
  <span class="dot" onclick="currentSlide(2)"></span> 
</div>
    <h1>Our Story</h1>
    <p>The drive behind this page is personal. After a loved one had an allergic reaction to a prescription being a letter off, my goal was to investigate this problem deeper. I found that there is a discrepency in pharmaceutical data, if you have one doctor, say a General Practioner, in one health system and a specialist in another system. Since Emergency situations create fight or flight in both the patient and family members, I decided to come up with a solution to cover the gap on this discrepancy.</p>
    <h1>Goals</h1>  
        <p class="goals">The goals of this website are to provide the following to consumers:
            <li>Simplicity</li>
            <li>Time-Saving</li>
            <li>Accuracy</li>
            <li>Reliability</li>
            <li>Thorough</li>
            </p>
    `;
}