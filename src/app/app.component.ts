import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  janelaId: string | null = null;
  isMobile: boolean = false;

  // Mapeamento dos IDs das técnicas para os URLs dos vídeos
  videoUrls: { [key: string]: string } = {
    'jutchun-jireugi': 'https://www.youtube.com/embed/S2p2Y3r73wE',
    'moa-seogi': 'https://www.youtube.com/embed/exampleVideoId1',
    // Adicione os outros IDs e URLs de vídeo aqui
  };

  constructor() { }

  ngOnInit(): void {
    this.isMobile = window.innerWidth <= 1024;
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth <= 1024;
    });
  }

  onLinkHover(dataId: string): void {
    if (!this.isMobile) {
      this.janelaId = dataId;
    }
  }

  // Lógica de clique unificada para mobile e desktop
 onLinkClick(dataId: string): void {
  console.log('Componente pai: Recebeu o clique para o ID:', dataId);
  this.janelaId = dataId;
  console.log('Componente pai: Variável janelaId definida para:', this.janelaId);
  console.log('Componente pai: O valor da variável janelaId é:', this.janelaId);
}

  // Fecha a janela definindo o ID como nulo
  fecharJanela(): void {
    this.janelaId = null;
  }
}