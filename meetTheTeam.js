

var teamSection = d3.select("#team-section");
var memberDutiesJsonPath = "Assets/MemberDuties.json";

/* <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div> */

d3.json(memberDutiesJsonPath, d => d)
  .then(data => {
    var profileCards = teamSection.selectAll("div")
                                    .data(data)
                                    .enter()
                                    .append("div")
                                    .attr("class","card")
                                    .attr("style","width: 100%")
                                    .append("div")
                                    .attr("class","card-body");

    profileCards.append("h5")
                .attr("class","card-title")
                .text(d => d.Member);

    profileCards.append("p")
                .attr("class","card-text")
                .text(d => d.Duties);

    profileCards.append("a")
                .attr("href",d => d.LinkedIn)
                .text("LinkedIn");


    // teamSection.selectAll("div")
    //            .data(data)
    //            .enter()


  })