function kampanyaonchange(){
	
	
	if(Xrm.Page.getAttribute('new_daireid').getValue() != null){
	var daireid  = Xrm.Page.getAttribute('new_daireid').getValue()[0].id;
	
	var link = Xrm.Page.context.getClientUrl() + "/api/data/v8.0/new_daires(" + daireid.replace('{', '').replace('}', '') + ")?$select=new_seturtutar";

 var req = new XMLHttpRequest();
req.open("GET", link , true);
req.setRequestHeader("OData-MaxVersion", "4.0");
req.setRequestHeader("OData-Version", "4.0");
req.setRequestHeader("Accept", "application/json");
req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
req.onreadystatechange = function() {
    if (this.readyState == 4) {
        req.onreadystatechange = null;
        if (this.status == 200) {
            var result = JSON.parse(this.response);
            var new_seturtutar = result["new_seturtutar"];

			if(new_seturtutar != null || new_seturtutar != "" )
			{
			Xrm.Page.getAttribute('new_seturtutar').setValue(new_seturtutar);
			}
			
			
        } else {
            Xrm.Utility.alertDialog(this.statusText);
        }
    }
};
req.send();
	}
	
}

function onload(){

var val   = Xrm.Page.getAttribute("new_ozelmusteriindirimi").getValue();
if(val != "") {
 Xrm.Page.getControl('new_ozelmusteriindirimi').setDisabled(true);
}

var val   = Xrm.Page.getAttribute("new_fiyat").getValue();
if(val != "") {
 Xrm.Page.getControl('new_fiyat').setDisabled(true);
}

	
		if(Xrm.Page.ui.getFormType() == "1"){
			
			var fid =  Xrm.Page.getAttribute("new_satisfirsatid").getValue();
			if(fid == null){
				
				disableallfields();
				alert("Müşteri Kartından Satış Oluşturulamaz.");
			}else {
	
	var tid = Xrm.Page.getAttribute("new_contactid").getValue()[0].id;
	tid = tid.replace("{","").replace("}","");

var req = new XMLHttpRequest();
req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v8.0/contacts(" + tid +")?$select=address2_line1,address2_line2,address2_stateorprovince,new_adresdagilimi2,_new_il2_value,new_milliyet,_new_ilce2_value,_new_ulke2_value", true);
req.setRequestHeader("OData-MaxVersion", "4.0");
req.setRequestHeader("OData-Version", "4.0");
req.setRequestHeader("Accept", "application/json");
req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
req.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
req.onreadystatechange = function() {
    if (this.readyState === 4) {
        req.onreadystatechange = null;
        if (this.status === 200) {
            var result = JSON.parse(this.response);
			
			var mil = result["new_milliyet"];
	//if(mil == 2){
		
			
			var mes ="";
            var address2_line1 =  result["address2_line1"];
			if(address2_line1 == null){
				mes += " Adres 2 Cadde 1 Alanı Dolu Olmalıdır. ";
				
			}
            var address2_line2 = result["address2_line2"];
			if(address2_line2 == null){
				mes += " Adres 2 Cadde 2 Alanı Dolu Olmalıdır. ";
				
			}
            var address2_line2 = result["address2_stateorprovince"];
				if(address2_line2 == null){
				//mes += " Adres 2 Semt Bölge Alanı Dolu Olmalıdır. ";
				
			}
            var new_adresdagilimi2 = result["new_adresdagilimi2"];
			if(new_adresdagilimi2 == null){
				//mes += " Adres Dağılımı Alanı Dolu Olmalıdır. ";
				
			}
            var new_adresdagilimi2_formatted = result["new_adresdagilimi2@OData.Community.Display.V1.FormattedValue"];
            var _new_il2_value = result["_new_il2_value"];
			if(_new_il2_value == null){
				//mes += " Adres İl Alanı Dolu Olmalıdır. ";
				
			}
            var _new_il2_value_formatted = result["_new_il2_value@OData.Community.Display.V1.FormattedValue"];
            var _new_il2_value_lookuplogicalname = result["_new_il2_value@Microsoft.Dynamics.CRM.lookuplogicalname"];
            var _new_ilce2_value = result["_new_ilce2_value"];
			if(_new_ilce2_value == null){
				//mes += " Adres İlçe Alanı Dolu Olmalıdır. ";
				
			}
            var _new_ilce2_value_formatted = result["_new_ilce2_value@OData.Community.Display.V1.FormattedValue"];
            var _new_ilce2_value_lookuplogicalname = result["_new_ilce2_value@Microsoft.Dynamics.CRM.lookuplogicalname"];
            var _new_ulke2_value = result["_new_ulke2_value"];
			if(_new_ulke2_value == null){
				//mes += " Adres Ülke Alanı Dolu Olmalıdır. ";
				
			}
            var _new_ulke2_value_formatted = result["_new_ulke2_value@OData.Community.Display.V1.FormattedValue"];
            var _new_ulke2_value_lookuplogicalname = result["_new_ulke2_value@Microsoft.Dynamics.CRM.lookuplogicalname"];
			
			if(mes != "") {
				alert(mes);
					disableallfields();
				
			}else {
				//Hebardar olma kaynağı Kontrolü
				controlhaberdar(tid);
				
			}
			
			
	//}//yabancı kontorlü
			
        } else {
            Xrm.Utility.alertDialog(this.statusText);
        }
    }
};
req.send();

		}
	
	var userid = Xrm.Page.context.getUserId();
	userid = userid.toUpperCase().replace("{","").replace("}","");
	if(Xrm.Page.getAttribute('new_satisdurumu').getValue() == 3){
		
	if(userid == "ACEFF127-4B9B-E611-80D6-3417EBEAECF3"
		|| userid == "29EFF127-4B9B-E611-80D6-3417EBEAECF3"
		|| userid == "08F0F127-4B9B-E611-80D6-3417EBEAECF3"
                || userid == "B27DD77C-C933-E711-8108-3417EBEAECF3"
                || userid == "E0AB7EE4-564C-E711-80C6-E4115B13BF35"
                || userid == "85EFF127-4B9B-E611-80D6-3417EBEAECF3"
                || userid == "EEEFF127-4B9B-E611-80D6-3417EBEAECF3"
                || userid == "58722C47-82C5-E811-80F0-E4115B13BF35"
                || userid == "A7C40ABF-AD0E-EB11-826C-000C292E580F"
                || userid == "5C4D24E8-7651-EA11-8111-E4115B13BF35"
                || userid == "92DFFECE-245B-EB11-8359-000C292E580F"
){
			
			
		}else {
			disableallfields();
		}	
	}

	muusteriverikontrol();
	
	//haberdarkontrol(null);

		}
}

