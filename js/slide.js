class Slide 
{
  constructor(section) 
  {
    this.toggleMenuRedesSociais();
    this.slide = document.querySelector(`[data-slide="${section}"]`);
    this.projectActive(0);
    this.init();
  }

  toggleMenu() {
    console.log('nav');
    const nav = document.querySelector('.nav-button');
    nav.classList.toggle('active');
  }
  toggleMenuRedesSociais() {
    let buttonHeaderName = document.querySelector('.header-button-name');
    console.log('buttonHeaderName');
    buttonHeaderName.addEventListener('click', this.toggleMenu)
  }

  projectActive(index) 
  {
    this.active = index;
    this.listProjects = this.slide.querySelectorAll( ".portfolio-projetos > *");
    this.sizeProjects = this.listProjects.length - 1;
    this.listProjects.forEach(item => item.classList.remove('active'));

    if(index > this.sizeProjects)
    {
      this.active = 0;
      return this.returnFirstProject(this.active);
    }
    if(index < 0)
    {
      this.active = this.sizeProjects;
      return this.returnFirstProject(this.active);
    }

    this.listProjects[index].classList.add('active');
    
  }

  init()
  {
    this.next = this.next.bind(this);
    this.back = this.back.bind(this);
    this.info = this.info.bind(this);

    this.projectBind();
  }

  projectBind()
  {
    const nextButton = this.getButton('.button-proximo');//document.querySelector('.button-proximo');
    const backButton = this.getButton('.button-voltar');
    let infosButtons = document.querySelectorAll('.button-informacao-projeto');

    nextButton.addEventListener('click', this.next);
    backButton.addEventListener('click', this.back);
    infosButtons.forEach(item => item.addEventListener(['click'], this.info));
  }
  getButton(nameClass){
    let nextButton = document.querySelector(nameClass);
    return nextButton;
  }
  
  returnFirstProject(index)
  {
    this.listProjects[index].classList.add('active');
  }

  next() 
  {
    this.removeInfo();
    this.projectActive(this.active + 1);
  }

  back() 
  {
    this.removeInfo();
    this.projectActive(this.active - 1);
  }

  info()
  {
    if(this.infoAtiva != "undefined" && this.infoAtiva != null) {
      this.removeInfo();
    }
    else {
      this.addInfo();
    }
  }
  
  getInfos(){
    let infos =  document.querySelectorAll('.info');
    return infos;
  }
  addInfo(){
    this.infos = this.getInfos();
    this.infos[this.active].classList.add('active')
    this.infoAtiva = this.infos[this.active];
  }
  removeInfo(){
    this.infos = this.getInfos();
    this.infos.forEach(item => item.classList.remove('active'));
    this.infoAtiva = null;
  }
}

new Slide('projetos');
