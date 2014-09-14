
if(!navigator.cookieEnabled) NSB.MsgBox('Please turn cookies on.');
(function(){var all=document.getElementsByTagName('*');for(var i=0;i<all.length;i++)if(typeof all[i].id!='undefined'&&typeof window[all[i].id]=='undefined')window[all[i].id]=all[i];})()

window.addEventListener('load', function() {
  frmMain.style.display = 'block';

  NSB.addProperties(hdrMain);
  NSB.addDisableProperty(hdrMain);


  if(typeof(hdrMain.onclick)=='function'){
    if(typeof(hdrMain_left)!='undefined') hdrMain_left.onclick=function() {hdrMain.onclick(hdrMain_left.getAttribute('nsbvalue'))};
    if(typeof(hdrMain_right)!='undefined') hdrMain_right.onclick=function() {hdrMain.onclick(hdrMain_right.getAttribute('nsbvalue'))}};
  if (false) {HTMLviewMain_ref = new IScroll(HTMLviewMain_scroller,{ mouseWheel:true, scrollbars:true, bounce: false, zoom:true,click:iScrollClick()});
    HTMLviewMain.refresh=function(){setTimeout(HTMLviewMain_ref.refresh(),100)}}
  NSB.addProperties(HTMLviewMain,HTMLviewMain_scroller);
  NSB.List_jqm_init14('lstMain','Choose One, Risk factors & Prophylaxis, Management, Clinical Tools',false,'100%',false,false);

  lstMain.refresh=function(){if (typeof lstMain_ref!='undefined') setTimeout(NSB.refresh,100,lstMain_ref)};

  NSB.addProperties(lstMain);
  (function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('lstMain_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
  NSB.addProperties(imgMain);
  frmMain.style.display = 'none';
  
}, false);
frmMain.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(frmMain);

hdrMain.onclick = function(choice) { savethefunction_rvar="";
  if(choice == "About") {
    backlink = "main";
    filename="about.htm";
    req=ReadFile(filename);
   if(req.status==200 || req.status==0) {
   HTMLview1.innerHTML = req.responseText;
   nsbDOMAttr(frmMain,'style.display',"none");
   nsbDOMAttr(frmView,'style.display',"block");
    HTMLview1.refresh();
 } else {
    _msgbox_confirm("File could not be read");
  }
}

if(choice == "Feedback") {
   nsbDOMAttr(frmMain,'style.display',"none");
   nsbDOMAttr(frmFeedback,'style.display',"block");
}
return savethefunction_rvar; }

lstMain.onclick = function(choice) { savethefunction_rvar="";
    switch (True) {
    case ((choice) == 1):
        nsbDOMAttr(frmMain,'style.display',"none");
        nsbDOMAttr(frmCP,'style.display',"block");
	break;
    case ((choice) == 2):
        nsbDOMAttr(frmMain,'style.display',"none");
        nsbDOMAttr(frmMX,'style.display',"block");
	break;
    case ((choice) == 3):
        backlink = "main";
        nsbDOMAttr(frmMain,'style.display',"none");
        nsbDOMAttr(frmClinTools,'style.display',"block");
  }


return savethefunction_rvar; }

window.addEventListener('load', function() {
  frmFeedback.style.display = 'block';

  NSB.addProperties(hdrFeedback);
  NSB.addDisableProperty(hdrFeedback);


  if(typeof(hdrFeedback.onclick)=='function'){
    if(typeof(hdrFeedback_left)!='undefined') hdrFeedback_left.onclick=function() {hdrFeedback.onclick(hdrFeedback_left.getAttribute('nsbvalue'))};
    if(typeof(hdrFeedback_right)!='undefined') hdrFeedback_right.onclick=function() {hdrFeedback.onclick(hdrFeedback_right.getAttribute('nsbvalue'))}};
  NSB.List_jqm_init14('lstFeedback','Question or Suggestion?, Email, Website',false,'100%',false,false);

  lstFeedback.refresh=function(){if (typeof lstFeedback_ref!='undefined') setTimeout(NSB.refresh,100,lstFeedback_ref)};

  NSB.addProperties(lstFeedback);
  (function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('lstFeedback_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()


  NSB.addProperties(Label1);
  frmFeedback.style.display = 'none';
  
}, false);
frmFeedback.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(frmFeedback);

hdrFeedback.onclick = function(choice) { savethefunction_rvar="";
        if(choice == "Back") {
        nsbDOMAttr(frmFeedback,'style.display',"none");
        nsbDOMAttr(frmMain,'style.display',"block");
        }
return savethefunction_rvar; }

lstFeedback.onclick = function(choice) { savethefunction_rvar="";

switch (True) {
  case ((choice) == 1):
    location = "mailto:palmdoc@gmail.com?subject=VTE CPG Feedback";
	break;
  case ((choice) == 2):
    location = "http://palmdoc.net/index.php/contact-us/";

}


return savethefunction_rvar; }

window.addEventListener('load', function() {
  frmView.style.display = 'block';

  NSB.addProperties(hdrView);
  NSB.addDisableProperty(hdrView);


  if(typeof(hdrView.onclick)=='function'){
    if(typeof(hdrView_left)!='undefined') hdrView_left.onclick=function() {hdrView.onclick(hdrView_left.getAttribute('nsbvalue'))};
    if(typeof(hdrView_right)!='undefined') hdrView_right.onclick=function() {hdrView.onclick(hdrView_right.getAttribute('nsbvalue'))}};
  if (true) {HTMLview1_ref = new IScroll(HTMLview1_scroller,{ mouseWheel:true, scrollbars:true, bounce: false, zoom:true,click:iScrollClick()});
    HTMLview1.refresh=function(){setTimeout(HTMLview1_ref.refresh(),100)}}
  NSB.addProperties(HTMLview1,HTMLview1_scroller);
  frmView.style.display = 'none';
  
}, false);
frmView.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(frmView);

hdrView.onclick = function(choice) { savethefunction_rvar="";
    if(choice == "Back") {

switch (True) {
  case ((backlink) == "cp"):
        nsbDOMAttr(frmView,'style.display',"none");
        nsbDOMAttr(frmCP,'style.display',"block");
	break;
  case ((backlink) == "mx"):
        nsbDOMAttr(frmView,'style.display',"none");
        nsbDOMAttr(frmMX,'style.display',"block");
	break;
  case ((backlink) == "improve"):
        nsbDOMAttr(frmView,'style.display',"none");
        nsbDOMAttr(frmImprove,'style.display',"block");
	break;
  case ((backlink) == "padua"):
        nsbDOMAttr(frmView,'style.display',"none");
        nsbDOMAttr(frmPadua,'style.display',"block");
	break;
  case ((backlink) == "wellsdvt"):
        nsbDOMAttr(frmView,'style.display',"none");
        nsbDOMAttr(frmWellsDVT,'style.display',"block");
	break;
  case ((backlink) == "wellspe"):
        nsbDOMAttr(frmView,'style.display',"none");
        nsbDOMAttr(frmWellsPE,'style.display',"block");
	break;
  case ((backlink) == "anticoag"):
        nsbDOMAttr(frmView,'style.display',"none");
        nsbDOMAttr(frmAnticoag,'style.display',"block");
	break;
    case ((backlink) == "main"):
        nsbDOMAttr(frmView,'style.display',"none");
        nsbDOMAttr(frmMain,'style.display',"block");
}

  }

return savethefunction_rvar; }

window.addEventListener('load', function() {
  frmCP.style.display = 'block';

  NSB.addProperties(HdrCP);
  NSB.addDisableProperty(HdrCP);


  if(typeof(HdrCP.onclick)=='function'){
    if(typeof(HdrCP_left)!='undefined') HdrCP_left.onclick=function() {HdrCP.onclick(HdrCP_left.getAttribute('nsbvalue'))};
    if(typeof(HdrCP_right)!='undefined') HdrCP_right.onclick=function() {HdrCP.onclick(HdrCP_right.getAttribute('nsbvalue'))}};
  NSB.List_jqm_init14('lstCP','Choose One, Assess the risk for VTE & bleeding, Risk factors for VTE, Risk factors for bleeding, Hospitalised Pts at increased Risk for VTE, Methods of VTE prophylaxis, Monitoring platelet counts, Using VTE prophylaxis in hospitalized pts,Timing of regional anaesthesia/ analgesia,Patient information, Discharge plan',true,'100%',false,false);
  lstCP_ref = new IScroll(lstCP_scroller,{ mouseWheel:true, scrollbars:true, bounce:true, zoom:false,click:iScrollClick()});
  lstCP.refresh=function(){if (typeof lstCP_ref!='undefined') setTimeout(NSB.refresh,100,lstCP_ref)};
  NSB.addProperties(lstCP, lstCP_scroller);

  (function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('lstCP_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
  frmCP.style.display = 'none';
  
}, false);
frmCP.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(frmCP);

HdrCP.onclick = function(choice) { savethefunction_rvar="";
  if(choice == "Back") {
        nsbDOMAttr(frmCP,'style.display',"none");
        nsbDOMAttr(frmMain,'style.display',"block");
  }
return savethefunction_rvar; }

lstCP.onclick = function(choice) { savethefunction_rvar="";
  backlink = "cp";
  switch (True) {
    case ((choice) == 1):
  HTMLview1.innerHTML = "<h3>Assess the risk of VTE & bleeding</h3><ul><li>Assess all patients on admission to identify:</li><ul><li>those who are at increased risk of VTE</li><li>those who are at increased risk of bleeding</li></ul><li>Reassess patients’ risks of VTE and bleeding within 24 hours of admission and whenever the clinical situation changes</li><li>Weigh the risk of VTE against the risk of bleeding</li></ul>";
  nsbDOMAttr(frmCP,'style.display',"none");
  nsbDOMAttr(frmView,'style.display',"block");
  HTMLview1.refresh();
	break;
    case ((choice) == 2):
  HTMLview1.innerHTML = "<h3>Risk factors for VTE</h3><ul><li>Active cancer</li><li>Age >60 years</li><li>Dehydration</li><li>Critical care admission</li><li>Obesity (BMI >30 kg/m2)</li><li>Use of oestrogen-containing oral contraceptive pill</li><li>Use of Hormone Replacement Therapy</li><li>Post-partum (within 6 weeks)</li><li>Previous VTE</li><li>Family h/o VTE</li><li>One or more significant medical comorbidities:	</li><ul><li>Heart disease</li><li>Metabolic, endocrine or respiratory pathologies</li><li>Acute infectious disease</li><li>Inflammatory conditions</li><li>Sickle cell disease</li><li>Thalassaemia</li><li>Varicose veins with phlebitis</li></ul></ul>";
  nsbDOMAttr(frmCP,'style.display',"none");
  nsbDOMAttr(frmView,'style.display',"block");
  HTMLview1.refresh();
	break;
    case ((choice) == 3):
  HTMLview1.innerHTML = "<h3>Risk factors for bleeding</h3><ul><li>Active bleeding</li><li>Acquired bleeding disorders (such as acute liver failure)</li><li>Concurrent use of anticoagulants (e.g. warfarin with INR >2.0)</li><li>Lumbar puncture/epidural/spinal anaesthesia expected within the next 12 hours</li><li>Lumbar puncture/epidural/spinal anaesthesia within the previous 4 hours</li><li>Acute stroke</li><li>Uncontrolled systolic hypertension (230/120 mmHg or higher)</li><li>Untreated inherited bleeding disorder (e.g. haemophilia or von Willebrand disease) </li></ul><b>More info </b>(<i>see Clinical Tools under Management section</i>)<br />The IMPROVE Bleeding Risk Score is used to weigh the risk of thrombosis versus bleeding events with thromboprophylaxis<table border='1' cellspacing='0' cellpadding='0' width='100%'><tbody><tr  bgcolor='#BDBDBD'><td colspan='2'>The IMPROVE Bleeding Risk Score</td></tr><tr  bgcolor='#BDBDBD'><td  width='75%'><b>Bleeding Risk Factors</b></td><td width='25%'><b>Score</b></td></tr><tr><td >Active gastro-duodenal ulcer</td><td >4.5</td></tr><tr><td >Bleeding &lt;3 months prior to admission*</td><td >4</td></tr><tr><td >Platelet count &lt;50 X 10<sup>9</sup>/L**</td><td >4</td></tr><tr><td >Age &gt;85 years</td><td >3.5</td></tr><tr><td >Liver failure with PT &gt;1.5X Normal</td><td >2.5</td></tr><tr><td >Severe renal failure GFR &lt;30 ml/min/1.73m<sup>2</sup></td><td >2.5</td></tr><tr><td >ICU/CCU admission</td><td >2.5</td></tr><tr><td >Central line catheter in place</td><td >2</td></tr><tr><td >Rheumatic/autoimmune disease</td><td >2</td></tr><tr><td >Current cancer</td><td >2</td></tr><tr><td >Age 40-84 years</td><td >1</td></tr><tr><td >Male</td><td >1</td></tr><tr><td >GFR 30-59 ml/min/1.73m<sup>2</sup></td><td >1</td></tr><tr  bgcolor='#BDBDBD'><td >High risk</td><td >Risk score: &ge;7</td></tr><tr  bgcolor='#BDBDBD'><td >Low risk</td><td >Risk score: &lt;7</td></tr><tr><td colspan='2'>*include previous GI bleeding of irreversible cause, non-cardiac embolic stroke and concomitant use of oral anticoagulant.<br>**include previous history of HITT and concomitant antiplatelet therapy with aspirin or clopidogrel</td></tr></tbody></table>";
  nsbDOMAttr(frmCP,'style.display',"none");
  nsbDOMAttr(frmView,'style.display',"block");
  HTMLview1.refresh();
	break;
    case ((choice) == 4):
  HTMLview1.innerHTML = "<h3>Hospitalised patients at increased risk of VTE</h3><b>Medical patients</b><br />Regard medical patients as being at increased risk of VTE if they:<ul><li>have had or are expected to have significantly reduced mobility for &ge; 3 days<br />OR</li><li>are expected to have ongoing reduced mobility relative to their normal state<br />AND</li><li>have one or more of the risk factors for VTE</li></ul><b>Surgical & trauma patients</b><br />Regard surgical patients and patients with trauma as being at increased risk of VTE if they meet one of the following criteria:<ul><li>Surgical procedure with a total anaesthetic and surgical time of >90 minutes, or<br />60 minutes if the surgery involves the pelvis or lower limb</li><li>Acute surgical admission with inflammatory or intra-abdominal condition</li><li>Expected significant reduction in mobility</li><li>One or more of the risk factors for VTE</li></ul><b>More information</b> (<i>see Clinical Tools under Management section</i>)<br /><br /><b>Medical Patients</b><br /><br />The Padua Prediction Score (PPS) is the best available validated prediction for VTE risk in medical patients with low-risk patients having a 0.3% rate of developing symptomatic VTE in 90 days and high risk patients having an 11% rate of developing VTE within 90 days. The PPS should not be applied to critically ill patients.<table width='100%' border='1' cellspacing='0' cellpadding='0'><tbody><tr><td colspan='2' width='100%'>Padua Risk Assessment Model for Medical Patients (Score of 4 and above = high risk of VTE)</td></tr><tr><td ><b>Baseline Features</b></td><td ><b>Score</b></td></tr><tr><td >An active cancer</td><td >3</td></tr><tr><td >Previous VTE</td><td >3</td></tr><tr><td >Reduced mobility</td><td >3</td></tr><tr><td >Already known thrombophilic condition</td><td >3</td></tr><tr><td >Recent (&lt;1 month) trauma and/or surgery</td><td >2</td></tr><tr><td >Age 70 years and above</td><td >1</td></tr><tr><td >Heart and/or respiratory failure</td><td >1</td></tr><tr><td >AMI or ischemic stroke</td><td >1</td></tr><tr><td >Acute infection and/or rheumatologic disorder</td><td >1</td></tr><tr><td >Obesity BMI &gt;30kg/m<sup>2</sup></td><td >1</td></tr><tr><td >Ongoing hormonal therapy</td><td >1</td></tr></tbody></table></P><br/><br/><table width='100%' border='1' cellspacing='0' cellpadding='0'><tbody><tr><td colspan='3'>Risk Stratification of Medical Patients and Prophylactic Recommendation</td></tr><tr><td width='15%'><b>Category</b></td><td width='70%'><b>Recommendations</b></td><td width='15%'><b>Grade </b></td></tr><tr bgcolor='#BDBDBD'><td colspan='3'>Low Risk</td></tr><tr><td>PPS &lt;4</td><td>No prophylaxis</td><td>B</td></tr><tr bgcolor='#BDBDBD'><td colspan='3'>High Risk</td></tr><tr><td>PPS &ge;4</td><td>LMWH <BR>Fondaparinux</td><td>A<BR>B</td></tr><tr bgcolor='#BDBDBD'><td colspan='3'>High Risk for bleeding</td></tr><tr><td>IMPROVE score =7</td><td><ol>	<li>Leg Compression Device (IPC or GECS) only</li>	<li>Switch to anticoagulant prophylaxis as soon as bleeding risk is considered to be low</li>	<li>Early ambulation</li></ol></td><td><ol><li>C</li><li>B</li><li>B</li></ol></td></tr><tr bgcolor='#BDBDBD'><td colspan='3' >Cancer</td></tr><tr><td>Prior VTE<BR/>Immobilization<BR/>Angiogenesis inhibitors- lenalidomide, thalidomide<BR/>Hormonal therapy</td><td>LMWH daily</td><td>B</td></tr><tr bgcolor='#BDBDBD'><td colspan='3'>High risk on long-distance flights</td></tr><tr><td>Cancer<br>Previous VTE<br>Severe obesity<br>Pregnancy</td><td><ol>	<li>Encouraged to get up and walk around periodically, flex calf muscles and sit in an aisle seat when possible</li>	<li>Consider using below-the-knee compression stockings at 15-30 mmHg</li>	<li>Aspirin or anticoagulant is not recommended for the purpose of prophylaxis against VTE on a long-distance flight</li></ol></td><td><ol><li>B</li><li>C</li><li>B</li></ol></td></tr></tbody></table><br/><b>Surgical Patients</b><br />For surgical patients, the primary prophylactic measures depend on the risk stratification of the individual patient and the clinical situation <table width='100%' border='1' cellspacing='0' cellpadding='0'><tbody><tr><td colspan='3' >Risk Stratification of Surgical Patients and Prophylactic Recommendation</td></tr><tr><td width='25%'><b>Risk category</b></td><td width='40%'><b>Recommended prophylaxis</b></td><td width='35%'><b>Grade</b></td></tr><tr bgcolor='#BDBDBD'><td colspan='3' ><b>Low Risk</b></td></tr><tr><td><ul>	<li>Ambulatory patient &lt;40 years without risk factor*</li>	<li>Minor surgery (&lt;30 min)</li>	<li>Knee arthroscopy with no additional risk*</li></ul></td><td>Early aggressive ambulation</td><td>A</td></tr><tr bgcolor='#BDBDBD'><td colspan='3' ><b>Moderate Risk</b></td></tr><tr><td><ul>	<li>Patient with an extra risk*</li>	<li>Patient 40-60 years without risk*</li>	<li>Major surgery (&gt;30 min) for benign disease</li></ul></td><td>LMWH<br>Fondaparinux<br>LD-UFH q 12 hr<br>GESC, IPC, VFP<br></td><td>A<br>A<br>B<br>C</td></tr><tr bgcolor='#BDBDBD'><td colspan='3' ><b>High Risk</b></tr><tr><td>Surgery in patient<ul>	<li>&gt;60 years</li>	<li>40-60 years with an extra risk*</li>	<li>with  multiple risk factors*</li></ul>Major surgery for cancer<br>Major trauma, Spinal Cord Injury</td><td>LMWH<br>Fondaparinux<br>LD-UFH q 8 hr<br>Warfarin INR 2-3<br> plus IPC or GESC </td><td>A<br>A<br>B<br>B<br>A</td></tr><tr bgcolor='#BDBDBD'><td colspan='3' ><b>Highest Risk</b></td></tr><tr><td>Hip arthroplasty<br>Knee arthroplasty**<br>Hip fracture surgery</td><td>LMWH &gt; fondaparinux &gt; warfarin,and IPC**<br>Rivaroxaban</td><td>A<br>A</td></tr><tr><td colspan='3' >* Risk factors:<ul><li> Active cancer</li><li>Obesity (BMI &gt;30 kg/m<sup>2</sup>)</li><li>Use of oestrogen-containing oral contraceptive pill</li><li>Use of Hormone Replacement Therapy</li><li>Previous VTE</li><li>Family h/o VTE</li><li>One or more significant medical comorbidities:<ul>	<li>Heart disease</li>	<li>Metabolic, endocrine or respiratory pathologies</li>	<li>Acute infectious disease</li>	<li>Inflammatory conditions</li>	<li>Sickle cell disease</li>	<li>Thalassaemia</li>	<li>Varicose veins with phlebitis</li></ul></li></ul></td></tr></tbody></table>";
  nsbDOMAttr(frmCP,'style.display',"none");
  nsbDOMAttr(frmView,'style.display',"block");
  HTMLview1.refresh();

	break;
    case ((choice) == 5):
  HTMLview1.innerHTML = "<h3>Methods of VTE prophylaxis</h3><b>A. Mechanical </b><br /><br />Base the choice of mechanical VTE prophylaxis on individual patient factors including clinical condition, surgical procedure, patient preference and if bleeding risk outweighs the risk of VTEChoose any one of:<br /><ul><li>Anti-embolism stockings</li><li>Foot impulse devices</li><li>Intermittent pneumatic compression devices</li></ul><b>Anti-embolism stockings (thigh or knee length)</b> <ul><li>Do not offer anti-embolism stockings to patients who have:  <ul><li>Suspected or proven peripheral artery disease</li><li>Peripheral arterial bypass grafting</li><li>Peripheral neuropathy</li><li>Any local conditions in which stockings may cau<b><b></b></b>se damage e.g. dermatitis, gangrene, recent skin graft</li><li>Known allergy to material</li><li>Cardiac failure</li><li>Severe leg oedema</li><li>Unusual leg size</li><li>Major limb deformity</li></ul></li><li>Use stockings that provide graduated compression and produce a calf pressure of 14 - 15 mmHg</li><li>Encourage patients to wear their stockings day and night until they no longer have significantly reduced mobility</li><li>Remove stockings daily for hygiene purposes and to inspect skin</li></ul><b>Foot impulse devices </b>	<ul><li>Encourage patient to use foot devices both in bed and when sitting in a chair</li></ul><b>Intermittent pneumatic compression devices (thigh or knee length) </b><ul><li>Encourage patient to use IPC devices for as much time as possible both in bed and when sitting in a chair</li></ul><b>B. Pharmacological </b><br /><ul><li>Base the choice of pharmacological VTE agents on individual patient factors, including clinical condition and patient preferences</li><li>Choose any one of:<ul><li>Low molecular weight heparin SC</li><li>Fondaparinux sodium SC</li><li>Rivaroxaban PO (at present, licensed for THR and TKR)</li><li>Dabigatran etexilate PO (at present, licensed for THR and TKR)</li><li>Unfractionated heparin SC</li></ul></li></ul><b>Low molecular weight heparin</b><ul>Choose either:<li>Enoxaparin<ul><li>Enoxaparin 40 mg daily or </li><li>Enoxaparin 20 mg daily (for moderate renal impairment with eGFR 15 -30 mL/    min/1.73/m2)<b><br /></b></li></ul></li><li>Tinzaparin<ul><li>Tinzaparin 3500 units daily (lower VTE risk or moderate renal impairment) or </li><li>Tinzaparin 4500 units daily (higher VTE risk e.g. hip or knee surgery or    during pregnancy)</li></ul></li></ul><b>Fondaparinux sodium</b><br /><ul><li>Fondaparinux<ul><li>Starting dose at 2.5 mg (6 hours after surgery) followed by 2.5 mg daily</li><li>Contraindicated in severe renal impairment (eGFR <30 mL/min/1.73/m2)</li></ul></li></ul><b>Rivaroxaban</b><br /><ul><li>Rivaroxaban<ul><li>Starting dose at 10 mg (6 - 10 hours after surgery) followed by 10 mg daily</li><li>No dose adjustment in renal impairment with prophylactic dose</li></ul></li></ul><b>Dabigatran etexilate</b><br /><ul><li>Dabigatran<ul><li>Starting dose at 110 mg (1 - 4 hours after surgery) followed by 220 mg daily</li><li>For elderly >75 years, moderate renal impairment: 75 mg starting dose, followed by 150 mg daily</li></ul></li></ul><b>Unfractionated heparin</b><br /><ul><li>Choose UFH for patients with severe renal impairment (eGFR <15 mL/min/1.73/m2)<ul><li>UFH dose is 5000 units bd</li></ul></li></ul>";
  nsbDOMAttr(frmCP,'style.display',"none");
  nsbDOMAttr(frmView,'style.display',"block");
  HTMLview1.refresh();

	break;
    case ((choice) == 6):
   HTMLview1.innerHTML = "<h3>Monitoring platelet counts</h3><ul><li>Patients who are To receive any heparin should have a baseline platelet count</li><li>Post-operative patients, including obstetric cases, receiving UFH should have platelet count monitoring performed every 2 - 3 days from days 4 To 14 Until heparin is stopped</li><li>Post-cardiopulmonary bypass patients receiving LMWH should have platelet count monitoring performed every 2 - 3 days from days 4 To 14 Until heparin is stopped</li><li>Post-operative patients (other than cardiopulmonary bypass patients) receiving LMWH Do Not need routine platelet monitoring</li><li>Post-operative patients And cardiopulmonary bypass patients who have been exposed To heparin in the previous 100 days And are receiving any type of heparin should have a platelet count determined 24 hours after starting heparin</li><li>Medical patients And obstetric patients receiving heparin Do Not need routine platelet monitoring</li></ul>";
   nsbDOMAttr(frmCP,'style.display',"none");
   nsbDOMAttr(frmView,'style.display',"block");
   HTMLview1.refresh();

	break;
    case ((choice) == 7):
    HTMLview1.innerHTML = "<h3>Using VTE prophylaxis in hospitalized patients</h3><b>General medical patients</b><ul><li>Offer pharmacological VTE prophylaxis</li><li>Start pharmacological VTE prophylaxis as soon as possible after risk assessment</li><li>Continue until patient is no longer at risk of VTE</li></ul><b>Patients with stroke</b><ul><li>Do not offer anti-embolism stockings for VTE prophylaxis to patients who are admitted for stroke</li><li>Consider prophylactic-dose LMWH if a haemorrhagic stroke has been excluded and the risk of bleeding is low</li><li>Until the patient can have pharmacological VTE prophylaxis consider a foot impulse or IPC device</li></ul><b>Patients with cancer</b><ul><li>Offer pharmacological VTE prophylaxis and continue until the patient is no longer at increased risk of VTE</li></ul><b>Patients in palliative care</b><ul><li>Consider pharmacological VTE prophylaxis in patients who have potentially reversible acute pathology</li><li>Do not routinely offer pharmacological or mechanical VTE prophylaxis to patients admitted for terminal care</li></ul><b>All surgical patients</b><ul><li>Assess the risks and benefits of stopping pre-existing established antiplatelet therapy 1 week before surgery</li><li>Consider regional anaesthesia for individual patients as it carries a lower risk of VTE than general anaesthesia</li><li>If regional anaesthesia is used, plan the timing of pharmacological VTE prophylaxis to  inimize the risk of epidural haematoma</li><li>Continue pharmacological VTE prophylaxis until the patient no longer has significantly reduced mobility (generally 5 - 7 days)</li></ul><b>Cardiac surgery</b><ul><li>Start mechanical VTE prophylaxis</li><li>Add pharmacological VTE prophylaxis for patients who have a low risk of bleeding</li></ul><b>Gastrointestinal, gynaecological, thoracic and urological surgery</b><ul><li>Start mechanical VTE prophylaxis</li><li>Add pharmacological VTE prophylaxis for patients who have a low risk of bleeding</li><li>Extend pharmacological VTE prophylaxis to 28 days post-operatively for patients who have had major cancer surgery in the abdomen or pelvis</li></ul><b>Neurological (cranial or spinal) surgery</b><ul><li>Start mechanical VTE prophylaxis</li><li>Add pharmacological VTE prophylaxis for patients who have a low risk of bleeding</li><li>	Do not offer pharmacological VTE prophylaxis to patients with<ul>	<li>ruptured cranial or spinal vascular malformations or</li> 	<li>acute traumatic or non-traumatic haemorrhage until the lesion has been secured or the condition is stable</li></ul></li></ul><b>Orthopaedic surgery</b><ul><li>Offer combined VTE prophylaxis with mechanical and pharmacological methods for lower limb surgery</li><li>Do not routinely offer VTE prophylaxis to patients undergoing upper limb surgery</li></ul><b>Elective hip replacement</b><ul><li>Start mechanical VTE prophylaxis at admission and continue until the patient no longer has significantly reduced mobility</li><li>Start pharmacological VTE prophylaxis after surgery. Choose any one of:<ul><li>LMWH: starting 6 - 12 hours after surgery</li><li>Fondaparinux: starting 6 hours after surgical closure, provided haemostasis has been established</li><li>Rivaroxaban: starting 6 - 10 hours after surgery</li><li>Dabigatran etexilate: starting 1 - 4 hours after surgery</li></ul></li><li>Continue pharmacological VTE prophylaxis for 35 days</li></ul><b>Elective knee replacement</b><ul><li>Start mechanical VTE prophylaxis at admission and continue until the patient no longer has significantly reduced mobility</li><li>Start pharmacological VTE prophylaxis after surgery. Choose any one of:<ul><li>LMWH: starting 6 - 12 hours after surgery</li><li>Fondaparinux: starting 6 hours after surgical closure, provided haemostasis has been established</li><li>Rivaroxaban: starting 6 - 10 hours after surgery</li><li>Dabigatran etexilate: starting 1 - 4 hours after surgery</li></ul></li><li>Continue pharmacological VTE prophylaxis for 35 days</li></ul><b>Hip fracture</b><ul><li>Start mechanical VTE prophylaxis at admission</li><li>Add pharmacological VTE prophylaxis. Choose any one of:<ul><li>LMWH: starting at admission, stopping 12 hours before surgery and restarting 6 - 12 hours after surgery</li><li>Fondaparinux: starting 6 hours after surgical closure. It is not recommended for use pre-operatively for patients undergoing hip fracture surgery</li></ul></li><li>Continue pharmacological VTE prophylaxis for 35 days</li></ul><b>Vascular surgery</b><ul><li>Offer VTE prophylaxis to patients undergoing vascular surgery who are not having other anticoagulant therapy and are assessed to be at increased risk of VTE</li><li>Start mechanical VTE prophylaxis</li><li>Add pharmacological VTE prophylaxis for patients who have a low risk of bleeding</li><li>Continue pharmacological VTE prophylaxis until the patient no longer has significantly reduced mobility</li></ul><b>Major trauma</b><ul><li>Offer combined VTE prophylaxis with mechanical and pharmacological methods to patients with major trauma</li><li>Regularly reassess the patient's risks of VTE and bleeding</li><li>Start mechanical VTE prophylaxis at admission or as early as clinically possible</li><li>Continue mechanical VTE prophylaxis until the patient no longer has significantly reduced mobility</li><li>Add pharmacological VTE prophylaxis if the benefits of reducing the risk of VTE outweighs the risk of bleeding and the bleeding risk has been established as low</li><li>Continue pharmacological VTE prophylaxis until the patient no longer has significantly reduced mobility</li></ul><b>Spinal injury</b><ul><li>Offer combined VTE prophylaxis with mechanical and pharmacological methods to patients with spinal injury</li><li>Regularly reassess the patient's risks of VTE and bleeding</li><li>Start mechanical VTE prophylaxis at admission or as early as clinically possible</li><li>Continue mechanical VTE prophylaxis until the patient no longer has significantly reduced mobility</li><li>Add pharmacological VTE prophylaxis if the benefits of reducing the risk of VTE outweighs the risk of bleeding and the bleeding risk has been established as low</li><li>Continue pharmacological VTE prophylaxis until the patient no longer has significantly reduced mobility</li></ul><b>Lower limb plaster casts</b><ul><li>Consider pharmacological VTE prophylaxis to patients with lower limb plaster casts after evaluating the risks and benefits based on clinical discussion with the patient</li><li>Offer pharmacological VTE prophylaxis until lower limb plaster cast removal</li></ul><b>Pregnancy and up to 6 weeks post-partum</b><ul><li>All women should be assessed at booking and after delivery and stratified into risk groups according to risk factors and offered thromboprophylaxis with LMWH where appropriate</li><li>This assessment should be repeated if the woman is admitted to the hospital for any reason or develops other intercurrent problems during the antenatal and postpartum period</li></ul><b>Critical care</b><ul><li>Assess all patients on admission to the critical care unit for their risks of VTE and bleeding</li><li>Reassess patients' risks of VTE and bleeding daily and more frequently if their clinical condition is changing rapidly</li><li>Offer VTE prophylaxis to patients admitted to the critical care unit according to the reason for admission, taking into account:<ul>	<li>Any planned interventions</li><li>The use of other therapies that may increase the risk of complications</li></ul></li></ul><b>Patients taking anti-platelet agents or anticoagulants on admission or needing them for treatment</b><ul>	<li>Consider additional pharmacological VTE prophylaxis to patients who are taking one but not two anti-platelet agents to treat other conditions and who are assessed to be at increased risk of VTE</li><li>Consider additional mechanical prophylaxis to patients who are taking two anti-platelet agents to treat other conditions and who are assessed to be at increased risk of VTE</li><li>Do not offer additional pharmacological or mechanical VTE prophylaxis to patients who are taking vitamin K antagonists and who are within their therapeutic range, provided anticoagulant therapy is continued</li><li>Do not offer additional pharmacological or mechanical VTE prophylaxis to patients who are having full anticoagulant therapy</li></ul>";
    nsbDOMAttr(frmCP,'style.display',"none");
    nsbDOMAttr(frmView,'style.display',"block");
    HTMLview1.refresh();

	break;
    case ((choice) == 8):
    HTMLview1.innerHTML = "<h3>Timing of regional anaesthesia/analgesia</h3><b>Unfractionated heparin (subcutaneous)</b><ul><li>Wait at least 4 hours after a dose before block or catheter removal</li><li>Wait at least 1 hour before dosing after procedure (catheter insertion or withdrawal)</li></ul><b>Unfractionated heparin (intravenous)</b><ul><li>Stop infusion 2 - 4 hours before block</li><li>Start infusion >1 hour after block</li><li>Remove epidural catheter no sooner than 2 - 4 hours after discontinuation of infusion</li></ul><b>Low Molecular Weight Heparin</b><ul><li>Wait at least 12 hours after a prophylactic dose before block</li><li>Wait at least 24 hours after a therapeutic dose before block</li><li>Wait at least 10 hours after dose before removing catheter</li><li>After catheter removal wait 2 - 4 hours before next dose</li></ul><b>Warfarin </b><ul><li>Proceed if INR &le; 1.5</li></ul><b>Rivaroxaban</b><br />Rivaroxaban is started post-operatively<ul><li>Wait 12 - 18 hours after dose for epidural catheter removal</li><li>Wait 6 hours before next dose</li></ul><b>Dabigatran </b><br />Dabigatran is started post-operatively<ul><li>Wait 12 - 18 hours after dose for epidural catheter removal</li><li>Wait 6 hours before next dose</li></ul><b>Aspirin and NSAIDs</b><ul><li>No issue</li></ul><b>Clopidogrel</b> <ul><li>Stop 7 days pre-op if possible</li><li>If not, proceed with caution</li></ul>";
    nsbDOMAttr(frmCP,'style.display',"none");
    nsbDOMAttr(frmView,'style.display',"block");
    HTMLview1.refresh();

	break;
    case ((choice) == 9):
    HTMLview1.innerHTML = "<h3>Patient information</h3><ul><li>Be aware that heparins are of animal origin and this may be of concern to some patients</li><li>For patients who have concerns about using animal products, consider offering synthetic alternatives based on clinical judgement and after discussing their suitability, advantages and disadvantages with the patient</li><li>In specific conditions such as pregnancy, LMWH is the anticoagulant of choice and is superior to UFH in its efficacy with less bleeding complications</li><li>Before starting VTE prophylaxis, offer patients and their families verbal and written information on:<ul><li>The risks and possible consequences of VTE</li><li>The importance of VTE prophylaxis and its possible side-effects</li><li>The correct use of VTE prophylaxis</li><li>How patients can reduce the risk of VTE (keeping well hydrated and mobilizing early)</li></ul></li></ul>";
    nsbDOMAttr(frmCP,'style.display',"none");
    nsbDOMAttr(frmView,'style.display',"block");
    HTMLview1.refresh();

	break;
    case ((choice) == 10):
    HTMLview1.innerHTML = "<h3>Discharge plan</h3><ul><li>As part of the discharge plan, offer patients and their families or carers verbal and written information on:<ul><li>The signs and symptoms of DVT and PE</li><li>The recommended duration of use of VTE prophylaxis at home (if discharged with prophylaxis)</li><li>Ensure that patients who are discharged with pharmacological or mechanical VTE prophylaxis are able to use it correctly</li><li>Know who to contact if DVT, PE or adverse events are suspected</li></ul></li></ul>";
    nsbDOMAttr(frmCP,'style.display',"none");
    nsbDOMAttr(frmView,'style.display',"block");
    HTMLview1.refresh();


  }






return savethefunction_rvar; }

window.addEventListener('load', function() {
  frmMX.style.display = 'block';

  NSB.addProperties(HdrMX);
  NSB.addDisableProperty(HdrMX);


  if(typeof(HdrMX.onclick)=='function'){
    if(typeof(HdrMX_left)!='undefined') HdrMX_left.onclick=function() {HdrMX.onclick(HdrMX_left.getAttribute('nsbvalue'))};
    if(typeof(HdrMX_right)!='undefined') HdrMX_right.onclick=function() {HdrMX.onclick(HdrMX_right.getAttribute('nsbvalue'))}};
  NSB.List_jqm_init14('lstMX','Choose One, Anticoagulation,Thrombolytic Therapy,Mechanical Intervention, Investigations for Cancer, Thrombophilia testing,  Follow up, Patient information',true,'100%',false,false);
  lstMX_ref = new IScroll(lstMX_scroller,{ mouseWheel:true, scrollbars:true, bounce:true, zoom:false,click:iScrollClick()});
  lstMX.refresh=function(){if (typeof lstMX_ref!='undefined') setTimeout(NSB.refresh,100,lstMX_ref)};
  NSB.addProperties(lstMX, lstMX_scroller);

  (function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('lstMX_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
  frmMX.style.display = 'none';
  
}, false);
frmMX.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(frmMX);
HdrMX.onclick = function(choice) { savethefunction_rvar="";
  if(choice == "Back") {
        nsbDOMAttr(frmMX,'style.display',"none");
        nsbDOMAttr(frmMain,'style.display',"block");
  }
return savethefunction_rvar; }
lstMX.onclick = function(choice) { savethefunction_rvar="";
  backlink = "mx";
  switch (True) {
    case ((choice) == 1):
      nsbDOMAttr(frmMX,'style.display',"none");
      nsbDOMAttr(frmAnticoag,'style.display',"block");

	break;
    case ((choice) == 2):
    HTMLview1.innerHTML = "<h3>Thrombolytic Therapy</h3><b>Deep vein thrombosis</b><ul><li>Consider catheter-directed thrombolytic therapy for patients with symptomatic ilio-femoral DVT who have:<ul><li>Symptoms of less than 14 days duration AND</li><li>Good functional status AND</li><li>A life expectancy of 1 year or more AND</li><li>A low risk of bleeding</li></ul></li></ul><b>Pulmonary embolism</b><ul><li>Consider systemic thrombolytic therapy for patients with PE and haemodynamic instability (e.g. systolic BP <90 mmHg)</li><li>Do not offer systemic thrombolytic therapy to patients with PE and haemodynamic stability</li><li>The most commonly used agent is t-PA infused at 100 mg over 2 hours followed by continuation of therapeutic heparin infusion</li><li>Consider thoracotomy in critically ill/ not suitable for thrombolysis</li></ul>";
    nsbDOMAttr(frmMX,'style.display',"none");
    nsbDOMAttr(frmView,'style.display',"block");
    HTMLview1.refresh();

	break;
    case ((choice) == 3):
    HTMLview1.innerHTML = "<h3>Mechanical Intervention</h3><b>Compression stockings</b><ul><li>Prescribe below-knee graduated compression stockings with an ankle pressure greater than 23 mmHg to patients with proximal DVT a week after diagnosis or when swelling is reduced sufficiently and if there are no contraindications</li><li>advice patients to continue wearing the stockings for at least 2 years </li><li>ensure that the stockings are replaced two or three times per year or according to the manufacturer's instructions</li><li>advice patients that the stockings need to be worn only on the affected leg or legs</li></ul><b>Inferior vena cava filters</b><ul><li>Offer temporary inferior vena cava filters ONLY to patients with proximal DVT or PE who cannot have anticoagulation treatment</li> <li>Remove the inferior vena cava filter when the patient becomes eligible for anticoagulation treatment, at the earliest possible opportunity</li></ul>";
    nsbDOMAttr(frmMX,'style.display',"none");
    nsbDOMAttr(frmView,'style.display',"block");
    HTMLview1.refresh();

	break;
    case ((choice) == 4):
    HTMLview1.innerHTML = "<h3>Investigations for Cancer</h3><ul><li>All patients diagnosed with unprovoked DVT or PE who are not known to have cancer should be offered:<ul><li>A physical examination (further specific tests are guided by the patient's history)</li><li>Chest X-ray</li><li>Blood tests (FBC, LFT, RP, urinalysis)</li></ul></li><li>Consider further investigations for cancer with an abdomino-pelvic CT scan (and a mammogram for women) in all patients aged over 40 years with a first unprovoked VTE who do not have signs and symptoms of cancer based on initial investigation</li><li>Tumour markers are not recommended for cancer screening</li></ul>";
    nsbDOMAttr(frmMX,'style.display',"none");
    nsbDOMAttr(frmView,'style.display',"block");
    HTMLview1.refresh();

	break;
    case ((choice) == 5):
    HTMLview1.innerHTML = "<h3>Thrombophilia testing</h3><ul><li>DO NOT offer thrombophilia testing to patients who are continuing anticoagulant treatment</li><li>Consider testing for lupus anticoagulant and anti-phospholipid antibodies in patients who have had an unprovoked DVT or PE if it is planned to stop anticoagulant treatment</li><li>Consider testing for hereditary thrombophilia in patients who have had an unprovoked DVT or PE and who have a first-degree relative who has had a DVT or PE if it is planned to stop anticoagulant treatment</li><li>DO NOT offer thrombophilia testing to patients who have had a provoked DVT or PE</li><li>DO NOT offer thrombophilia testing to first-degree relatives of people with a history of DVT or PE and thrombophilia</li><li>DO NOT offer heritable thrombophilia testing to patients who have had an arterial thrombosis (young stroke or myocardial infarction)</li><li>Consider testing for lupus anticoagulant and anti-phospholipid antibodies in the following:<ul><li>in the presence of both arterial and venous thrombosis</li><li>unexplained arterial thrombosis (young stroke or myocardial infarction with no risk factors)</li><li>unexplained miscarriages <10 weeks gestation</li><li>a fetal death >10 weeks gestation</li><li>premature birth <35 weeks gestation due to severe pre-eclampsia or IUGR</li></ul></li></ul>";
    nsbDOMAttr(frmMX,'style.display',"none");
    nsbDOMAttr(frmView,'style.display',"block");
    HTMLview1.refresh();

	break;
    case ((choice) == 6):
    HTMLview1.innerHTML = "<h3>Follow up</h3><ul><li>Arrange for follow-up at medical or haematology clinic</li><li>Arrange for INR monitoring at the anticoagulation clinic (MTAC-Warfarin)</li></ul>";
    nsbDOMAttr(frmMX,'style.display',"none");
    nsbDOMAttr(frmView,'style.display',"block");
    HTMLview1.refresh();

	break;
    case ((choice) == 7):
    HTMLview1.innerHTML = "<h3>Patient information</h3><ul><li>Verbal and written information are given to patients having anticoagulant treatment about:<ul><li>Duration of anticoagulation treatment</li><li>Anticoagulation booklet</li><li>Possible side effects and what to do if these occur</li><li>The effects of other medication, food and alcohol on oral anticoagulant</li><li>Monitoring their anticoagulant treatment</li><li>Pregnancy and contraception</li><li>Surgery and dental treatment </li><li>Future risk reduction measures including travel</li><li>Clear advice on long term use of stockings</li></ul></li></ul>";
    nsbDOMAttr(frmMX,'style.display',"none");
    nsbDOMAttr(frmView,'style.display',"block");
    HTMLview1.refresh();


  }

return savethefunction_rvar; }

window.addEventListener('load', function() {
  frmClinTools.style.display = 'block';

  NSB.addProperties(HdrClinTools);
  NSB.addDisableProperty(HdrClinTools);


  if(typeof(HdrClinTools.onclick)=='function'){
    if(typeof(HdrClinTools_left)!='undefined') HdrClinTools_left.onclick=function() {HdrClinTools.onclick(HdrClinTools_left.getAttribute('nsbvalue'))};
    if(typeof(HdrClinTools_right)!='undefined') HdrClinTools_right.onclick=function() {HdrClinTools.onclick(HdrClinTools_right.getAttribute('nsbvalue'))}};
  NSB.List_jqm_init14('lstClinTools','Choose One, IMPROVE Bleeding Risk, Padua Prediction Score, Well\'s DVT Probability, Well\'s PE Probability',false,'100%',false,false);

  lstClinTools.refresh=function(){if (typeof lstClinTools_ref!='undefined') setTimeout(NSB.refresh,100,lstClinTools_ref)};

  NSB.addProperties(lstClinTools);
  (function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('lstClinTools_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
  frmClinTools.style.display = 'none';
  
}, false);
frmClinTools.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(frmClinTools);
HdrClinTools.onclick = function(choice) { savethefunction_rvar="";
      if(choice == "Back") {
        nsbDOMAttr(frmClinTools,'style.display',"none");
        nsbDOMAttr(frmMain,'style.display',"block");
  }
return savethefunction_rvar; }

lstClinTools.onclick = function(choice) { savethefunction_rvar="";
  switch (True) {
    case ((choice) == 1):
        nsbDOMAttr(frmClinTools,'style.display',"none");
        nsbDOMAttr(frmImprove,'style.display',"block");
	break;
    case ((choice) == 2):
        nsbDOMAttr(frmClinTools,'style.display',"none");
        nsbDOMAttr(frmPadua,'style.display',"block");

	break;
    case ((choice) == 3):
        nsbDOMAttr(frmClinTools,'style.display',"none");
        nsbDOMAttr(frmWellsDVT,'style.display',"block");

	break;
    case ((choice) == 4):
        nsbDOMAttr(frmClinTools,'style.display',"none");
        nsbDOMAttr(frmWellsPE,'style.display',"block");
}

return savethefunction_rvar; }

window.addEventListener('load', function() {
  frmAnticoag.style.display = 'block';

  NSB.addProperties(HdrAnticoag);
  NSB.addDisableProperty(HdrAnticoag);


  if(typeof(HdrAnticoag.onclick)=='function'){
    if(typeof(HdrAnticoag_left)!='undefined') HdrAnticoag_left.onclick=function() {HdrAnticoag.onclick(HdrAnticoag_left.getAttribute('nsbvalue'))};
    if(typeof(HdrAnticoag_right)!='undefined') HdrAnticoag_right.onclick=function() {HdrAnticoag.onclick(HdrAnticoag_right.getAttribute('nsbvalue'))}};
  NSB.List_jqm_init14('lstAnticoag','Choose One, Initial treatment, Duration & Maintenance, Monitoring, Perioperative, Overanticoagulation, Warfarin dosing',false,'100%',false,false);

  lstAnticoag.refresh=function(){if (typeof lstAnticoag_ref!='undefined') setTimeout(NSB.refresh,100,lstAnticoag_ref)};

  NSB.addProperties(lstAnticoag);
  (function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('lstAnticoag_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
  frmAnticoag.style.display = 'none';
  
}, false);
frmAnticoag.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(frmAnticoag);

HdrAnticoag.onclick = function(choice) { savethefunction_rvar="";
      if(choice == "Back") {
        nsbDOMAttr(frmAnticoag,'style.display',"none");
        nsbDOMAttr(frmMX,'style.display',"block");
    }
return savethefunction_rvar; }

lstAnticoag.onclick = function(choice) { savethefunction_rvar="";
  backlink = "anticoag";
  switch (True) {
    case ((choice) == 1):
    filename="initialrx.htm";
    fileread(filename);

	break;
    case ((choice) == 2):
    filename="maintenance.htm";
    fileread(filename);

	break;
    case ((choice) == 3):
    filename="monitoring.htm";
    fileread(filename);

	break;
    case ((choice) == 4):
    filename="perioperative.htm";
    fileread(filename);

	break;
    case ((choice) == 5):
    filename="overanticoag.htm";
    fileread(filename);

	break;
    case ((choice) == 6):
    filename="warfarin.htm";
    fileread(filename);

   }

return savethefunction_rvar; }

function fileread(filename) { savethefunction_rvar="";
    req=ReadFile(filename);
    if(req.status==200 || req.status==0) {
    HTMLview1.innerHTML = req.responseText;
        nsbDOMAttr(frmAnticoag,'style.display',"none");
        nsbDOMAttr(frmView,'style.display',"block");
    HTMLview1.refresh();
 } else {
    _msgbox_confirm("File could not be read");
    }

return savethefunction_rvar; }

window.addEventListener('load', function() {
  frmImprove.style.display = 'block';

  NSB.addProperties(hdrImprove);
  NSB.addDisableProperty(hdrImprove);


  if(typeof(hdrImprove.onclick)=='function'){
    if(typeof(hdrImprove_left)!='undefined') hdrImprove_left.onclick=function() {hdrImprove.onclick(hdrImprove_left.getAttribute('nsbvalue'))};
    if(typeof(hdrImprove_right)!='undefined') hdrImprove_right.onclick=function() {hdrImprove.onclick(hdrImprove_right.getAttribute('nsbvalue'))}};
  NSB.Checkbox_jqm_init('chkImprove','Active gastro-duodenal ulcer,Bleeding <3 months prior to admission*,Platelet count <50 X 109/L**,Age >85 years,Liver failure with PT >1.5X Normal,Severe renal failure GFR <30 ml/min,ICU/CCU admission,Central line catheter in place,Rheumatic/autoimmune disease,Current cancer,Age 40-84 years,Male,GFR 30-59 ml/min/1.73m2');
  NSB.addProperties(chkImprove);
  frmImprove.style.display = 'none';
  
}, false);
frmImprove.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(frmImprove);

hdrImprove.onclick = function(choice) { savethefunction_rvar="";
    if(choice == "Back") {
        nsbDOMAttr(frmImprove,'style.display',"none");
        nsbDOMAttr(frmClinTools,'style.display',"block");
    }
    if(choice == "Result") {
      calculateimprove();
      backlink = "improve";
      scoreresult = "<b>Result</b><br/>The IMPROVE score is "  +  CStr(improvescore)  +  "<br/>";
      if(improvescore < 7) {
        scoreresult = scoreresult  +  "The risk of bleeding is low";
 } else {
        scoreresult = scoreresult  +  "The risk of bleeding is high";
      }
      scoreresult = scoreresult  +  "<br/><br/><b>Footnotes On the Score</b><br/>*include previous GI bleeding of irreversible cause, non-cardiac embolic stroke and concomitant use of oral anticoagulant. <br/>**include previous history of HITT and concomitant antiplatelet therapy with aspirin or clopidogrel ";
      HTMLview1.innerHTML = scoreresult;
      nsbDOMAttr(frmImprove,'style.display',"none");
      nsbDOMAttr(frmView,'style.display',"block");
      HTMLview1.refresh();
    }
return savethefunction_rvar; }

function calculateimprove() { savethefunction_rvar="";
  for   (n = 0; n  <= 12; n ++) {
    improvecount[n] = 0;
  }
  improvescore = 0;
if(chkImprove.getValue(1) ) { improvecount[0] = 4.5; }
if(chkImprove.getValue(2) ) { improvecount[1] = 4; }
if(chkImprove.getValue(3) ) { improvecount[2] = 4; }
if(chkImprove.getValue(4) ) { improvecount[3] = 3.5; }
if(chkImprove.getValue(5) ) { improvecount[4] = 2.5; }
if(chkImprove.getValue(6) ) { improvecount[5] = 2.5; }
if(chkImprove.getValue(7) ) { improvecount[6] = 2.5; }
if(chkImprove.getValue(8) ) { improvecount[7] = 2; }
if(chkImprove.getValue(9) ) { improvecount[8] = 2; }
if(chkImprove.getValue(10) ) { improvecount[9] = 2; }
if(chkImprove.getValue(11) ) { improvecount[10] = 1; }
if(chkImprove.getValue(12) ) { improvecount[11] = 1; }
if(chkImprove.getValue(13) ) { improvecount[12] = 1; }
  for   (n = 0; n  <= 12; n ++) {
    improvescore = improvescore + improvecount[n];
  }
return savethefunction_rvar; }


window.addEventListener('load', function() {
  frmPadua.style.display = 'block';

  NSB.addProperties(hdrPadua);
  NSB.addDisableProperty(hdrPadua);


  if(typeof(hdrPadua.onclick)=='function'){
    if(typeof(hdrPadua_left)!='undefined') hdrPadua_left.onclick=function() {hdrPadua.onclick(hdrPadua_left.getAttribute('nsbvalue'))};
    if(typeof(hdrPadua_right)!='undefined') hdrPadua_right.onclick=function() {hdrPadua.onclick(hdrPadua_right.getAttribute('nsbvalue'))}};
  NSB.Checkbox_jqm_init('chkPadua','An active cancer,Previous VTE, Reduced mobility, Already known thrombophilic condition, Recent (<1 month) trauma and/or surgery, Age 70 years and above, Heart and/or respiratory failure, AMI or ischemic stroke, Acute infection and/or rheumatologic disorder, Obesity BMI >30kg/m2,Ongoing hormonal therapy');
  NSB.addProperties(chkPadua);
  frmPadua.style.display = 'none';
  
}, false);
frmPadua.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(frmPadua);
hdrPadua.onclick = function(choice) { savethefunction_rvar="";
     if(choice == "Back") {
        nsbDOMAttr(frmPadua,'style.display',"none");
        nsbDOMAttr(frmClinTools,'style.display',"block");
    }
    if(choice == "Result") {
      calculatepadua();
      backlink = "padua";
      scoreresult = "<b>Result</b><br/>The Padua score is "  +  CStr(paduascore)  +  "<br/>";
      if(paduascore < 4) {
        scoreresult = scoreresult  +  "The patient is in the Low Risk category for VTE";
 } else {
        scoreresult = scoreresult  +  "The patient is in the High Risk category for VTE";
      }
      scoreresult = scoreresult  +  "<br><br>Please see also the Hospitalised Patients at increased Risk for VTE in the Risk Factors and Prophylaxis section";
      HTMLview1.innerHTML = scoreresult;
      nsbDOMAttr(frmPadua,'style.display',"none");
      nsbDOMAttr(frmView,'style.display',"block");
      HTMLview1.refresh();
    }

return savethefunction_rvar; }


function calculatepadua() { savethefunction_rvar="";
  for   (n = 0; n  <= 10; n ++) {
    paduacount[n] = 0;
  }
  paduascore = 0;
  if(chkPadua.getValue(1) ) { paduacount[0] = 3; }
  if(chkPadua.getValue(2) ) { paduacount[1] = 3; }
  if(chkPadua.getValue(3) ) { paduacount[2] = 3; }
  if(chkPadua.getValue(4) ) { paduacount[3] = 3; }
  if(chkPadua.getValue(5) ) { paduacount[4] = 2; }
  if(chkPadua.getValue(6) ) { paduacount[5] = 1; }
  if(chkPadua.getValue(7) ) { paduacount[6] = 1; }
  if(chkPadua.getValue(8) ) { paduacount[7] = 1; }
  if(chkPadua.getValue(9) ) { paduacount[8] = 1; }
  if(chkPadua.getValue(10) ) { paduacount[9] = 1; }
  if(chkPadua.getValue(11) ) { paduacount[10] = 1; }

  for   (n = 0; n  <= 10; n ++) {
    paduascore = paduascore + paduacount[n];
  }

return savethefunction_rvar; }

window.addEventListener('load', function() {
  frmWellsDVT.style.display = 'block';

  NSB.addProperties(hdrWellsDVT);
  NSB.addDisableProperty(hdrWellsDVT);


  if(typeof(hdrWellsDVT.onclick)=='function'){
    if(typeof(hdrWellsDVT_left)!='undefined') hdrWellsDVT_left.onclick=function() {hdrWellsDVT.onclick(hdrWellsDVT_left.getAttribute('nsbvalue'))};
    if(typeof(hdrWellsDVT_right)!='undefined') hdrWellsDVT_right.onclick=function() {hdrWellsDVT.onclick(hdrWellsDVT_right.getAttribute('nsbvalue'))}};
  NSB.Checkbox_jqm_init('chkWellsDVT','Active cancer (rx ongoing or within prev 6 mths or palliative),Paralysis or recent immobilsation of lower extremities, Recently bedridden > 3 days or major surgery within 4 weeks, Localized tenderness along the distrib of deep venous system, Entire leg swollen, Calf swelling 3 cm >asx side (measured 10 cm below tibial tuberosity), Pitting odema greater in the symp leg*, Collateral superficial veins (non-varicose), Previously documented DVT, Alternative diagnosis** to DVT as likely or more likely');
  NSB.addProperties(chkWellsDVT);
  frmWellsDVT.style.display = 'none';
  
}, false);
frmWellsDVT.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(frmWellsDVT);

hdrWellsDVT.onclick = function(choice) { savethefunction_rvar="";
    if(choice == "Back") {
        nsbDOMAttr(frmWellsDVT,'style.display',"none");
        nsbDOMAttr(frmClinTools,'style.display',"block");
    }
    if(choice == "Result") {
      calculatewellsdvt();
      backlink = "wellsdvt";
      scoreresult = "<b>Result</b><br/>The Wells DVT score is "  +  CStr(wellsdvtscore)  +  "<br/>";
    if(wellsdvtscore >1) {
      scoreresult = scoreresult  +  "DVT is likely";
 } else {
     scoreresult = scoreresult  +  "DVT is unlikely";
    }
    filename="wellsdvt.htm";
    readwellsdvt(filename);
     }

return savethefunction_rvar; }

function readwellsdvt(filename) { savethefunction_rvar="";
  req=ReadFile(filename);
    if(req.status==200 || req.status==0) {
    scoreresult = scoreresult + req.responseText;
    HTMLviewWells.innerHTML = scoreresult;
    imgAlgo.firstChild.src  = "AlgoDVT.jpg";
    nsbDOMAttr(frmWellsDVT,'style.display',"none");
    nsbDOMAttr(frmViewWells,'style.display',"block");
    HTMLviewWells.refresh();
 } else {
    _msgbox_confirm("File could not be read");
  }



return savethefunction_rvar; }

function calculatewellsdvt() { savethefunction_rvar="";
  for   (n = 0; n  <= 9; n ++) {
    wellsdvtcount[n] = 0;
  }
  wellsdvtscore = 0;
if(chkWellsDVT.getValue(1) ) { wellsdvtcount[0] = 1; }
if(chkWellsDVT.getValue(2) ) { wellsdvtcount[1] = 1; }
if(chkWellsDVT.getValue(3) ) { wellsdvtcount[2] = 1; }
if(chkWellsDVT.getValue(4) ) { wellsdvtcount[3] = 1; }
if(chkWellsDVT.getValue(5) ) { wellsdvtcount[4] = 1; }
if(chkWellsDVT.getValue(6) ) { wellsdvtcount[5] = 1; }
if(chkWellsDVT.getValue(7) ) { wellsdvtcount[6] = 1; }
if(chkWellsDVT.getValue(8) ) { wellsdvtcount[7] = 1; }
if(chkWellsDVT.getValue(9) ) { wellsdvtcount[8] = 1; }
if(chkWellsDVT.getValue(10) ) { wellsdvtcount[9] = -2; }
for   (n = 0; n  <= 9; n ++) {
    wellsdvtscore = wellsdvtscore + wellsdvtcount[n];
  }


return savethefunction_rvar; }



window.addEventListener('load', function() {
  frmWellsPE.style.display = 'block';

  NSB.addProperties(hdrWellsPE);
  NSB.addDisableProperty(hdrWellsPE);


  if(typeof(hdrWellsPE.onclick)=='function'){
    if(typeof(hdrWellsPE_left)!='undefined') hdrWellsPE_left.onclick=function() {hdrWellsPE.onclick(hdrWellsPE_left.getAttribute('nsbvalue'))};
    if(typeof(hdrWellsPE_right)!='undefined') hdrWellsPE_right.onclick=function() {hdrWellsPE.onclick(hdrWellsPE_right.getAttribute('nsbvalue'))}};
  NSB.Checkbox_jqm_init('chkWellsPE','Clinical signs & symptoms of DVT (minimum of leg swelling & pain with palpation of deep vein),An alternative diagnosis is less likely than PE,Heart rate greater than 100 beats/min,Immobilization or surgery in previous 4 weeks,Previous DVT/PE, Haemoptysis, Malignancy (on treatment, treated in the last 6 months or palliative)');
  NSB.addProperties(chkWellsPE);
  frmWellsPE.style.display = 'none';
  
}, false);
frmWellsPE.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(frmWellsPE);

hdrWellsPE.onclick = function(choice) { savethefunction_rvar="";
    if(choice == "Back") {
        nsbDOMAttr(frmWellsPE,'style.display',"none");
        nsbDOMAttr(frmClinTools,'style.display',"block");
    }
    if(choice == "Result") {
      calculatewellspe();
      backlink = "wellspe";
      scoreresult = "<b>Result</b><br/>The Wells PE score is "  +  CStr(wellspescore)  +  "<br/>";
    if(wellspescore > 4) {
      scoreresult = scoreresult  +  "PE is likely";
 } else {
     scoreresult = scoreresult  +  "PE is unlikely";
    }

    filename="wellspe.htm";
    readwellspe(filename);
     }

return savethefunction_rvar; }



function readwellspe(filename) { savethefunction_rvar="";
  req=ReadFile(filename);
    if(req.status==200 || req.status==0) {
    scoreresult = scoreresult + req.responseText;
    HTMLviewWells.innerHTML = scoreresult;
    imgAlgo.firstChild.src  = "AlgoPE.jpg";
    nsbDOMAttr(frmWellsPE,'style.display',"none");
    nsbDOMAttr(frmViewWells,'style.display',"block");
    HTMLviewWells.refresh();
 } else {
    _msgbox_confirm("File could not be read");
  }



return savethefunction_rvar; }

function calculatewellspe() { savethefunction_rvar="";
  for   (n = 0; n  <= 6; n ++) {
    wellspecount[n] = 0;
  }
  wellspescore = 0;
if(chkWellsPE.getValue(1) ) { wellspecount[0] = 3; }
if(chkWellsPE.getValue(2) ) { wellspecount[1] = 3; }
if(chkWellsPE.getValue(3) ) { wellspecount[2] = 1.5; }
if(chkWellsPE.getValue(4) ) { wellspecount[3] = 1.5; }
if(chkWellsPE.getValue(5) ) { wellspecount[4] = 1.5; }
if(chkWellsPE.getValue(6) ) { wellspecount[5] = 1; }
if(chkWellsPE.getValue(7) ) { wellspecount[6] = 1; }

for   (n = 0; n  <= 6; n ++) {
    wellspescore = wellspescore + wellspecount[n];
  }


return savethefunction_rvar; }



window.addEventListener('load', function() {
  frmViewWells.style.display = 'block';

  NSB.addProperties(hdrViewWells);
  NSB.addDisableProperty(hdrViewWells);


  if(typeof(hdrViewWells.onclick)=='function'){
    if(typeof(hdrViewWells_left)!='undefined') hdrViewWells_left.onclick=function() {hdrViewWells.onclick(hdrViewWells_left.getAttribute('nsbvalue'))};
    if(typeof(hdrViewWells_right)!='undefined') hdrViewWells_right.onclick=function() {hdrViewWells.onclick(hdrViewWells_right.getAttribute('nsbvalue'))}};
  if (true) {HTMLviewWells_ref = new IScroll(HTMLviewWells_scroller,{ mouseWheel:true, scrollbars:true, bounce: false, zoom:true,click:iScrollClick()});
    HTMLviewWells.refresh=function(){setTimeout(HTMLviewWells_ref.refresh(),100)}}
  NSB.addProperties(HTMLviewWells,HTMLviewWells_scroller);
  frmViewWells.style.display = 'none';
  
}, false);
frmViewWells.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(frmViewWells);

hdrViewWells.onclick = function(choice) { savethefunction_rvar="";

 if(choice == "Back") {

switch (True) {

  case ((backlink) == "wellsdvt"):
        nsbDOMAttr(frmViewWells,'style.display',"none");
        nsbDOMAttr(frmWellsDVT,'style.display',"block");
	break;
  case ((backlink) == "wellspe"):
        nsbDOMAttr(frmViewWells,'style.display',"none");
        nsbDOMAttr(frmWellsPE,'style.display',"block");
}

}

if(choice == "Algorithm") {
        nsbDOMAttr(frmViewWells,'style.display',"none");
        nsbDOMAttr(frmPicture,'style.display',"block");
 }
return savethefunction_rvar; }

window.addEventListener('load', function() {
  frmPicture.style.display = 'block';

  NSB.addProperties(hdrAlgorithm);
  NSB.addDisableProperty(hdrAlgorithm);


  if(typeof(hdrAlgorithm.onclick)=='function'){
    if(typeof(hdrAlgorithm_left)!='undefined') hdrAlgorithm_left.onclick=function() {hdrAlgorithm.onclick(hdrAlgorithm_left.getAttribute('nsbvalue'))};
    if(typeof(hdrAlgorithm_right)!='undefined') hdrAlgorithm_right.onclick=function() {hdrAlgorithm.onclick(hdrAlgorithm_right.getAttribute('nsbvalue'))}};
  NSB.addProperties(imgAlgo);
  frmPicture.style.display = 'none';
  
}, false);
frmPicture.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(frmPicture);

hdrAlgorithm.onclick = function(choice) { savethefunction_rvar="";
    if(choice == "Back") {
      nsbDOMAttr(frmPicture,'style.display',"none");
      nsbDOMAttr(frmViewWells,'style.display',"block");
    }
return savethefunction_rvar; }


window.addEventListener('orientationchange', function(){window.scrollTo(0,0)});
window.addEventListener('load', function() {
  browserWarningMessage('Please use Google Chrome, Apple Safari or another supported browser.');
  frmMain.style.display = 'block';
  Main();
  if (typeof(frmMain.onshow)=='function') frmMain.onshow();
  
}, false);

var NSBCurrentForm = frmMain;

improvecount = [];
improvescore = 0;
paduacount = [];
paduascore = 0;
wellsdvtcount = [];
wellsdvtscore = 0;
wellspecount = [];
wellspescore = 0;
backlink = "";
scoreresult ="";
imagesource = "";


