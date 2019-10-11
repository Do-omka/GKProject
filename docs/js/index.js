"use strict";

function findAncestor(el, cls) {
  while ((el = el.parentElement) && !el.classList.contains(cls)) {
    ;
  }

  return el;
}

document.addEventListener('DOMContentLoaded', function (e) {
  if (document.querySelector('.ourTeam-slider')) {
    var ourTeam_slider = new Swiper('.ourTeam-slider .slider', {
      wrapperClass: 'slider-slides',
      slideClass: 'slider-slide',
      slidesPerView: 4,
      spaceBetween: 30,
      // autoHeight: true,
      navigation: {
        nextEl: '.ourTeam-slider .slider-control._next',
        prevEl: '.ourTeam-slider .slider-control._prev'
      },
      breakpoints: {
        1199: {
          slidesPerView: 3
        },
        991: {
          slidesPerView: 2
        },
        767: {
          slidesPerView: 2
        },
        575: {
          slidesPerView: 1
        }
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true
      }
    });
  }

  if (document.querySelector('.loicences-slider')) {
    var _ourTeam_slider = new Swiper('.loicences-slider .slider', {
      wrapperClass: 'slider-slides',
      slideClass: 'slider-slide',
      watchSlidesVisibility: true,
      slideVisibleClass: '_visible',
      slidesPerView: 4,
      spaceBetween: 30,
      // autoHeight: true,
      navigation: {
        nextEl: '.loicences-slider .slider-control._next',
        prevEl: '.loicences-slider .slider-control._prev'
      },
      pagination: {
        el: '.loicences-slider .slider-pagination',
        bulletClass: 'slider-bullet',
        bulletActiveClass: 'slider-bullet_active',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        1199: {
          slidesPerView: 3
        },
        991: {
          slidesPerView: 2
        },
        767: {
          slidesPerView: 2
        },
        575: {
          slidesPerView: 1
        }
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true
      }
    });
  }

  var nextSlide = function nextSlide(e) {
    var dom = findAncestor(e.target, 'slide');
    dom.classList.toggle('active');

    if (dom.nextElementSibling) {
      dom.nextElementSibling.classList.toggle('active');
    } else {
      dom.parentElement.firstElementChild.classList.toggle('active');
    }
  };

  if (document.querySelectorAll('[data-js="nextSlide"]')) {
    var slides = document.querySelectorAll('[data-js="nextSlide"]');

    for (var i = 0; i < slides.length; i++) {
      slides[i].addEventListener('click', nextSlide);
    }
  }

  if (document.querySelector('#new .main_menu-mobile .navbar')) {
    (function () {
      var navbar = document.querySelector('#new .main_menu-mobile .navbar');
      var togs = navbar.querySelectorAll('.dropdown-toggle');
      var suptogs = navbar.querySelectorAll('.nav > .dropdown > .dropdown-toggle');

      for (var _i = 0; _i < togs.length; _i++) {
        togs[_i].addEventListener('click', function (e) {
          if (!e.currentTarget.parentElement.classList.contains('open')) {
            navbar.classList.add('sub');
          }
        });
      }

      var _loop = function _loop(_i2) {
        suptogs[_i2].addEventListener('click', function (e) {
          if (findAncestor(suptogs[_i2], 'dropdown').classList.contains('open')) {
            navbar.classList.remove('sub');
          }
        });
      };

      for (var _i2 = 0; _i2 < suptogs.length; _i2++) {
        _loop(_i2);
      }

      var navtogs = document.querySelectorAll('#new .main_menu-mobile .navbar-toggle');

      for (var _i3 = 0; _i3 < navtogs.length; _i3++) {
        navtogs[_i3].addEventListener('click', function (e) {
          navbar.classList.remove('sub');
        });
      }
    })();
  }

  $('.dropdown-menu .dropdown').on('hide.bs.dropdown', function (e) {
    findAncestor(e.target, 'dropdown').classList.add('open');
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZpbmRBbmNlc3RvciIsImVsIiwiY2xzIiwicGFyZW50RWxlbWVudCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInF1ZXJ5U2VsZWN0b3IiLCJsZXQiLCJvdXJUZWFtX3NsaWRlciIsIlN3aXBlciIsIndyYXBwZXJDbGFzcyIsInNsaWRlQ2xhc3MiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsImJyZWFrcG9pbnRzIiwia2V5Ym9hcmQiLCJlbmFibGVkIiwib25seUluVmlld3BvcnQiLCJ3YXRjaFNsaWRlc1Zpc2liaWxpdHkiLCJzbGlkZVZpc2libGVDbGFzcyIsInBhZ2luYXRpb24iLCJidWxsZXRDbGFzcyIsImJ1bGxldEFjdGl2ZUNsYXNzIiwidHlwZSIsImNsaWNrYWJsZSIsIm5leHRTbGlkZSIsImRvbSIsInRhcmdldCIsInRvZ2dsZSIsIm5leHRFbGVtZW50U2libGluZyIsImZpcnN0RWxlbWVudENoaWxkIiwicXVlcnlTZWxlY3RvckFsbCIsInNsaWRlcyIsImkiLCJsZW5ndGgiLCJuYXZiYXIiLCJ0b2dzIiwic3VwdG9ncyIsImN1cnJlbnRUYXJnZXQiLCJhZGQiLCJyZW1vdmUiLCJuYXZ0b2dzIiwiJCIsIm9uIl0sIm1hcHBpbmdzIjoiOztBQUFBLFNBQVNBLFlBQVQsQ0FBdUJDLEVBQXZCLEVBQTJCQyxHQUEzQixFQUFnQztBQUMvQixTQUFPLENBQUNELEVBQUFBLEdBQUtBLEVBQUUsQ0FBQ0UsYUFBVCxLQUEyQixDQUFDRixFQUFFLENBQUNHLFNBQUhILENBQWFJLFFBQWJKLENBQXNCQyxHQUF0QkQsQ0FBbkM7QUFBOEQ7QUFBOUQ7O0FBQ0EsU0FBT0EsRUFBUDtBQUNEOztBQUVBSyxRQUFRLENBQUNDLGdCQUFURCxDQUEwQixrQkFBMUJBLEVBQThDLFVBQUNFLENBQUQsRUFB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QyxFQUE5QkQsQ0FBaUMsa0JBQWpDQSxFQUFxRCxVQUFDeEMsQ0FBRCxFQUFNO0FBQzFEUixJQUFBQSxZQUFZLENBQUNRLENBQUMsQ0FBQ3lCLE1BQUgsRUFBVyxVQUFYLENBQVpqQyxDQUFtQ0ksU0FBbkNKLENBQTZDNkMsR0FBN0M3QyxDQUFpRCxNQUFqREE7QUFDQSxHQUZEZ0Q7QUFJQSxDQS9IRDFDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZmluZEFuY2VzdG9yIChlbCwgY2xzKSB7XHJcblx0d2hpbGUgKChlbCA9IGVsLnBhcmVudEVsZW1lbnQpICYmICFlbC5jbGFzc0xpc3QuY29udGFpbnMoY2xzKSk7XHJcblx0cmV0dXJuIGVsXHJcbn1cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoZSk9PiB7XHJcblx0XHJcblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdXJUZWFtLXNsaWRlcicpKSB7XHJcblx0XHRsZXQgb3VyVGVhbV9zbGlkZXIgPSBuZXcgU3dpcGVyKCcub3VyVGVhbS1zbGlkZXIgLnNsaWRlcicsIHtcclxuXHRcdFx0d3JhcHBlckNsYXNzOiAnc2xpZGVyLXNsaWRlcycsXHJcblx0XHRcdHNsaWRlQ2xhc3M6ICdzbGlkZXItc2xpZGUnLFxyXG5cdFx0XHRzbGlkZXNQZXJWaWV3OiA0LFxyXG5cdFx0XHRzcGFjZUJldHdlZW46IDMwLFxyXG5cdFx0XHQvLyBhdXRvSGVpZ2h0OiB0cnVlLFxyXG5cdFx0XHRuYXZpZ2F0aW9uOiB7XHJcblx0XHRcdFx0bmV4dEVsOiAnLm91clRlYW0tc2xpZGVyIC5zbGlkZXItY29udHJvbC5fbmV4dCcsXHJcblx0XHRcdFx0cHJldkVsOiAnLm91clRlYW0tc2xpZGVyIC5zbGlkZXItY29udHJvbC5fcHJldidcclxuXHRcdFx0fSxcclxuXHRcdFx0YnJlYWtwb2ludHM6IHtcclxuXHRcdFx0XHQxMTk5OiB7XHJcblx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAzLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0OTkxOiB7XHJcblx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAyLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0NzY3OiB7XHJcblx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAyLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0NTc1OiB7XHJcblx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAxLFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0a2V5Ym9hcmQ6IHtcclxuXHRcdFx0XHRlbmFibGVkOiB0cnVlLFxyXG5cdFx0XHRcdG9ubHlJblZpZXdwb3J0OiB0cnVlXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHRcclxuXHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvaWNlbmNlcy1zbGlkZXInKSkge1xyXG5cdFx0bGV0IG91clRlYW1fc2xpZGVyID0gbmV3IFN3aXBlcignLmxvaWNlbmNlcy1zbGlkZXIgLnNsaWRlcicsIHtcclxuXHRcdFx0d3JhcHBlckNsYXNzOiAnc2xpZGVyLXNsaWRlcycsXHJcblx0XHRcdHNsaWRlQ2xhc3M6ICdzbGlkZXItc2xpZGUnLFxyXG5cdFx0XHR3YXRjaFNsaWRlc1Zpc2liaWxpdHk6IHRydWUsXHJcblx0XHRcdHNsaWRlVmlzaWJsZUNsYXNzOiAnX3Zpc2libGUnLFxyXG5cdFx0XHRzbGlkZXNQZXJWaWV3OiA0LFxyXG5cdFx0XHRzcGFjZUJldHdlZW46IDMwLFxyXG5cdFx0XHQvLyBhdXRvSGVpZ2h0OiB0cnVlLFxyXG5cdFx0XHRuYXZpZ2F0aW9uOiB7XHJcblx0XHRcdFx0bmV4dEVsOiAnLmxvaWNlbmNlcy1zbGlkZXIgLnNsaWRlci1jb250cm9sLl9uZXh0JyxcclxuXHRcdFx0XHRwcmV2RWw6ICcubG9pY2VuY2VzLXNsaWRlciAuc2xpZGVyLWNvbnRyb2wuX3ByZXYnXHJcblx0XHRcdH0sXHJcblx0XHRcdHBhZ2luYXRpb246IHtcclxuXHRcdFx0XHRlbDogJy5sb2ljZW5jZXMtc2xpZGVyIC5zbGlkZXItcGFnaW5hdGlvbicsXHJcblx0XHRcdFx0YnVsbGV0Q2xhc3M6ICdzbGlkZXItYnVsbGV0JyxcclxuXHRcdFx0XHRidWxsZXRBY3RpdmVDbGFzczogJ3NsaWRlci1idWxsZXRfYWN0aXZlJyxcclxuXHRcdFx0XHR0eXBlOiAnYnVsbGV0cycsXHJcblx0XHRcdFx0Y2xpY2thYmxlOiB0cnVlLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRicmVha3BvaW50czoge1xyXG5cdFx0XHRcdDExOTk6IHtcclxuXHRcdFx0XHRcdHNsaWRlc1BlclZpZXc6IDMsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQ5OTE6IHtcclxuXHRcdFx0XHRcdHNsaWRlc1BlclZpZXc6IDIsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQ3Njc6IHtcclxuXHRcdFx0XHRcdHNsaWRlc1BlclZpZXc6IDIsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQ1NzU6IHtcclxuXHRcdFx0XHRcdHNsaWRlc1BlclZpZXc6IDEsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRrZXlib2FyZDoge1xyXG5cdFx0XHRcdGVuYWJsZWQ6IHRydWUsXHJcblx0XHRcdFx0b25seUluVmlld3BvcnQ6IHRydWVcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cdFxyXG5cdGxldCBuZXh0U2xpZGUgPSBmdW5jdGlvbihlKSB7XHJcblx0XHRsZXQgZG9tID0gZmluZEFuY2VzdG9yKGUudGFyZ2V0LCAnc2xpZGUnKVxyXG5cdFx0ZG9tLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXHJcblx0XHRcclxuXHRcdGlmIChkb20ubmV4dEVsZW1lbnRTaWJsaW5nKSB7XHJcblx0XHRcdGRvbS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGRvbS5wYXJlbnRFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1qcz1cIm5leHRTbGlkZVwiXScpKSB7XHJcblx0XHRsZXQgc2xpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtanM9XCJuZXh0U2xpZGVcIl0nKVxyXG5cdFx0XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRzbGlkZXNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXh0U2xpZGUpXHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3IC5tYWluX21lbnUtbW9iaWxlIC5uYXZiYXInKSkge1xyXG5cdFx0bGV0IG5hdmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXcgLm1haW5fbWVudS1tb2JpbGUgLm5hdmJhcicpXHJcblx0XHRsZXQgdG9ncyA9IG5hdmJhci5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd24tdG9nZ2xlJylcclxuXHRcdGxldCBzdXB0b2dzID0gbmF2YmFyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYgPiAuZHJvcGRvd24gPiAuZHJvcGRvd24tdG9nZ2xlJylcclxuXHRcdFxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0b2dzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHRvZ3NbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PiB7XHJcblx0XHRcdFx0aWYgKCFlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4nKSkge1xyXG5cdFx0XHRcdFx0bmF2YmFyLmNsYXNzTGlzdC5hZGQoJ3N1YicpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHN1cHRvZ3MubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0c3VwdG9nc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+IHtcclxuXHRcdFx0XHRpZiAoZmluZEFuY2VzdG9yKHN1cHRvZ3NbaV0sICdkcm9wZG93bicpLmNsYXNzTGlzdC5jb250YWlucygnb3BlbicpKSB7XHJcblx0XHRcdFx0XHRuYXZiYXIuY2xhc3NMaXN0LnJlbW92ZSgnc3ViJylcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGxldCBuYXZ0b2dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI25ldyAubWFpbl9tZW51LW1vYmlsZSAubmF2YmFyLXRvZ2dsZScpXHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG5hdnRvZ3MubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0bmF2dG9nc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+IHtcclxuXHRcdFx0XHRuYXZiYXIuY2xhc3NMaXN0LnJlbW92ZSgnc3ViJylcclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0JCgnLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duJykub24oJ2hpZGUuYnMuZHJvcGRvd24nLCAoZSk9PiB7XHJcblx0XHRmaW5kQW5jZXN0b3IoZS50YXJnZXQsICdkcm9wZG93bicpLmNsYXNzTGlzdC5hZGQoJ29wZW4nKVxyXG5cdH0pXHJcblx0XHJcbn0pXHJcbiJdfQ==
