

var teamSection = d3.select("#team-section");
var memberDutiesCsvPath = "Assets/MemberDuties.csv";

d3.csv(memberDutiesCsvPath, d => d)
  .then(data => {
    teamSection.selectAll("div")
               .data(data)
               .enter()
               .append("div")
               .attr("class","row")
               .append("h6")
               .text(d => d.Member);

    teamSection.selectAll("div")
               .data(data)
               .enter()
               .append("p")
               .text(d => d.Duties);

  })