import React from 'react';
import cn from 'classnames';

import Icon from '../icon';
import './gallery.scss';

export default class Gallery extends React.Component {
  state = {
    currentImageIdx: null,
    modalOpened: false,
  };

  imageMaxIdx = 0;

  componentDidMount() {
    const { images } = this.props;
    if (!images) {
      return;
    }

    this.imageMaxIdx = images.length - 1;
    this.setState({
      currentImageIdx: 0,
    });

    document.addEventListener('keydown', this.keyboardHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyboardHandler);
  }

  keyboardHandler = (evt) => {
    const { key } = evt;

    switch (key) {
      case 'ArrowLeft':
        this.prevSlide(evt);
        break;
      case 'ArrowRight':
        this.nextSlide(evt);
        break;
      case 'Escape':
        this.state.modalOpened && this.closeModal();
        break;
      default:
        break;
    }
  };

  imagesListHandler = (evt) => {
    const { idx } = evt.target.dataset;
    this.setState({ currentImageIdx: Number(idx) });
  }

  nextSlide = (evt) => {
    evt.stopPropagation();
    const { currentImageIdx } = this.state;
    const nextImageIdx = (currentImageIdx + 1) > this.imageMaxIdx ? 0 : currentImageIdx + 1;
    this.setState({ currentImageIdx: nextImageIdx });
  };

  prevSlide = (evt) => {
    evt.stopPropagation();
    const { currentImageIdx } = this.state;
    const prevImageIdx = (currentImageIdx - 1) < 0 ? this.imageMaxIdx : currentImageIdx - 1;
    this.setState({ currentImageIdx: prevImageIdx });
  };

  openModal = () => {
    this.setState({ modalOpened: true });
    document.body.classList.add('scroll-hidden');
  };

  closeModal = () => {
    this.setState({ modalOpened: false });
    document.body.classList.remove('scroll-hidden');
  };

  render() {
    const { images } = this.props;

    if (!images) {
      return null;
    }

    const { currentImageIdx, modalOpened } = this.state;
    const currentImage = images[currentImageIdx];
    const modalCls = cn('gallery__modal', {
      'gallery__modal--opened': modalOpened,
    });

    return (
      <div className="gallery">
        <div className={modalCls}>
          <div className="gallery__modal-content" onClick={this.closeModal}>
            <div className="gallery__modal-close" onClick={this.closeModal}>
              <Icon name={'close'} />
            </div>
            <div className="gallery__modal-nav-btn gallery__modal-nav-btn--prev" onClick={this.prevSlide}>
              <Icon name={'back'} />
            </div>
            <div className="gallery__modal-image-container">
              <img className="gallery__modal-image" src={currentImage} alt="gallery item" data-object-fit="contain" />
            </div>
            <div className="gallery__modal-nav-btn gallery__modal-nav-btn--next" onClick={this.nextSlide}>
              <Icon name={'next'} />
            </div>
          </div>
        </div>
        <div className="gallery__main-image-container" onClick={this.openModal}>
          <div className="gallery__image-nav-btn gallery__image-nav-btn--prev" onClick={this.prevSlide}>
            <Icon name={'back'} />
          </div>
          <img className="gallery__main-image" src={currentImage} alt="gallery item" />
          <div className="gallery__image-zoom">
            <Icon name={'zoom-in'} />
          </div>
          <div className="gallery__image-nav-btn gallery__image-nav-btn--next" onClick={this.nextSlide}>
            <Icon name={'next'} />
          </div>
        </div>
        <div className="gallery__images-list">
          {
            images.map((src, idx) => {
              const style = {
                backgroundImage: `url(${src})`,
              };
              const cls = cn('gallery__images-item', {
                'gallery__images-item--current': idx === currentImageIdx,
              });
              return (
                <div
                  key={src}
                  data-idx={idx}
                  className={cls}
                  style={style}
                  onClick={this.imagesListHandler} />
              );
            })
          }
        </div>
      </div>
    );
  }
}
