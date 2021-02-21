

var teamSection = d3.select("#team-section");
var memberDutiesJsonPath = "Assets/MemberDuties.json";

d3.json(memberDutiesJsonPath, d => d)
  .then(data => {
    var divs = teamSection.selectAll("div")
                            .data(data)
                            .enter()
                            .append("div")
                            .attr("class","column");

    divs.append("h6").text(d => d.Member);
    divs.append("p").text(d => d.Duties);
    divs.append("a").attr("href", d => d.LinkedIn)
                    .attr("target", "_blank")
                    .text("LinkedIn");
    // teamSection.selectAll("div")
    //            .data(data)
    //            .enter()


  })