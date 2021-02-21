

var teamSection = d3.select("#team-section");
var memberDutiesJsonPath = "Assets/MemberDuties.json";

d3.json(memberDutiesJsonPath, d => d)
  .then(data => {
    teamSection.selectAll("div")
               .data(data)
               .enter()
               .append("div")
               .attr("class","row")
               .append("h6")
               .text(d => d.Member)
               .append("p")
               .text(d => d.Duties);

    // teamSection.selectAll("div")
    //            .data(data)
    //            .enter()


  })