function surec() {
        var userid2 = Xrm.Page.context.getUserId();
	userid2 = userid2.toUpperCase().replace("{","").replace("}","");

        var surec = Xrm.Page.getControl("new_surecdurumu");
	if (userid2 == "5C4D24E8-7651-EA11-8111-E4115B13BF35"
		|| userid2 == "C45D0B7E-D831-EA11-8111-E4115B13BF35"
		|| userid2 == "5D09B4F3-8F4F-E911-8110-E4115B13BF35")
	{
	      if (surec != null) {
              	surec.setDisabled(false);
	      }
	}

	else 
	{
	      if (surec != null) {
              	surec.setDisabled(true);
	      }
	}
}


function controlhaberdar(){
	var tid = Xrm.Page.getAttribute("new_contactid").getValue()[0].id;
	tid = tid.replace("{","").replace("}","");
	var req = new XMLHttpRequest();
req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v8.0/new_musterihaberdarolmas?$filter=_new_contactid_value eq " + tid, true);
req.setRequestHeader("OData-MaxVersion", "4.0");
req.setRequestHeader("OData-Version", "4.0");
req.setRequestHeader("Accept", "application/json");
req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
req.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
req.onreadystatechange = function() {
    if (this.readyState === 4) {
        req.onreadystatechange = null;
        if (this.status === 200) {
            var results = JSON.parse(this.response);
			if(results.value.length == 0){
				alert("Müşteri için Haberdar Olma Kaynağı Olmalıdır.");
				disableallfields();
			}else {
				//Kampanya Kontrolü
				controlkampanya();
			}
            for (var i = 0; i < results.value.length; i++) {
                var new_musterihaberdarolmaid = results.value[i]["new_musterihaberdarolmaid"];
            }
        } else {
            Xrm.Utility.alertDialog(this.statusText);
        }
    }
};
req.send();
	
	
}


function controlkampanya(){
	
	var new_satisfirsatid  = Xrm.Page.getAttribute("new_satisfirsatid").getValue()[0].id;
	new_satisfirsatid = new_satisfirsatid.replace("{","").replace("}",""); 
	var req = new XMLHttpRequest();
	var link  =Xrm.Page.context.getClientUrl() + "/api/data/v8.0/new_satisfirsats(" + new_satisfirsatid + ")";
	
	
req.open("GET", link, true);
req.setRequestHeader("OData-MaxVersion", "4.0");
req.setRequestHeader("OData-Version", "4.0");
req.setRequestHeader("Accept", "application/json");
req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
req.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
req.onreadystatechange = function() {
    if (this.readyState === 4) {
        req.onreadystatechange = null;
        if (this.status === 200) {
            var results = JSON.parse(this.response);
	
			debugger;
			if(results._new_kampanya_value != "" && results._new_kampanya_value != "undefined"
			&& results._new_kampanya_value != "null"
			&& results._new_kampanya_value != null){
				
			}else {
				
				alert("Kampanya Dolu Olmalıdır.");
				disableallfields();
			}
          
        } else {
            Xrm.Utility.alertDialog(this.statusText);
        }
    }
};
req.send();
	
	
}


