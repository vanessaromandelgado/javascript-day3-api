function getData(){
    let season = document.querySelector('#season').value;
    let round = document.querySelector('#round').value;
  
    fetch(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
    .then(response => response.json())
    .then(racerdata => {
        console.log(racerdata)
        for(let i=0; i<7; i++){
            let generalDriverData= racerdata.MRData.StandingsTable.StandingsLists[0].DriverStandings[i]
            //Driver Data
            let givenName= generalDriverData.Driver.givenName;
            let familyName= generalDriverData.Driver.familyName;
            let fullName= `${givenName} ${familyName}`
            console.log(fullName)
            document.querySelector(`#name-${i}`).innerHTML=fullName
            //Nationality Data
            let nationality = generalDriverData.Driver.nationality;
            console.log(nationality)
            document.querySelector(`#nationality-${i}`).innerHTML=nationality
            //Sponsor Data
            let sponsor= racerdata.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Constructors[0].name;
            console.log(sponsor)
            document.querySelector(`#sponsor-${i}`).innerHTML=sponsor
            //Points Data
            let points = generalDriverData.points;
            console.log(points)
            document.querySelector(`#points-${i}`).innerHTML=points
            
        }
    })
}