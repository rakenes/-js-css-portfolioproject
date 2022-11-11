
var formObject = {
    
    one: {
        descriptionSurver: "Task",
        hazardRisk: ["Will the member of staff be using a ladder?", "Use both hand for the task?", "Does the task involve staff reaching above their head?", "Does the task involve staff reaching to the side?", "Does the task involve staff lifting, handling or supporting loads?", "Does the task involve working at height for long periods (greater than 20-30 minutes)?", "Other please specify"],
            surveyDescription: ["Only the provided Kick Stools and Safety Ladders are to be used", "Staff are to retain three points of contact two feet and ahand with Kick Stools & Safety Ladders as far as reasonably practical through seeking assistance from acolleague to pass items up to be put on shelves or placing them at an accessible half way point prior to climbing up the steps", "Make sure the Kick Stool or Safety Ladder is the correct height for the work that is planned", "Never work sideways. If necessary, get down, and move the Kick Stool or Safety Ladder to a closer position to the work. Never over reach.", "Store heavy or large items at the bottom and smaller,lighter items higher up on shelves. Re-organise storage areas as necessary to accommodate", "Take frequent breaks and reduce time spent working at height as far as reasonably practicable."]

},
two: {
    descriptionSurver: "Individual",
    hazardRisk: ["Has the individual have the required experience and training? ", "Are there any health issues that need to be considered e.g. vertigo/giddiness?", "Will the individual’s clothing restrict movement or stability?", "Other please specify"],
    surveyDescription: ["Staff should  Undertake the required Manual Handling training.  Received and read a copy of the SOAS Work at height guidance. Contact healthandsafety@soas,ac.uk for additional support and guidance.", 
    "No staff to use Kick Stools or Safety Steps if they have a medical condition, or are taking medication that could affect their safety, or are under the influence of drugs or alcohol. Any staff with health issues that may affect their ability to work should “People Services” (HR) for Occupational Health advise/support.", 
    "Wear firm, flat soled shoes. Never work in high heels, bare feet or slipper. Do not work in “flowing” clothes that could present a trip hazard or could catch on equipment. ", 
    "Other please specify"],
},
three: {
    descriptionSurver: "Load/Equipment",
    hazardRisk: ["Are there lots of items to be carried or moved?", "Is the load heavy and awkward?", "Is the safety ladder stable?", "Has the Safety Ladder/Kick Stool been visually inspected for signs of faults by a competent person before use.", "Has the Safety Ladder or Kick Stool been included in the estates maintenance regime as required? ", "Are there any risk from falling objects?", "Other please specify"],
surveyDescription: ["Where possible try to break loads down into smaller weights to be carried. Ensure that these are packaged safely to allow a good grip hold, before working at height. Take breaks throughout the work and rotate jobs with other members of staff if appropriate.", 
"Do not carry loads of more than 10 kg at a time.",
"Check that the safety ladder is stable when locked into the correct position before it is used.", 
"Staff should receive and read a copy of the SOAS Work at Height Guidance which includes inspection guidance. Any issues to be raised with Campus Services and Safety ladder/Kick Stool removed from use until resolved.", "Liaise with Campus Services if this is not the case and refrain from using in the interim.", "If there is a risk of anything falling that could injure someone, make sure no one comes into the area below the work. Nothing should be thrown down from a Safety Ladder or Kick Stool.", "Other please specify" ]
},
four: {
    descriptionSurver: "Environment",
    hazardRisk: ["Is the surface uneven?", "s the lighting suitable?", 
    "Are there people moving underneath or nearby the Safety Ladder or Kick Stool ", 
    "Other – please specify"],
    surveyDescription: ["Equipment must be placed on a firm, level surface.", 
    "Ensure sufficient lighting conditions and contact Campus Services to address any issues.", 
    "Ensure other staff keep clear of the area when working at height is being carried out"],
    }

 

};

console.console.log(formObject[0][1]);

//Accessing paragraph in utfylling 


// Easy JS in P
document.getElementById("utfylling-ladder").innerHTML = 5 + 6;