function muusteriverikontrol(){
	
	//new_contactid
	
	if(Xrm.Page.ui.getFormType() == "1"){
	
			var contactid = Xrm.Page.getAttribute('new_contactid').getValue()[0].id.toUpperCase().replace("{","").replace("}","");

			var link = Xrm.Page.context.getClientUrl() + "/api/data/v8.0/contacts(" + contactid +")?$select=emailaddress1,firstname,gendercode,lastname,mobilephone,_new_haberdaraltsebepid_value,_new_haberdaraltsebepid2_value,new_kimlikno,new_uyruk";
	
		var req = new XMLHttpRequest();
req.open("GET", link, true);
req.setRequestHeader("OData-MaxVersion", "4.0");
req.setRequestHeader("OData-Version", "4.0");
req.setRequestHeader("Accept", "application/json");
req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
req.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
req.onreadystatechange = function() {
    if (this.readyState === 4) {
        req.onreadystatechange = null;
        if (this.status === 200) {
			
            var result = JSON.parse(this.response);
			
            var emailaddress1 = result["emailaddress1"];
            var firstname = result["firstname"];
            var gendercode = result["gendercode"];
            var gendercode_formatted = result["gendercode@OData.Community.Display.V1.FormattedValue"];
            var lastname = result["lastname"];
            var mobilephone = result["mobilephone"];
            var _new_haberdaraltsebepid_value = result["_new_haberdaraltsebepid_value"];
            var _new_haberdaraltsebepid_value_formatted = result["_new_haberdaraltsebepid_value@OData.Community.Display.V1.FormattedValue"];
            var _new_haberdaraltsebepid_value_lookuplogicalname = result["_new_haberdaraltsebepid_value@Microsoft.Dynamics.CRM.lookuplogicalname"];
            var _new_haberdaraltsebepid2_value = result["_new_haberdaraltsebepid2_value"];
            var _new_haberdaraltsebepid2_value_formatted = result["_new_haberdaraltsebepid2_value@OData.Community.Display.V1.FormattedValue"];
            var _new_haberdaraltsebepid2_value_lookuplogicalname = result["_new_haberdaraltsebepid2_value@Microsoft.Dynamics.CRM.lookuplogicalname"];
            var new_kimlikno = result["new_kimlikno"];
            var new_uyruk = result["new_uyruk"];
            var new_uyruk_formatted = result["new_uyruk@OData.Community.Display.V1.FormattedValue"];
			
			if(emailaddress1 == null) {
				alert("Müşteri Üzerinde Email Adresi Dolu Olmalıdır. Satış Açamazsınız");
				disableallfields(); } 
				
				if(firstname == null) {
				alert("Müşteri Üzerinde Ad Dolu Olmalıdır. Satış Açamazsınız");
				disableallfields(); } 
				
				
				//if(lastname == null) {
				//alert("Müşteri Üzerinde Soyad Dolu Olmalıdır. Satış Açamazsınız");
				//disableallfields(); }
				
				//if(gendercode == null) {
				//alert("Müşteri Üzerinde Cinsiyet Dolu Olmalıdır. Satış Açamazsınız");
				//disableallfields(); }
				
				if(mobilephone == null) {
				alert("Müşteri Üzerinde Cep Dolu Olmalıdır. Satış Açamazsınız");
				disableallfields(); }
				/*
				if(_new_haberdaraltsebepid_value == null) {
				alert("Müşteri Üzerinde 1. Haberdar Olma Dolu Olmalıdır. Satış Açamazsınız");
				disableallfields(); }
				
				if(_new_haberdaraltsebepid2_value == null) {
				alert("Müşteri Üzerinde 2. Haberdar Olma Dolu Olmalıdır. Satış Açamazsınız");
				disableallfields(); }
				*/
				//if(new_kimlikno == null) {
				//alert("Müşteri Üzerinde Kimlik No Dolu Olmalıdır. Satış Açamazsınız");
				//disableallfields(); }
				
				//if(new_uyruk == null) {
				//alert("Müşteri Üzerinde Uyruk Dolu Olmalıdır. Satış Açamazsınız");
				//disableallfields(); }
				
		
			
        } else {
            Xrm.Utility.alertDialog(this.statusText);
        }
    }
};
req.send();
		
		//
//ad soyad ,cep,mail, cinsiyet, uyruk, kimlik no , haberdar olma kaynağı , milliyeti T.C ise cep 1 miliiyeti yurtdışı ise yurtdışı cep tel zorunlu ,

		
	}
	
	
}

