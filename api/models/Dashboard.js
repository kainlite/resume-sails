/**
 * Dashboard
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
    institution: 'string',
    to: 'date',
    from: 'date',
    title: 'string',
    description: 'string',
    kind: 'string'
  },

  contact: 'kainlite@gmail.com',
  about: 'A Sysadmin/Programmer/DevOps interested in learning and developing stuff with all the tech available...',

  study: [
    {
      title: "General Game Playing",
      from: "01/01/2013",
      to: "01/12/2013",
      institution: "Coursera",
      description: "Concepts about AI and the making of your own automated player",
      kind: "study"
    },
    {
      title: "Ruby on Rails",
      from: "01/01/2011",
      to: "01/12/2011",
      institution: "UTN FRM",
      description: "Ruby on rails course",
      kind: "study"
    },
    {
      title: "M101P",
      from: "01/01/2013",
      to: "01/12/2013",
      institution: "MongoDB University",
      description: "MongoDB for Python developers",
      kind: "study"
    },
    {
      title: "M102",
      from: "01/01/2013",
      to: "01/12/2013",
      institution: "MongoDB University",
      description: "MongoDB for system administrators",
      kind: "study"
    },
    {
      title: "ESR",
      from: "01/01/2008",
      to: "01/01/2009",
      institution: "Proydesa",
      description: "Enterprise Security & Risk",
      kind: "study"
    },
    {
      title: "CCNA Cisco Certified Associate",
      from: "01/01/2005",
      to: "01/01/2007",
      institution: "ISRI",
      description: "CCNA / Networking",
      kind: "study"
    },
    {
      title: "Basic Programming and Databases",
      from: "01/01/2004",
      to: "01/01/2005",
      institution: "Institute Saavedra",
      description: "Basics of C, Php, ASP, javascript, MSSQL, MySQL",
      kind: "study"
    },
    {
      title: "Bachelor\'s degree, informatic",
      from: "01/01/1999",
      to: "01/01/2003",
      institution: "E.P.E.T. Nº 4",
      description: "Professional Informatic",
      kind: "study"
    }
  ],

  work: [
    {
      title: "Sysadmin/Programmer/DevOps",
      from: "01/08/2008",
      to: "",
      institution: "Workjoy Argentina S.A.",
      description: "Infrastructure designer/implementator, Build systems to control and improve response times on sysadmin tasks, develop and deploy management system.",
      kind: "work"
    },
    {
      title: "Programmer",
      from: "01/01/2013",
      to: "31/05/2013",
      institution: "Cirope S.A.",
      description: "Ruby Programmer, using Rails framework",
      kind: "work"
    },
    {
      title: "Computer Technician",
      from: "01/04/2008",
      to: "01/08/2008",
      institution: "Norfix S.A.",
      description: "Tech support, Pc repairment, Networking",
      kind: "work"
    },
    {
      title: "Sysadmin",
      from: "01/08/2005",
      to: "01/02/2008",
      institution: "S.T.I. Informatica",
      description: "Network administration",
      kind: "work"
    },
    {
      title: "Computer Technician",
      from: "01/01/2007",
      to: "01/08/2008",
      institution: "CyberPoints",
      description: "Pc repairment, Network administration",
      kind: "work"
    }
  ],

};
