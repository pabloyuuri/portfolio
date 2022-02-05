class Slide 
{
  constructor(section) 
  {
    this.slide = document.querySelector(`[data-slide="${section}"]`);
    this.projectActive(0);
    this.init();
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

  returnFirstProject(index)
  {
    this.listProjects[index].classList.add('active');
  }

  next() 
  {
    this.projectActive(this.active + 1);
  }

  back() 
  {
    this.projectActive(this.active - 1);
  }

  project()
  {
    const nextButton = document.querySelector('.button-proximo');
    const backButton = document.querySelector('.button-voltar');
    let infosButtons = document.querySelectorAll('.button-informacao-projeto');

    nextButton.addEventListener('click', this.next);
    backButton.addEventListener('click', this.back);
    infosButtons.forEach(item => item.addEventListener(['click'], this.info));
  }

  init()
  {

    this.next = this.next.bind(this);
    this.back = this.back.bind(this);
    this.info = this.info.bind(this);

    this.project();
  }

  info()
  {
    console.log('chamou');
    this.infos = document.querySelectorAll('.info');
    
    if(this.infoAtiva != "undefined" && this.infoAtiva != null)
    {
      this.infos[this.active].classList.remove('active');
      this.infoAtiva = null;
    }
    else
    {
      this.infos[this.active].classList.add('active')
      this.infoAtiva = this.infos[this.active];
    }
  }
  
}

new Slide('projetos');