function onsave(exobj){
	if(exobj.getEventArgs().getSaveMode() == 5){
			  var saveEvent2 = exobj.getEventArgs();
			  
		if(Xrm.Page.getAttribute('new_iptaldurum').getValue() == null ||
		Xrm.Page.getAttribute('new_iptaltarih').getValue() == null ||
		Xrm.Page.getAttribute('new_iptalsebep').getValue() == null ||
		Xrm.Page.getAttribute('new_iptalaciklama').getValue() == null 
		){
			alert("İptal Durumu, Sebebi, Tarihi ve İptal Açıklaması Alanlarını Doldurmanız gerekmektedir.");
			    saveEvent2.preventDefault();
			return false;
	
	}
	}

}


function haberdarkontrol(exobj){
	

	
	//Kaynk fırsattaki haberdar olma kaynağı kontrol edilir.
	var firsatid = Xrm.Page.getAttribute('new_satisfirsatid').getValue()[0].id.toUpperCase().replace("{","").replace("}","");

var req = new XMLHttpRequest();
var link = Xrm.Page.context.getClientUrl() + "/api/data/v8.0/new_haberdarkaynaks?$filter=_new_satisfirsatid_value eq " + firsatid;//?$select=exchangerate

req.open("GET", link, true);
req.setRequestHeader("OData-MaxVersion", "4.0");
req.setRequestHeader("OData-Version", "4.0");
req.setRequestHeader("Accept", "application/json");
req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
req.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
req.onreadystatechange = function() {
    if (this.readyState === 4) {
        req.onreadystatechange = null;
        if (this.status === 200) {
            var result = JSON.parse(this.response);
			
        var conid = (result["value"]);
			if(conid == ""){
				//alert("Fırsat üzerinde haberdar olma kaynağı seçmeden satış oluşturamazsınız.");
				if(exobj != null){
					  var saveEvent = exobj.getEventArgs();

    saveEvent.preventDefault();
	return false;
				}
				
			}
		
		
        } else {
            Xrm.Utility.alertDialog(this.statusText);
        }
    }
};
req.send();
	
}

function satisdurumu_onchange(){
	var durum = Xrm.Page.getAttribute('new_satisdurumu').getValue();
	
	if(!CheckUserRole("EY Finans/Satış Sonrası Finans") && durum == "3")//Satıldı noterli
	{
if(durum == "3"){		
alert("Sadece Finans Yetkilileri Değiştirebilir.");
}
		Xrm.Page.getAttribute('new_satisdurumu').setValue(5);
	}
	
}


function CheckUserRole(rolename) {
    var currentUserRoles = Xrm.Page.context.getUserRoles();
    for (var i = 0; i < currentUserRoles.length; i++) {
         var userRoleId = currentUserRoles[i];
	var userRoleName = GetRoleName(userRoleId);
        if (userRoleName == rolename) {
            return true;
        }
    }
    return false;
}

//Get Rolename based on RoleId
function GetRoleName(roleId) {
    //var serverUrl = Xrm.Page.context.getServerUrl();
    var serverUrl = location.protocol + "//" + location.host + "/" + Xrm.Page.context.getOrgUniqueName();
    var odataSelect = serverUrl + "/XRMServices/2011/OrganizationData.svc" + "/" + "RoleSet?$filter=RoleId eq guid'" + roleId + "'";
    var roleName = null;
    $.ajax(
        {
            type: "GET",
            async: false,
            contentType: "application/json; charset=utf-8",
            datatype: "json",
            url: odataSelect,
            beforeSend: function (XMLHttpRequest) { XMLHttpRequest.setRequestHeader("Accept", "application/json"); },
            success: function (data, textStatus, XmlHttpRequest) {
                roleName = data.d.results[0].Name;
            },
            error: function (XmlHttpRequest, textStatus, errorThrown) { alert('OData Select Failed: ' + textStatus + errorThrown + odataSelect); }
        }
    );
    return roleName;
}


function disableallfields(){
		Xrm.Page.data.entity.attributes.forEach(function (attribute, index) {    
    var control = Xrm.Page.getControl(attribute.getName());
    if (control) {
        control.setDisabled(true)
    }
});
	
}

function hesapla(){
	var slistefiyat = Xrm.Page.getAttribute('new_listefiyat').getValue();
        var fiyatfarki = Xrm.Page.getAttribute('new_fiyatfarki').getValue();
	var listefiyat = 0;
	if(slistefiyat != null) listefiyat = parseFloat(slistefiyat);
	
	var sozelmusteriindirimi = Xrm.Page.getAttribute('new_ozelmusteriindirimi').getValue();
	var ozelmusteriindirimi = 0;
	if(sozelmusteriindirimi != null) ozelmusteriindirimi = parseFloat(sozelmusteriindirimi);
	
	var sontoplam = 0;
	sontoplam = listefiyat -  ozelmusteriindirimi;
	
	Xrm.Page.getAttribute('new_fiyat').setValue(sontoplam);
	
	var fiyat = Xrm.Page.getAttribute('new_fiyat').getValue();
var kdvoran = Xrm.Page.getAttribute('new_kdvoran').getValue();

if(fiyatfarki != null)fiyat = fiyat+fiyatfarki;
 var kdvharicfiyat = fiyat * 100  / (100 + parseFloat(kdvoran));

 var kdvtut = fiyat - kdvharicfiyat;

 if(kdvharicfiyat != null) Xrm.Page.getAttribute('new_kdvharic').setValue(kdvharicfiyat);
if(kdvtut != null) Xrm.Page.getAttribute('new_kdvtutar').setValue(kdvtut);
if(fiyat != null)Xrm.Page.getAttribute('new_toplamtutar').setValue(fiyat);
	
}


