

var teamSection = d3.select("#team-section");
var memberDutiesJsonPath = "Assets/MemberDuties.json";

d3.json(memberDutiesJsonPath, d => d)
  .then(data => {
    var divs = teamSection.selectAll("div")
                            .data(data)
                            .enter()
                            .append("div")
                            .attr("class","row");

    divs.append("h6").text(d => d.Member);
    divs.append("p").text(d => d.Duties);

    // teamSection.selectAll("div")
    //            .data(data)
    //            .enter()


  })