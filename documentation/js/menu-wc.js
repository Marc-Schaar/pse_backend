'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">pse_backend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-8423c1112e8c467f98b7b7893c45bef9552e3292befc7e733e6705719a4445b97ff78aacf2515ce2be83c58e950f6c6715288cb6cdc70529f37ba6901f1c8767"' : 'data-bs-target="#xs-controllers-links-module-AppModule-8423c1112e8c467f98b7b7893c45bef9552e3292befc7e733e6705719a4445b97ff78aacf2515ce2be83c58e950f6c6715288cb6cdc70529f37ba6901f1c8767"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-8423c1112e8c467f98b7b7893c45bef9552e3292befc7e733e6705719a4445b97ff78aacf2515ce2be83c58e950f6c6715288cb6cdc70529f37ba6901f1c8767"' :
                                            'id="xs-controllers-links-module-AppModule-8423c1112e8c467f98b7b7893c45bef9552e3292befc7e733e6705719a4445b97ff78aacf2515ce2be83c58e950f6c6715288cb6cdc70529f37ba6901f1c8767"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-8423c1112e8c467f98b7b7893c45bef9552e3292befc7e733e6705719a4445b97ff78aacf2515ce2be83c58e950f6c6715288cb6cdc70529f37ba6901f1c8767"' : 'data-bs-target="#xs-injectables-links-module-AppModule-8423c1112e8c467f98b7b7893c45bef9552e3292befc7e733e6705719a4445b97ff78aacf2515ce2be83c58e950f6c6715288cb6cdc70529f37ba6901f1c8767"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-8423c1112e8c467f98b7b7893c45bef9552e3292befc7e733e6705719a4445b97ff78aacf2515ce2be83c58e950f6c6715288cb6cdc70529f37ba6901f1c8767"' :
                                        'id="xs-injectables-links-module-AppModule-8423c1112e8c467f98b7b7893c45bef9552e3292befc7e733e6705719a4445b97ff78aacf2515ce2be83c58e950f6c6715288cb6cdc70529f37ba6901f1c8767"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PseElementsModule.html" data-type="entity-link" >PseElementsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PseElementsModule-f1d62c853e33daf3d622ccb952747be1a0801b23f5db3fa5a308ad23fe1082151417da2e7fff75c1bf379d926a6326575a861ca0af303bfc8ee3a4a84e749e27"' : 'data-bs-target="#xs-controllers-links-module-PseElementsModule-f1d62c853e33daf3d622ccb952747be1a0801b23f5db3fa5a308ad23fe1082151417da2e7fff75c1bf379d926a6326575a861ca0af303bfc8ee3a4a84e749e27"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PseElementsModule-f1d62c853e33daf3d622ccb952747be1a0801b23f5db3fa5a308ad23fe1082151417da2e7fff75c1bf379d926a6326575a861ca0af303bfc8ee3a4a84e749e27"' :
                                            'id="xs-controllers-links-module-PseElementsModule-f1d62c853e33daf3d622ccb952747be1a0801b23f5db3fa5a308ad23fe1082151417da2e7fff75c1bf379d926a6326575a861ca0af303bfc8ee3a4a84e749e27"' }>
                                            <li class="link">
                                                <a href="controllers/PseElementsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PseElementsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PseElementsModule-f1d62c853e33daf3d622ccb952747be1a0801b23f5db3fa5a308ad23fe1082151417da2e7fff75c1bf379d926a6326575a861ca0af303bfc8ee3a4a84e749e27"' : 'data-bs-target="#xs-injectables-links-module-PseElementsModule-f1d62c853e33daf3d622ccb952747be1a0801b23f5db3fa5a308ad23fe1082151417da2e7fff75c1bf379d926a6326575a861ca0af303bfc8ee3a4a84e749e27"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PseElementsModule-f1d62c853e33daf3d622ccb952747be1a0801b23f5db3fa5a308ad23fe1082151417da2e7fff75c1bf379d926a6326575a861ca0af303bfc8ee3a4a84e749e27"' :
                                        'id="xs-injectables-links-module-PseElementsModule-f1d62c853e33daf3d622ccb952747be1a0801b23f5db3fa5a308ad23fe1082151417da2e7fff75c1bf379d926a6326575a861ca0af303bfc8ee3a4a84e749e27"' }>
                                        <li class="link">
                                            <a href="injectables/PseElementsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PseElementsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/PseElement.html" data-type="entity-link" >PseElement</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePseElementDto.html" data-type="entity-link" >CreatePseElementDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePseElementDto.html" data-type="entity-link" >UpdatePseElementDto</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});