function hesapla2(){
  var slistefiyat = Xrm.Page.getAttribute('new_toplamtutar').getValue();
  var fiyatfarki = Xrm.Page.getAttribute('new_fiyatfarki').getValue();
  var vadefarki = Xrm.Page.getAttribute('new_vadefarki').getValue();
	var listefiyat = 0;
	if(slistefiyat != null) listefiyat = parseFloat(slistefiyat+fiyatfarki+vadefarki);
	
	
	var sontoplam = 0;
	sontoplam = listefiyat;
	
	Xrm.Page.getAttribute('new_vadefarklitoplam').setValue(sontoplam);
	
var fiyat = Xrm.Page.getAttribute('new_vadefarklitoplam').getValue();
var kdvoran = Xrm.Page.getAttribute('new_kdvoran').getValue();


 var kdvharicfiyat = fiyat * 100  / (100 + parseFloat(kdvoran));

 var kdvtut = fiyat - kdvharicfiyat;

 if(kdvharicfiyat != null) Xrm.Page.getAttribute('new_vadefarklikdvharic').setValue(kdvharicfiyat);
if(kdvtut != null) Xrm.Page.getAttribute('new_vadefarklikdv').setValue(kdvtut);
	
}

function preFilterLookup() {   
 Xrm.Page.getControl("new_kurumsalsatiskampanyaid").addPreSearch(function () {
     addLookupFilter();
   });
}
function addLookupFilter() {
  
  
  var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
var retval =  [year, month, day].join('-');
  
        fetchXml = "<filter type='and'><condition attribute='new_enddate' value='" + retval +"' operator='on-or-after'/></filter>";        
		Xrm.Page.getControl("new_kurumsalsatiskampanyaid").addCustomFilter(fetchXml);

}


function daireonchange(){
	
	if(Xrm.Page.getAttribute('new_daireid').getValue() != null){
	var daireid  = Xrm.Page.getAttribute('new_daireid').getValue()[0].id;
	
	var link = Xrm.Page.context.getClientUrl() + "/api/data/v8.0/new_daires(" + daireid.replace('{', '').replace('}', '') + ")?$select=new_listefiyat,new_kdvoran";

 var req = new XMLHttpRequest();
req.open("GET", link , true);
req.setRequestHeader("OData-MaxVersion", "4.0");
req.setRequestHeader("OData-Version", "4.0");
req.setRequestHeader("Accept", "application/json");
req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
req.onreadystatechange = function() {
    if (this.readyState == 4) {
        req.onreadystatechange = null;
        if (this.status == 200) {
            var result = JSON.parse(this.response);
            var new_listefiyat = result["new_listefiyat"];
			var kdvoran = result["new_kdvoran"];
			if(new_listefiyat != null || new_listefiyat != "" )
			{
			Xrm.Page.getAttribute('new_listefiyat').setValue(new_listefiyat);
			}
			
			
			if(kdvoran != null || kdvoran != "" )
			{
				
			Xrm.Page.getAttribute('new_kdvoran').setValue(kdvoran);
	
			}
		hesapla();
        } else {
            Xrm.Utility.alertDialog(this.statusText);
        }
    }
};
req.send();
	}
}


