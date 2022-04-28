function validateForm(form) {
	var activity = getValue('WKNumState');
	//log.info("Testando o log info");
	if (activity == 15) {
	/*	try {*/
			var clientService = fluigAPI.getAuthorizeClientService();
			var rowId = element.parentNode.parent().index();
			var smc = form.getValue('WKNumProces')
			var item = form.getValue("column_item") + "___" + rowId.prop("value").toLowerCase();
			var codprod = form.getValue("column_cod") + "___" + rowId.prop("value").toLowerCase();
			var quant = form.getValue("column_quant") + "___" + rowId.prop("value");
			var data = {
				companyId: getValue('WKCompany') + '',
				serviceCode: 'cbcapicobi',
				endpoint: '/ws/cbcAlmoxApi/smc',
				method: 'post',// 'delete', 'patch', 'put', 'get'     
				timeoutService: '100', // segundos
				params: {
					"SMC": smc,
					"ITEMS": [{
						"Item": item,
						"Codigo": codprod,
						"Quant": quant
					}]
				},
				options: {
					encoding: 'UTF-8',
					mediaType: 'application/json',
					useSSL: true
				},
				headers: {
					ContentType: 'application/json;charset=UTF-8'
				}
			}
			var vo = clientService.invoke(JSON.stringify(data));
			if (vo.getResult() == null || vo.getResult().isEmpty()) {
				throw new Exception("Retorno está vazio");
			} else {
				return vo.getResult();
			}
		/*} catch (err) {
			throw new Exception(err);
		}*/
	}
	if (activity == 2){		
		var smc = getValue('WKNumProces');
		var cMsg = "";
		log.info("Num. SMC: " + smc);
		var oSMC = {"SMC": smc, "ITEMS":[]};
		var indexes = form.getChildrenIndexes("PE_AS_COMPONENT");
	    if (indexes.length > 0) {
	    	log.info("INICIO Tabela");
	        for (var i = 0; i < indexes.length; i++) { // percorre os campos Pai x Filho
	        	cMsg = "Lin: " + (i+1);
	        	cMsg += " | Item: " +  form.getValue('column_item___' + indexes[i]);
	        	cMsg += " | Cod: " +  form.getValue('column_cod___' + indexes[i]).trim();
	        	cMsg += " | Qtd: " +  parseFloat(form.getValue('column_quant___' + indexes[i]));
	        	log.info(cMsg);
	        	oSMC.ITEMS.push({"Item": form.getValue('column_item___' + indexes[i]),"Codigo": form.getValue('column_cod___' + indexes[i]).trim(),"Quant":parseFloat(form.getValue('column_quant___' + indexes[i]))})
	        }
	        log.info("FIM Tabela");
	        log.info("INICIO JSON");
	        cMsg = JSONUtil.toJSON(oSMC);
	        log.info(cMsg);
	        log.info("FIM JSON");
	    }
	    indexes = form.getChildrenIndexes("PE_AS_COMPONENT");
	    if (indexes.length > 0) {
	    	log.info("INICIO Tabela");
	        for (var i = 0; i < indexes.length; i++) { // percorre os campos Pai x Filho
	        	cMsg = "Lin: " + (i+1);
	        	cMsg += " | Item: " +  form.getValue('column_item___' + indexes[i]);
	        	cMsg += " | Cod: " +  form.getValue('column_cod___' + indexes[i]).trim();
	        	cMsg += " | Qtd: " +  parseFloat(form.getValue('column_quant___' + indexes[i]));
	        	log.info(cMsg);
	        	oSMC.ITEMS.push({"Item": form.getValue('column_item___' + indexes[i]),"Codigo": form.getValue('column_cod___' + indexes[i]).trim(),"Quant":parseFloat(form.getValue('column_quant___' + indexes[i]))})
	        }
	        log.info("FIM Tabela");
	        log.info("INICIO JSON");
	        cMsg = JSONUtil.toJSON(oSMC);
	        log.info(cMsg);
	        log.info("FIM JSON");
	    }
	    /*
		var rowId = element.parentNode.parent().index();
		var item = form.getValue("column_item") + "___" + rowId.prop("value").toLowerCase();
		var codprod = form.getValue("column_cod") + "___" + rowId.prop("value").toLowerCase();
		var quant = form.getValue("column_quant") + "___" + rowId.prop("value");		
	    */
	}
	throw "TESTE DE VALIDAÇÃO.";
}