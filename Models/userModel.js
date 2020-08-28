class user {
    constructor(iduser, Nom, Prenom, Mail, Telephone, Code_postal, Adresse, Password)
    {
        this.iduser = iduser;
        this.Nom = Nom;
        this.Prenom = Prenom;
        this.Mail = Mail;
        this.Telephone = Telephone;
        this.Code_postal = Code_postal;
        this.Adresse = Adresse;
        this.Password = Password;
    }
};

module.exports = user;