function kurumsalsatisonchange(){
	
	if( Xrm.Page.getAttribute('new_kurumsalsatiskampanyaid') == null
	|| Xrm.Page.getAttribute('new_kurumsalsatiskampanyaid').getValue() == null) return;
	
	var ksid  = Xrm.Page.getAttribute('new_kurumsalsatiskampanyaid').getValue()[0].id;
	var projeid = Xrm.Page.getAttribute('new_projeid').getValue()[0].id;
	var req = new XMLHttpRequest();
	var link = Xrm.Page.context.getClientUrl() + "/api/data/v8.0/new_kurumsalsatisprojes?$select=new_indirimoran&$filter=_new_kurumsalsatiskampanyaid_value eq " + ksid.replace('{', '').replace('}', '') + " and  _new_projeid_value eq " + projeid.replace('{', '').replace('}', '');

req.open("GET", link , true);
req.setRequestHeader("OData-MaxVersion", "4.0");
req.setRequestHeader("OData-Version", "4.0");
req.setRequestHeader("Accept", "application/json");
req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
req.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
req.onreadystatechange = function() {
    if (this.readyState === 4) {
        req.onreadystatechange = null;
        if (this.status === 200) {
		
            var results = JSON.parse(this.response);
			
			if(results.value.length == 0){
			
				var link2 = Xrm.Page.context.getClientUrl() + "/api/data/v8.0/new_kurumsalsatiskampanyas(" + ksid.replace('{', '').replace('}', '') + ")?$select=new_indirimoran";

 var req2 = new XMLHttpRequest();
req.open("GET", link2 , true);
req.setRequestHeader("OData-MaxVersion", "4.0");
req.setRequestHeader("OData-Version", "4.0");
req.setRequestHeader("Accept", "application/json");
req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
req.onreadystatechange = function() {
    if (this.readyState == 4) {
        req.onreadystatechange = null;
        if (this.status == 200) {
            var result = JSON.parse(this.response);
            var new_indirimoran2 = result["new_indirimoran"];
		
			if(new_indirimoran2 != null || new_indirimoran2 != "" )
			Xrm.Page.getAttribute('new_kurumsalsatisindyuzde').setValue(new_indirimoran2);
		hesapla();
        } else {
            Xrm.Utility.alertDialog(this.statusText);
        }
    }
};
req.send();
				
				/////////////
			}
			
			
            for (var i = 0; i < results.value.length; i++) {
                var new_indirimoran = results.value[i]["new_indirimoran"];
				if(new_indirimoran != null || new_indirimoran != "" )
			Xrm.Page.getAttribute('new_kurumsalsatisindyuzde').setValue(new_indirimoran);
		hesapla();
                var new_indirimoran_formatted = results.value[i]["new_indirimoran@OData.Community.Display.V1.FormattedValue"];
            }
        } else {
            Xrm.Utility.alertDialog(this.statusText);
        }
    }
};
req.send();
	
	/*
	if( Xrm.Page.getAttribute('new_kurumsalsatiskampanyaid') == null
	|| Xrm.Page.getAttribute('new_kurumsalsatiskampanyaid').getValue() == null) return;
	
	var ksid  = Xrm.Page.getAttribute('new_kurumsalsatiskampanyaid').getValue()[0].id;
	var link = Xrm.Page.context.getClientUrl() + "/api/data/v8.0/new_kurumsalsatiskampanyas(" + ksid.replace('{', '').replace('}', '') + ")?$select=new_indirimoran";

 var req = new XMLHttpRequest();
req.open("GET", link , true);
req.setRequestHeader("OData-MaxVersion", "4.0");
req.setRequestHeader("OData-Version", "4.0");
req.setRequestHeader("Accept", "application/json");
req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
req.onreadystatechange = function() {
    if (this.readyState == 4) {
        req.onreadystatechange = null;
        if (this.status == 200) {
            var result = JSON.parse(this.response);
            var new_indirimoran = result["new_indirimoran"];
		
			if(new_indirimoran != null || new_indirimoran != "" )
			Xrm.Page.getAttribute('new_kurumsalsatisindyuzde').setValue(new_indirimoran);
		hesapla();
        } else {
            Xrm.Utility.alertDialog(this.statusText);
        }
    }
};
req.send();
		*/
}



function OpenSatisFormu()
{
	var id = Xrm.Page.data.entity.getId();

	    window.open('http://crm.egeyapi.com:8083/satisformu.aspx?id=' + id);
}

function OpenSatisFormuFinans()
{
	var id = Xrm.Page.data.entity.getId();

	    window.open('http://crm.egeyapi.com:8083/satisformufinans.aspx?id=' + id);
}

function OpenOdemeTaahutname()
{
	var id = Xrm.Page.data.entity.getId();

	    window.open('http://crm.egeyapi.com:8083/odemetaahutname.aspx?id=' + id);
}

function OpenOdemeTaahutnameEng()
{
	var id = Xrm.Page.data.entity.getId();

	    window.open('http://crm.egeyapi.com:8083/odemetaahutnameeng.aspx?id=' + id);
}


function OpenSatisOdemeFormu()
{
	var id = Xrm.Page.data.entity.getId();

	    window.open('http://crm.egeyapi.com:8083/satisformuodeme.aspx?id=' + id);
}

function OpenOdemeTaahutnameKDVMuaf(){
	var id = Xrm.Page.data.entity.getId();

	    window.open('http://crm.egeyapi.com:8083/odemetaahutnamekdvmuaf.aspx?id=' + id);
}

function OpenHesapEkstresi()
{
	var id = Xrm.Page.data.entity.getId();

	    window.open('http://crm.egeyapi.com:8083/HesapEktresi.aspx?id=' + id);
}

