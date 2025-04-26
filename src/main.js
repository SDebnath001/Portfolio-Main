let workARea = document.getElementById("workArea");
let worklistNav = document.getElementById("worklist-nav");

        worklistNav.addEventListener("click", (e) => {
            if (e.target.id == "img1") {
                workARea.innerHTML = ` 
                    <div class="work-name">GSM Foundation</div>
                    <div class="work-img">
                        <img src="./img/GCM-p1.png" alt="">
                    </div>
                    <div class="work-desc">
                        <p>
                      The GCM Foundation was established in 2007 in memory of Sri Guduguntla Narayana, Smt Lakshmamma (our grandparents), 
                      Sri Guduguntla Chandraiah & Smt Mallamma (our parents). This was then registered as a charity in India on 22nd February 2007.
                        </p><br>
                    <p>
                      In this minor project, I have worked as a UI designer and front end developer. My work was to create, add and maintain content of events page.
                      It was a small task and still new events are updated and added. I was working on this project during my training time for web development in 2024.
                      After this now i have used javascript to create dynamic event page using lazy loading and observerAPI. which did increase the performance of the page.
                    </p>
                    <br>
                    <p>Click here to visite site > <a href="https://www.gcmfoundation.org/" target="_blank" style="text-decoration: none; color:rgb(0, 4, 255)">&nbsp;&nbsp;&nbsp;GCM Foundation</a></p>
                    </div>
                `;
            }
            else if (e.target.id == "img2") {
                workARea.innerHTML = ` 
                    <div class="work-name">LEW Lite Portal</div>
                    <div class="work-img">
                        <img src="./img/LEW-LITE.png" alt="">
                    </div>
                    <div class="work-desc">
                        <p>
                      LEW Lite is an advanced Indonesian fingerprint identification portal tailored for government officials and law enforcement personnel. 
                      This platform streamlines the process of accessing an individual’s details using a unique code, akin to India’s Aadhaar card system. Designed as a criminal search history tool, 
                      LEW Lite enables officials to retrieve data using fingerprints and offers seamless functionality for uploading fingerprint records.
                      LEW Lite has empowered officials with a user-friendly portal to enhance crime investigation processes, bridging technology and efficiency in forensic identification.
                    </p><br>
                    <p>
                      <b>Key Features:</b>
                      <br>
                      <p>- Fingerprint Identification: Effortlessly search and retrieve data using uploaded fingerprints.</p>
                      <p>- Unique Code Integration: Search profiles using a specific identification code.</p>
                      <p>- Comprehensive History: View detailed criminal search records linked to fingerprints.</p>
                    </p>
                    <br>
                    <p>
                      <b>Development:</b>
                      <br>
                      <p>- Collaborated with a senior developer to complete the project within 3 months.</p>
                      <p>- Built the entire application using Angular where front-end development and design was handled by me.</p>
                    </p>
                    <br>
                    <p>
                      Click here to view document > <a href="https://drive.google.com/file/d/1e7Mb5tGMk9U7cMMmZhn3T41Pgly0D-Te/view?usp=sharing" target="_blank" style="text-decoration: none; color:rgb(0, 4, 255)">&nbsp;&nbsp;&nbsp;LEWLite Portal</a>
                    </p>
                    </div>
                `;
            }
            else if (e.target.id == "img3") {
                workARea.innerHTML = ` 
                    <div class="work-name">SamrtFace-Tech Solutions</div>
                    <div class="work-img">
                        <img src="./img/smart-face.png" alt="">
                    </div>
                    <div class="work-desc">
                        <p>Smartface Technologies is a Global Leader in providing scalable Biometric Identity Management Solution for Government and Private Sectors, such as in Civil ID, Law Enforcement, 
                        Defence and Intelligence, Border Control, Banking, Insurance, Multi-finance, Financial Technologies (FinTech), and Healthcare.
                        </p><br>
                    <p>
                      This project marked my first real-world experience during my web development journey. This project was a pivotal milestone, allowing me to apply foundational web development skills to a live platform while gaining hands-on experience in real-time collaboration.
                    </p><br>
                    <p>
                      <b>My Contributions:</b>
                      <br>
                      <p>- Redesigned the navigation bar for improved usability and implemented seamless routing across the website.</p>
                      <p>- Made content and design updates to the Products and Solutions page and Technologies page, enhancing clarity and user-friendliness.</p>
                    </p>
                    <br>
                    <p>Click here to visite site > <a href="https://www.smartface-tech.com/" target="_blank" style="text-decoration: none; color:rgb(0, 4, 255)">&nbsp;&nbsp;&nbsp;SmartFace-Tech</a></p>
                    </div>
                `;
            }
            else if (e.target.id == "img4") {
                workARea.innerHTML = `
                    <div class="work-name"> Please Click on the images below </div>
                    <div class="work-img">
                        <img src="./img/blank-img.png" alt="project-img">
                    </div>
                    <div class="work-desc">
                        Will be added soon when finished. Thank you.
                    </div>
                `;
            }
        });