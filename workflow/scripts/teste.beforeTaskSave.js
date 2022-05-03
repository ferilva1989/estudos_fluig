function beforeTaskSave(colleagueId, nextSequenceId, userList) {

	var anexos = hAPI.listAttachments();
	var temAnexos = false;

	for (i = 0; i < anexos.size(); i++) {
		temAnexos = true;
		if (anexosAtual.getDocumentDescription() == "Proposta Comercial.pdf") {
			temAnexos = true;
		}
	}

	if (!temAnexos) {
		throw ("Proposta comercial não foi anexada!");
	}
}