function OpenSatisFormuEng()
{
	var id = Xrm.Page.data.entity.getId();

	    window.open('http://crm.egeyapi.com:8083/satisformueng.aspx?id=' + id);
}


function OpenSatisOdemeFormuEng()
{
	var id = Xrm.Page.data.entity.getId();

	    window.open('http://crm.egeyapi.com:8083/satisformuodemeeng.aspx?id=' + id);
}



  function parabirimchange(){
    
    if(Xrm.Page.getAttribute('new_parabirim').getValue() != null){
    var parabirim  = Xrm.Page.getAttribute('new_parabirim').getValue(); 

    if (parabirim == "1" || parabirim == "" || parabirim == null)
    {
        Xrm.Page.getAttribute('new_dovizkuru').setValue("1");
        dovizlihesapla();
    }
    else
    {
      var birim;
      if (parabirim=="2")
      {
        birim = "FE17ABBC-CF36-EA11-8111-E4115B13BF35";
      }
      else
      {
        birim = "A0BC1DD8-CF36-EA11-8111-E4115B13BF35";
      }
      var link = Xrm.Page.context.getClientUrl() + "/api/data/v8.0/transactioncurrencies(" + birim.replace('"', '').replace('"', '') + ")?$select=exchangerate";

      var req = new XMLHttpRequest();
      req.open("GET", link , true);
      req.setRequestHeader("OData-MaxVersion", "4.0");
      req.setRequestHeader("OData-Version", "4.0");
      req.setRequestHeader("Accept", "application/json");
      req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
      req.onreadystatechange = function() {
          if (this.readyState == 4) {
              req.onreadystatechange = null;
              if (this.status == 200) {
                  var result = JSON.parse(this.response);
                  var kur = result["exchangerate"];
            if(kur != null || kur != "" )
            {
            Xrm.Page.getAttribute('new_dovizkuru').setValue(kur);
            }
          }
        }
dovizlihesapla();
      };
      req.send();
    }
  }
else
{
        Xrm.Page.getAttribute('new_dovizkuru').setValue("1");
}
}

function dovizlihesapla() {

  var parabirim  = Xrm.Page.getAttribute('new_parabirim').getValue();
    var kdvharic = Xrm.Page.getAttribute('new_kdvharic').getValue();
    var toplam = Xrm.Page.getAttribute('new_toplamtutar').getValue();
    var kur = Xrm.Page.getAttribute('new_dovizkuru').getValue();

  if (parabirim == "2" || parabirim == "3")
  {
    var dovizlitutar = parseFloat(toplam)/ parseFloat(kur);
    var dovizlikdvharic = parseFloat(kdvharic) / parseFloat(kur);

    if(dovizlitutar != null) Xrm.Page.getAttribute('new_dovizlifiyat').setValue(Math.ceil(dovizlitutar));
    if(dovizlitutar != null) Xrm.Page.getAttribute('new_yonetimindirimi').setValue(Math.ceil(dovizlitutar));
    if(dovizlikdvharic != null) Xrm.Page.getAttribute('new_dovizlikdvharic').setValue(Math.ceil(dovizlikdvharic));
  }
  else
  {
    Xrm.Page.getAttribute('new_dovizlifiyat').setValue(null);
    Xrm.Page.getAttribute('new_dovizlikdvharic').setValue(null);
    Xrm.Page.getAttribute('new_yonetimindirimi').setValue(toplam);
  }
}

function nbdchange(){
    
    if(Xrm.Page.getAttribute('new_nbdindirimorani').getValue() != null){
    var nbdoran  = Xrm.Page.getAttribute('new_nbdindirimorani').getValue(); 

    if (nbdoran == "0" || nbdoran == "" || nbdoran == null || nbdoran=="0,00" || nbdoran=="0.00")
    {
        Xrm.Page.getAttribute('new_kdvharicnbdfiyati').setValue("0");
        Xrm.Page.getAttribute('new_kdvharicm2nbdfiyati').setValue("0");
    }
    else
    {

    nbdhesapla();
      }
    }
}

function nbdhesapla() {
    var uygulamam2 = 0;
    console.log(uygulamam2);
    if(Xrm.Page.getAttribute('new_daireid').getValue() != null){
        var daireid  = Xrm.Page.getAttribute('new_daireid').getValue()[0].id;
        var req = new XMLHttpRequest();
        
        var link = Xrm.Page.context.getClientUrl() + "/api/data/v8.0/new_daires(" + daireid.replace('{', '').replace('}', '') + ")?$select=new_uygulamasatm2,new_sataesasdairebrtalan";


    req.open("GET", link , true);
    req.setRequestHeader("OData-MaxVersion", "4.0");
    req.setRequestHeader("OData-Version", "4.0");
    req.setRequestHeader("Accept", "application/json");
    req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    req.onreadystatechange = function() {
        if (this.readyState == 4) {
            req.onreadystatechange = null;
            if (this.status == 200) {
                var result = JSON.parse(this.response);
                uygulamam2 = result["new_uygulamasatm2"];
                if(uygulamam2 == null || uygulamam2 == "" )
                {
                    uygulamam2 = result["new_sataesasdairebrtalan"];
                }
                var listefiyat = Xrm.Page.getAttribute('new_listefiyat').getValue();
                var kdvoran =  Xrm.Page.getAttribute('new_kdvoran').getValue();
                var kdvharic = listefiyat * 100  / (100 + parseFloat(kdvoran));
                var nbdoran = Xrm.Page.getAttribute('new_nbdindirimorani').getValue();
            
                var new_kdvharicnbdfiyati = parseFloat(kdvharic) * (1-parseFloat((nbdoran/100)));
                var new_kdvharicm2nbdfiyati = 0;
if(uygulamam2 != "" && uygulamam2 != null){
new_kdvharicm2nbdfiyati =	parseFloat(new_kdvharicnbdfiyati) / parseFloat(uygulamam2);
	
}
				
                console.log(parseFloat(new_kdvharicnbdfiyati));
            
            
                if(new_kdvharicnbdfiyati != null) Xrm.Page.getAttribute('new_kdvharicnbdfiyati').setValue(Math.ceil(new_kdvharicnbdfiyati));
                if(new_kdvharicm2nbdfiyati != null &&  new_kdvharicm2nbdfiyati != 0 ) Xrm.Page.getAttribute('new_kdvharicm2nbdfiyati').setValue(Math.ceil(new_kdvharicm2nbdfiyati));
            } else {
                Xrm.Utility.alertDialog(this.statusText);
            }
        }
    };
    req.send();

        }
}

function dovizchange(){
    
    if(Xrm.Page.getAttribute('new_satisdoviz').getValue() != null){
    var parabirim  = Xrm.Page.getAttribute('new_satisdoviz').getValue(); 

    if (parabirim == "1")
    {
        if(Xrm.Page.getAttribute('new_daireid').getValue() != null){
            var daireid  = Xrm.Page.getAttribute('new_daireid').getValue()[0].id;
            
            var link = Xrm.Page.context.getClientUrl() + "/api/data/v8.0/new_daires(" + daireid.replace('{', '').replace('}', '') + ")?$select=new_listefiyat,new_kdvoran";
        
         var req = new XMLHttpRequest();
        req.open("GET", link , true);
        req.setRequestHeader("OData-MaxVersion", "4.0");
        req.setRequestHeader("OData-Version", "4.0");
        req.setRequestHeader("Accept", "application/json");
        req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        req.onreadystatechange = function() {
            if (this.readyState == 4) {
                req.onreadystatechange = null;
                if (this.status == 200) {
                    var result = JSON.parse(this.response);
                    var new_listefiyat = result["new_listefiyat"];
                    var kdvoran = result["new_kdvoran"];
                    if(new_listefiyat != null || new_listefiyat != "" )
                    {
                    Xrm.Page.getAttribute('new_listefiyat').setValue(new_listefiyat);
                    }
                    
                    
                    if(kdvoran != null || kdvoran != "" )
                    {
                        
                    Xrm.Page.getAttribute('new_kdvoran').setValue(kdvoran);
            
                    }
                hesapla();
    }
}}}}
    else
    {
      if (parabirim=="2")
      {
        if(Xrm.Page.getAttribute('new_daireid').getValue() != null){
            var daireid  = Xrm.Page.getAttribute('new_daireid').getValue()[0].id;
            
            var link = Xrm.Page.context.getClientUrl() + "/api/data/v8.0/new_daires(" + daireid.replace('{', '').replace('}', '') + ")?$select=new_kdvdahildolarlistefiyat,new_kdvoran";
        
         var req = new XMLHttpRequest();
        req.open("GET", link , true);
        req.setRequestHeader("OData-MaxVersion", "4.0");
        req.setRequestHeader("OData-Version", "4.0");
        req.setRequestHeader("Accept", "application/json");
        req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        req.onreadystatechange = function() {
            if (this.readyState == 4) {
                req.onreadystatechange = null;
                if (this.status == 200) {
                    var result = JSON.parse(this.response);
                    var new_listefiyat = result["new_kdvdahildolarlistefiyat"];
                    var kdvoran = result["new_kdvoran"];
                    if(new_listefiyat != null || new_listefiyat != "" )
                    {
                    Xrm.Page.getAttribute('new_listefiyat').setValue(new_listefiyat);
                    }
                    
                    
                    if(kdvoran != null || kdvoran != "" )
                    {
                        
                    Xrm.Page.getAttribute('new_kdvoran').setValue(kdvoran);
            
                    }
                hesapla();
      }}}}}

      };
      req.send();
}}

