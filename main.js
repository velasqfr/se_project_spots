!function(){"use strict";const e={formSelector:".modal__form",inputSelector:".modal__input",submitButtonSelector:".modal__submit-btn",inactiveButtonClass:"modal__submit-btn_disabled",inputErrorClass:"modal__input_type_error",errorClass:"modal__error"},t=(e,t,o)=>{const n=t.id+"-error";e.querySelector("#"+n).textContent="",t.classList.remove(o.inputErrorClass)},o=(e,t,o)=>{(e=>e.some((e=>!e.validity.valid)))(e)?n(t,o):(t.classList.remove(o.inactiveButtonClass),t.disabled=!1)},n=(e,t)=>{e.disabled=!0,e.classList.add(t.inactiveButtonClass)},r=[{name:"Val Thorens",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg"},{name:"Restaurant terrace",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg"},{name:"An outdoor cafe",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg"},{name:"A very long bridge, over the forest and through the trees",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg"},{name:"Tunnel with morning light",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg"},{name:"Mountain house",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg"}];console.log(r);const a=document.querySelector(".profile__edit-btn"),c=document.querySelector(".profile__add-btn"),l=document.querySelector(".profile__name"),s=document.querySelector(".profile__description"),i=document.querySelector("#edit-profile-modal"),d=i.querySelector(".modal__form"),u=i.querySelector(".modal__close-btn"),m=i.querySelector("#profile-name-input"),p=i.querySelector("#profile-description-input"),_=document.querySelector("#add-card-modal"),y=_.querySelector(".modal__form"),f=_.querySelector(".modal__submit-btn"),v=_.querySelector(".modal__close-btn"),S=_.querySelector("#add-card-name-input"),q=_.querySelector("#add-card-link-input"),g=document.querySelector("#preview-modal"),b=g.querySelector(".modal__image"),h=g.querySelector(".modal__caption"),w=g.querySelector(".modal__close-btn_type_preview"),k=document.querySelector("#card-template"),E=document.querySelector(".cards__list");function L(e){console.log(e);const t=k.content.querySelector(".card").cloneNode(!0),o=t.querySelector(".card__title"),n=t.querySelector(".card__image");n.src=e.link,n.alt=e.name,o.textContent=e.name;const r=t.querySelector(".card__like-btn");return r.addEventListener("click",(()=>{r.classList.toggle("card__like-button_liked")})),t.querySelector(".card__delete-btn").addEventListener("click",(()=>{t.remove()})),n.addEventListener("click",(()=>{C(g),b.src=e.link,b.alt=e.name,h.textContent=e.name})),t}function C(e){e.classList.add("modal_opened"),document.addEventListener("keydown",z),e.addEventListener("mousedown",j)}function x(e){e.classList.remove("modal_opened"),document.removeEventListener("keydown",z),e.removeEventListener("mousedown",j)}function z(e){"Escape"===e.key&&x(document.querySelector(".modal_opened"))}function j(e){e.target.classList.contains("modal")&&x(e.target)}var B;a.addEventListener("click",(()=>{var o,n;m.value=l.textContent,p.value=s.textContent,o=d,n=e,[m,p].forEach((e=>{t(o,e,n)})),C(i)})),u.addEventListener("click",(e=>{x(i)})),c.addEventListener("click",(()=>{C(_)})),v.addEventListener("click",(e=>{x(_)})),w.addEventListener("click",(()=>{x(g)})),d.addEventListener("submit",(function(e){e.preventDefault(),l.textContent=m.value,s.textContent=p.value,x(i)})),y.addEventListener("submit",(function(t){t.preventDefault();const o=L({name:S.value,link:q.value});E.prepend(o),x(_),t.target.reset(),disableButton(f,e)})),r.forEach((e=>{const t=L(e);E.append(t)})),B=e,console.log(B.formSelector),document.querySelectorAll(B.formSelector).forEach((e=>{((e,n)=>{const r=Array.from(e.querySelectorAll(n.inputSelector)),a=e.querySelector(n.submitButtonSelector);o(r,a,n),r.forEach((c=>{c.addEventListener("input",(function(){((e,o,n)=>{o.validity.valid?t(e,o,n):((e,t,o,n)=>{const r=t.id+"-error";e.querySelector("#"+r).textContent=o,console.log(r),t.classList.add(n.inputErrorClass)})(e,o,o.validationMessage,n)})(e,c,n),o(r,a,n)}))}))})(e,B)}))}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxFQUFXQyxFQUFlVCxFQUM5QyxHQUFFLEdBQ0YsRUFZQTRFLENBQWtCOUUsRUFBUUUsRUFBTyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vMC4xLjAvLi9zY3JpcHRzL3ZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vMC4xLjAvLi9zcmMvcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRGVjbGFyaW5nIGEgY29uZmlndXJhdGlvbiBvYmplY3QgdGhhdCBjb250YWlucyB0aGVcbi8vIG5lY2Vzc2FyeSBjbGFzc2VzIGFuZCBzZWxlY3RvcnMuXG5leHBvcnQgY29uc3Qgc2V0dGluZ3MgPSB7XG4gIGZvcm1TZWxlY3RvcjogXCIubW9kYWxfX2Zvcm1cIixcbiAgaW5wdXRTZWxlY3RvcjogXCIubW9kYWxfX2lucHV0XCIsXG4gIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiBcIi5tb2RhbF9fc3VibWl0LWJ0blwiLFxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiBcIm1vZGFsX19zdWJtaXQtYnRuX2Rpc2FibGVkXCIsXG4gIGlucHV0RXJyb3JDbGFzczogXCJtb2RhbF9faW5wdXRfdHlwZV9lcnJvclwiLFxuICBlcnJvckNsYXNzOiBcIm1vZGFsX19lcnJvclwiLFxufTtcblxuY29uc3Qgc2hvd0lucHV0RXJyb3IgPSAoZm9ybUVsLCBpbnB1dEVsZW1lbnQsIGVycm9yTWVzc2FnZSwgY29uZmlnKSA9PiB7XG4gIGNvbnN0IGVycm9yTWVzc2FnZUlEID0gaW5wdXRFbGVtZW50LmlkICsgXCItZXJyb3JcIjtcbiAgLy90aGlzIHdpbGwgYWxsb3cgdGhlIHJlZCBlcnJvciBtZXNzYWdlIHRvIGFwcGVhciB3aGVuIHRoZSBpbnB1dCB0ZXh0IGlzIE5PVCB2YWxpZFxuICBjb25zdCBlcnJvck1lc3NhZ2VFbCA9IGZvcm1FbC5xdWVyeVNlbGVjdG9yKFwiI1wiICsgZXJyb3JNZXNzYWdlSUQpO1xuICBlcnJvck1lc3NhZ2VFbC50ZXh0Q29udGVudCA9IGVycm9yTWVzc2FnZTtcbiAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlSUQpO1xuICAvL1dlIHdhbnQgdG8gY2FsbCB0aGUgY2xhc3Mgd2hlbiB3ZSdyZSBzaG93aW5nIGFuIGlucHV0IGVycm9yXG4gIC8vIChtb2RhbF9faW5wdXQgaXMgdGhlIGNsYXNzIHdlIHdhbnQgdG8gbW9kaWZ5KVxuICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LmFkZChjb25maWcuaW5wdXRFcnJvckNsYXNzKTtcbn07XG5cbi8vdGhpcyB3aWxsIG5vdyBoaWRlIHRoZSBlcnJvciBtZXNzYWdlIHdoZW4gdGhlIGlucHV0IHRleHQgSVMgdmFsaWRcbmNvbnN0IGhpZGVJbnB1dEVycm9yID0gKGZvcm1FbCwgaW5wdXRFbGVtZW50LCBjb25maWcpID0+IHtcbiAgY29uc3QgZXJyb3JNZXNzYWdlSUQgPSBpbnB1dEVsZW1lbnQuaWQgKyBcIi1lcnJvclwiO1xuICBjb25zdCBlcnJvck1lc3NhZ2VFbCA9IGZvcm1FbC5xdWVyeVNlbGVjdG9yKFwiI1wiICsgZXJyb3JNZXNzYWdlSUQpO1xuICBlcnJvck1lc3NhZ2VFbC50ZXh0Q29udGVudCA9IFwiXCI7XG4gIGlucHV0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNvbmZpZy5pbnB1dEVycm9yQ2xhc3MpO1xufTtcblxuY29uc3QgY2hlY2tJbnB1dFZhbGlkaXR5ID0gKGZvcm1FbCwgaW5wdXRFbGVtZW50LCBjb25maWcpID0+IHtcbiAgLy9JZiBpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQgaXMgdHJ1ZSB3ZSBjYWxsIHRoZSBoaWRlSW5wdXRFcnJvciBidXQsXG4gIC8vSWYgaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkIGlzIGZhbHNlIHdlIG5lZWQgdG8gYXBwbHkgc3R5bGVzIHRvIG1ha2Ugb3VyIGVycm9yIG1lc3NhZ2UgZGlzc2FwZWFyXG4gIGlmICghaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgc2hvd0lucHV0RXJyb3IoXG4gICAgICBmb3JtRWwsXG4gICAgICBpbnB1dEVsZW1lbnQsXG4gICAgICBpbnB1dEVsZW1lbnQudmFsaWRhdGlvbk1lc3NhZ2UsXG4gICAgICBjb25maWdcbiAgICApO1xuICAgIC8vSWYgdGhlIGFib3ZlIGlzIG5vdCB0cnVlIChpZiBpbnB1dCB0ZXh0IGlzIHZhbGlkKSwgdGhlbiB0aGUgc2hvdyBlcnJvciBtZXNzYWdlIGRpc3NhcGVhcnNcbiAgfSBlbHNlIHtcbiAgICBoaWRlSW5wdXRFcnJvcihmb3JtRWwsIGlucHV0RWxlbWVudCwgY29uZmlnKTtcbiAgfVxufTtcblxuY29uc3QgaGFzSW52YWxpZElucHV0ID0gKGlucHV0TGlzdCkgPT4ge1xuICAvL3RoaXMgZmlyc3QgYXJndWVtZW50IHdpbGwgcmVwcmVzZW50IGFuIGlucHV0IGZyb20gdGhlIGlucHV0bGlzdCBhbmQgaXRlcmF0ZSB0aHJvdWdoIGl0XG4gIC8vd2hlcmUgZWFjaCBvZiB0aGVtIHdpbGwgYmUgY2hlY2tlZFxuICByZXR1cm4gaW5wdXRMaXN0LnNvbWUoKGlucHV0KSA9PiB7XG4gICAgcmV0dXJuICFpbnB1dC52YWxpZGl0eS52YWxpZDtcbiAgfSk7XG59O1xuXG5jb25zdCB0b2dnbGVCdXR0b25TdGF0ZSA9IChpbnB1dExpc3QsIGJ1dHRvbkVsZW1lbnQsIGNvbmZpZykgPT4ge1xuICAvL3dlIG5lZWQgdG8gY2FsbCBoYXNJbnZhbGlkSW5wdXQgYW5kIGhhdmUgaXQgcGFzcyB0aGUgaW5wdXRMaXN0XG4gIC8vIHRvIHRlbGwgdXMgaWYgb25lIG9yIG1vcmUgb2YgdGhlc2UgaXMgaW52YWxpZFxuICAvL0lGIHRoZXJlIGlzIGFuIGludmFsaWQgZXJyb3IgbWVzc2FnZ2UsIDFzdCB3ZSBuZWVkIHRvIGRpc2FibGVkIHRoZSBidXR0b25cbiAgaWYgKGhhc0ludmFsaWRJbnB1dChpbnB1dExpc3QpKSB7XG4gICAgZGlzYWJsZUJ1dHRvbihidXR0b25FbGVtZW50LCBjb25maWcpO1xuICAgIC8vYWRkIGEgbW9kaWZpZXIgY2xhc3MgdG8gdGhlIGJ1dHRvbkVsZW1lbnQgdG8gbWFrZSBpdCBncmV5XG4gICAgLy9Eb24ndCBmb3JnZXQgdGhlIENTU1xuICB9IGVsc2Uge1xuICAgIGJ1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjb25maWcuaW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgYnV0dG9uRWxlbWVudC5kaXNhYmxlZCA9IGZhbHNlO1xuICB9XG59O1xuXG4vL3JlbW92ZSB0aGUgZGlzYWJsZWQgY2xhc3NcbmNvbnN0IGRpc2FibGVCdXR0b24gPSAoYnV0dG9uRWxlbWVudCwgY29uZmlnKSA9PiB7XG4gIGJ1dHRvbkVsZW1lbnQuZGlzYWJsZWQgPSB0cnVlO1xuICBidXR0b25FbGVtZW50LmNsYXNzTGlzdC5hZGQoY29uZmlnLmluYWN0aXZlQnV0dG9uQ2xhc3MpO1xufTtcblxuLy9FeHBvcnRpbmcgcmVzZXRWYWxpZGF0aW9uIGludG8gaW5kZXguanMgcGVyIHByb2plY3QgOVxuZXhwb3J0IGNvbnN0IHJlc2V0VmFsaWRhdGlvbiA9IChmb3JtRWwsIGlucHV0TGlzdCwgY29uZmlnKSA9PiB7XG4gIGlucHV0TGlzdC5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgIGhpZGVJbnB1dEVycm9yKGZvcm1FbCwgaW5wdXQsIGNvbmZpZyk7XG4gIH0pO1xufTtcblxuY29uc3Qgc2V0RXZlbnRMaXN0ZW5lcnMgPSAoZm9ybUVsLCBjb25maWcpID0+IHtcbiAgY29uc3QgaW5wdXRMaXN0ID0gQXJyYXkuZnJvbShmb3JtRWwucXVlcnlTZWxlY3RvckFsbChjb25maWcuaW5wdXRTZWxlY3RvcikpO1xuICBjb25zdCBidXR0b25FbGVtZW50ID0gZm9ybUVsLnF1ZXJ5U2VsZWN0b3IoY29uZmlnLnN1Ym1pdEJ1dHRvblNlbGVjdG9yKTtcblxuICAvLyBUT0RPIC0gSGFuZGxlIGluaXRpYWwgc3RhdGVzXG4gIHRvZ2dsZUJ1dHRvblN0YXRlKGlucHV0TGlzdCwgYnV0dG9uRWxlbWVudCwgY29uZmlnKTtcblxuICBpbnB1dExpc3QuZm9yRWFjaCgoaW5wdXRFbGVtZW50KSA9PiB7XG4gICAgaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBjaGVja0lucHV0VmFsaWRpdHkoZm9ybUVsLCBpbnB1dEVsZW1lbnQsIGNvbmZpZyk7XG4gICAgICB0b2dnbGVCdXR0b25TdGF0ZShpbnB1dExpc3QsIGJ1dHRvbkVsZW1lbnQsIGNvbmZpZyk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuLyogdGhpcyBmdW5jaW9uIGlzIGdvaW5nIHRvIHNlbGVjdCBhbGwgdGhlIGZvcm1zLGl0ZXJhdGUgdGhyb3VnaCB0aGUgZm9ybXMsICYgc2V0IHRoZSBuZWNlc3NhcnkgZXZlbnRMaXN0ZXJucyBpbiBlYWNoIG9uZSAqL1xuXG4vL1Byb2plY3QgOTogd2UgbmVlZCB0byBleHBvcnQgZW5hYmxldmFsaWRhdGlvbiBmdW5jdGlvbiBiZWNhdXNlIHdlIHJlbW92ZWQgdGhlIHZhbGlkYXRpb24gbGluZVxuLy9UaGVuIHdlIG5lZWQgdG8gY2FsbCBpdCBpbiBpbmRleC5qc1xuZXhwb3J0IGNvbnN0IGVuYWJsZVZhbGlkYXRpb24gPSAoY29uZmlnKSA9PiB7XG4gIGNvbnNvbGUubG9nKGNvbmZpZy5mb3JtU2VsZWN0b3IpO1xuICBjb25zdCBmb3JtTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY29uZmlnLmZvcm1TZWxlY3Rvcik7XG4gIGZvcm1MaXN0LmZvckVhY2goKGZvcm1FbCkgPT4ge1xuICAgIC8vdGhpcyBpcyBnb2luZyB0byBsb2cgdGhlIGZpcnN0IGZvcm0sIHRoZW4gdGhlIHNlY29uZCBmb3JtLlxuICAgIHNldEV2ZW50TGlzdGVuZXJzKGZvcm1FbCwgY29uZmlnKTtcbiAgfSk7XG59O1xuIiwiLy9XZSBhcmUgaW1wb3J0aW5nIG91ciBpbmRlYy5jc3MgZmlsZSBpbnRvIEpTIGZpbGVcbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5cbi8vSW1wb3J0aW5nIGltYWdlc1xuaW1wb3J0IGxvZ28gZnJvbSBcIi4uL2ltYWdlcy9sb2dvLnN2Z1wiO1xuXG4vL1Byb2plY3QgOTogSW1wb3J0aW5nIHRoZSBlbmFibGVWYWxpZGF0aW9uIGZyb20gdmFsaWRhdGlvbi5qc1xuLy9XZSB3aWxsIHRoZW4gY2FsbCBpdCBhdCB0aGUgZW5kIGluIHRoZSBib3R0b21cbmltcG9ydCB7XG4gIGVuYWJsZVZhbGlkYXRpb24sXG4gIHNldHRpbmdzLFxuICByZXNldFZhbGlkYXRpb24sXG59IGZyb20gXCIuLi8uLi9zY3JpcHRzL3ZhbGlkYXRpb24uanNcIjtcblxuLyogaXQncyBhbiBhcnJheSBzbyB3ZSBuZWVkIHRvIHVzZSBicmFja2V0cyAqL1xuLyogV2UgbmVlZCBhdCBsZWFzdCA2IHByb3Blb2JqZWN0c3J0aWVzIGFuZCAgdGhlc2Ugb2JqZWN0cyBuZWVkIHByb3BlcnRpZXMgb2YgbmFtZSBhbmQgbGluayAqL1xuY29uc3QgaW5pdGlhbENhcmRzID0gW1xuICB7XG4gICAgbmFtZTogXCJWYWwgVGhvcmVuc1wiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9zcG90cy8xLXBob3RvLWJ5LW1vcml0ei1mZWxkbWFubi1mcm9tLXBleGVscy5qcGdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiUmVzdGF1cmFudCB0ZXJyYWNlXCIsXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3NvZnR3YXJlLWVuZ2luZWVyL3Nwb3RzLzItcGhvdG8tYnktY2VpbGluZS1mcm9tLXBleGVscy5qcGdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQW4gb3V0ZG9vciBjYWZlXCIsXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3NvZnR3YXJlLWVuZ2luZWVyL3Nwb3RzLzMtcGhvdG8tYnktdHViYW51ci1kb2dhbi1mcm9tLXBleGVscy5qcGdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQSB2ZXJ5IGxvbmcgYnJpZGdlLCBvdmVyIHRoZSBmb3Jlc3QgYW5kIHRocm91Z2ggdGhlIHRyZWVzXCIsXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3NvZnR3YXJlLWVuZ2luZWVyL3Nwb3RzLzQtcGhvdG8tYnktbWF1cmljZS1sYXNjaGV0LWZyb20tcGV4ZWxzLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJUdW5uZWwgd2l0aCBtb3JuaW5nIGxpZ2h0XCIsXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3NvZnR3YXJlLWVuZ2luZWVyL3Nwb3RzLzUtcGhvdG8tYnktdmFuLWFuaC1uZ3V5ZW4tZnJvbS1wZXhlbHMuanBnXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIk1vdW50YWluIGhvdXNlXCIsXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3NvZnR3YXJlLWVuZ2luZWVyL3Nwb3RzLzYtcGhvdG8tYnktbW9yaXR6LWZlbGRtYW5uLWZyb20tcGV4ZWxzLmpwZ1wiLFxuICB9LFxuXTtcblxuY29uc29sZS5sb2coaW5pdGlhbENhcmRzKTtcblxuLyogVGhpcyBpcyB0aGUgY2xhc3MgeW91IHdhbnQgdG8gdXNlIHRvIGhhdmUgdGhlIGVkaXQgcHJvZmlsZSBidXR0b24gcmVzcG9uZCAqL1xuY29uc3QgcHJvZmlsZUVkaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2VkaXQtYnRuXCIpO1xuY29uc3QgY2FyZE1vZGFsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19hZGQtYnRuXCIpO1xuXG4vKkZpcnN0IHN0ZXAgdG8gcHV0IG5hbWUgaW4gZm9ybSBib3gqL1xuY29uc3QgcHJvZmlsZU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX25hbWVcIik7XG4vKkZpcnN0IHN0ZXAgdG8gcHV0IGRlc2NyaXB0aW9uIGluIGZvcm0gYm94Ki9cbmNvbnN0IHByb2ZpbGVEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fZGVzY3JpcHRpb25cIik7XG5cbmNvbnN0IGVkaXRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC1wcm9maWxlLW1vZGFsXCIpO1xuXG5jb25zdCBlZGl0Rm9ybUVsZW1lbnQgPSBlZGl0TW9kYWwucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fZm9ybVwiKTtcblxuY29uc3QgZWRpdE1vZGFsQ2xvc2VCdG4gPSBlZGl0TW9kYWwucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fY2xvc2UtYnRuXCIpO1xuLyoybmQgc3RlcCB0byBwdXQgbmFtZSBpbiBmb3JtIGJveCovXG5jb25zdCBlZGl0TW9kYWxOYW1lSW5wdXQgPSBlZGl0TW9kYWwucXVlcnlTZWxlY3RvcihcIiNwcm9maWxlLW5hbWUtaW5wdXRcIik7XG4vKjJuZCBzdGVwIHRvIHB1dCBkZXNjcmlwdGlvbiBpbiBmb3JtIGJveCovXG5jb25zdCBlZGl0TW9kYWxEZXNjcmlwdGlvbklucHV0ID0gZWRpdE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXG4gIFwiI3Byb2ZpbGUtZGVzY3JpcHRpb24taW5wdXRcIlxuKTtcblxuY29uc3QgY2FyZE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtY2FyZC1tb2RhbFwiKTtcbmNvbnN0IGNhcmRGb3JtID0gY2FyZE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Zvcm1cIik7IC8vc3RlcCBpbiBzZWxlY3RpbmcgdGhlIGZvcm0gKGZpcnN0IHBhcnQgdG8gVGFzayAzLzcuIEFkZGluZyBhIGNhcmQpXG5jb25zdCBjYXJkU3VibWl0QnRuID0gY2FyZE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX3N1Ym1pdC1idG5cIik7XG5jb25zdCBjYXJkTW9kYWxDbG9zZUJ0biA9IGNhcmRNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19jbG9zZS1idG5cIik7XG5jb25zdCBjYXJkTmFtZUlucHV0ID0gY2FyZE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLWNhcmQtbmFtZS1pbnB1dFwiKTtcbmNvbnN0IGNhcmRMaW5rSW5wdXQgPSBjYXJkTW9kYWwucXVlcnlTZWxlY3RvcihcIiNhZGQtY2FyZC1saW5rLWlucHV0XCIpO1xuXG4vL1NFTEVDVElORyBUSEUgTU9EQUwgLSB0aGlzIHdpbGwgYWxsb3cgeW91IG9wZW4gdGhlIGNhcmRcbmNvbnN0IHByZXZpZXdNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJldmlldy1tb2RhbFwiKTtcbmNvbnN0IHByZXZpZXdNb2RhbEltYWdlRWwgPSBwcmV2aWV3TW9kYWwucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9faW1hZ2VcIik7XG5jb25zdCBwcmV2aWV3TW9kYWxDYXB0aW9uRWwgPSBwcmV2aWV3TW9kYWwucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fY2FwdGlvblwiKTtcbi8vQ2xvc2luZyBvdXQgdGhlIGNhcmQgaW1hZ2UgYnkgY2xpY2tpbmcgeFxuY29uc3QgcHJldmlld01vZGFsRGVsZXRlQnRuID0gcHJldmlld01vZGFsLnF1ZXJ5U2VsZWN0b3IoXG4gIFwiLm1vZGFsX19jbG9zZS1idG5fdHlwZV9wcmV2aWV3XCJcbik7XG5cbi8qREVBTElORyBXSVRIIENBUkRTKi9cbmNvbnN0IGNhcmRUZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FyZC10ZW1wbGF0ZVwiKTtcbmNvbnN0IGNhcmRzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZHNfX2xpc3RcIik7XG5cbi8qV2UgbmVlZCB0byBjbG9uZSB0aGUgY2FyZCB0ZW1wbGF0ZSwgZ3JhYiB0aGUgZWxlbWVudCBmcm9tIGluc2lkZSBpdCwgYW5kIHRoZW4gaW5zZXJ0IHRoZSBuZWNlc2FyeSBkYXRlIChzcmMsIGFsdCkqL1xuLypJZiBpdCdzIGdvaW5nIHRvIG5lZWQgdG8gaW5zZXJ0IHRoYXQgc3R1ZmYsIGl0J3MgZ29pbmcgdG8gbmVlZCB0byByZWNpZXZlIHRoYXQgYXMgYW4gYXJndWVtZW50KGxhYmVsZWQgXCJkYXRhXCIgYmVsb3cpKi9cblxuLy9FWEVSQ0lTRTogQXNzaWduIHZhbHVlcyB0byB0aGUgaW1hZ2Ugc3JjIGFuZCBhbHRcbmZ1bmN0aW9uIGdldENhcmRFbGVtZW50KGRhdGEpIHtcbiAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgLypDbG9uZSB0aGUgY2FyZCB0ZW1wbGF0ZSAqL1xuICBjb25zdCBjYXJkRWxlbWVudCA9IGNhcmRUZW1wbGF0ZS5jb250ZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZFwiKVxuICAgIC5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgLyogU2VsZWN0IHRoZSBjYXJkIHRpdGxlIGVsZW1lbnQgKi9cbiAgY29uc3QgY2FyZE5hbWVFbCA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fdGl0bGVcIik7XG5cbiAgLyogU2VsZWN0IHRoZSBpbWFnZSBlbGVtZW50ICovXG4gIGNvbnN0IGNhcmRJbWFnZUVsID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX19pbWFnZVwiKTtcblxuICAvKiBBc3NpZ24gdmFsdWVzIHRvIHRoZSBpbWFnZSBzcmMgYW5kIGFsdCBhdHRyaWJ1dGVzICovXG4gIGNhcmRJbWFnZUVsLnNyYyA9IGRhdGEubGluazsgLy8gU2V0IHRoZSBpbWFnZSBzb3VyY2VcbiAgY2FyZEltYWdlRWwuYWx0ID0gZGF0YS5uYW1lOyAvLyBTZXQgdGhlIGFsdCB0ZXh0IGZvciBhY2Nlc3NpYmlsaXR5XG5cbiAgLypBc3NpZ24gdGV4dCBjb250ZW50IHRvIHRoZSBjYXJkIHRpdGxlICovXG4gIGNhcmROYW1lRWwudGV4dENvbnRlbnQgPSBkYXRhLm5hbWU7XG5cbiAgLy8gQkFTSUMgU1RFUFMgVE8gU0VUIEFOIEVWRU5UTElTVEVORVIgT04gU09NRVRISU5HOlxuICAvLyBTdGVwIDE6IHNlbGVjdCB0aGUgZWxlbWVudFxuICBjb25zdCBjYXJkTGlrZUJ0biA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fbGlrZS1idG5cIik7XG5cbiAgLy8gU3RlcCAyOiBhZGQgdGhlIGV2ZW50TGlzdGVuZXIgJiBTdGVwIDM6IHdyaXRlIGNvZGUgdGhhdCBoYW5mbGVzIHRoZSBldmVudFxuICBjYXJkTGlrZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNhcmRMaWtlQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJjYXJkX19saWtlLWJ1dHRvbl9saWtlZFwiKTsgLy9ubyBuZWVkIGZvciBhIFwiXCIuXCJiZWZvcmUgYXJkX19saWtlLWJ1dHRvbl9saWtlZCBiZWNhdXNlIGNsYXNzTGlzdCBhc3N1bWVzIHlvdSBhcmUgdGFsa2luZyBhYm91dCBhIGNsYXNzXG4gIH0pO1xuXG4gIC8vVE9ETzogU2VsZWN0IHRoZSBkZWxldGUgYnV0dG9uXG4gIC8vVE9ETyAtIHNldCB0aGUgbGlzdGVuZXIgb24gZGVsZXRlIGJ1dHRvblxuICAvL1RPRE8gLSBUaGUgaGFuZGxlciBzaG91bGQgcmVtb3ZlIHRoZSBjYXJkIGZyb20gdGhlIERPTVxuICBjb25zdCBjYXJkRGVsZXRlQnRuID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX19kZWxldGUtYnRuXCIpO1xuXG4gIGNhcmREZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjYXJkRWxlbWVudC5yZW1vdmUoKTtcbiAgfSk7XG5cbiAgLy9QT1AgT1BFTiBUSEUgQ0FSRCBJTUFHRSAoZWxlbWVudCB3YXMgYWxyZWFkeSBzZWxlY3RlZCBlYXJsaWVyKSBzbyB3ZSBhcmUgc2V0dGluZyB0aGUgbGlzdGVuZXIgbm93OlxuICBjYXJkSW1hZ2VFbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG9wZW5Nb2RhbChwcmV2aWV3TW9kYWwpO1xuICAgIHByZXZpZXdNb2RhbEltYWdlRWwuc3JjID0gZGF0YS5saW5rO1xuICAgIHByZXZpZXdNb2RhbEltYWdlRWwuYWx0ID0gZGF0YS5uYW1lO1xuXG4gICAgcHJldmlld01vZGFsQ2FwdGlvbkVsLnRleHRDb250ZW50ID0gZGF0YS5uYW1lO1xuICB9KTtcblxuICByZXR1cm4gY2FyZEVsZW1lbnQ7XG59XG5cbi8qdGhpcyB3aWxsIHBvcCBvcGVuIHRoZSBlZGl0IHByb2ZpbGUgY29udGFpbmVyIHdoZW4gY2xpY2sgdGhlIGJ1dHRvbiAqL1xuZnVuY3Rpb24gb3Blbk1vZGFsKG1vZGFsKSB7XG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbF9vcGVuZWRcIik7XG4gIC8vIGFkZGVkIGluIHByb2plY3QgNlxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVFc2NhcGVDbG9zZSk7XG4gIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlT3ZlckxheUNsb3NlKTtcbn1cblxuLyp0aGlzIHdpbGwgY2xvc2UgdGhlIHByb2ZpbGUgY29udGF0aW5lciB3aGVuIGNsaWNraW5nIHRoZSB4Ki9cbmZ1bmN0aW9uIGNsb3NlTW9kYWwobW9kYWwpIHtcbiAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsX29wZW5lZFwiKTtcbiAgLy8gYWRkZWQgaW4gcHJvamVjdCA2XG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUVzY2FwZUNsb3NlKTtcbiAgbW9kYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVPdmVyTGF5Q2xvc2UpO1xufVxuXG4vKiBXZSBuZWVkIHRvIHdyaXRlIGEgZnVuY3Rpb24gZm90IHRoZSBldmVudExpc3RlbmVyIG9uIHRoZSBoYW5kbGVFZGRpdEZvcm1TdWJtaXQgdG8gYWxsb3cgdGhlIHN1Ym1pdCBiZWhhdmlvciB0byB3b3JrKi9cbi8qIEFueXRpbWUgeW91IHBhc3MgYSBmdW5jdGlvbiB0byB0aGUgZXZlbkxpc3RlbmVyLCB0aGUgZXZlbiBvYmplY3QgaXMgcGFzc2VkIGFzIHRoZSBmaXJzdCBhcmd1ZW1lbnQqL1xuZnVuY3Rpb24gaGFuZGxlRWRpdEZvcm1TdWJtaXQoZXZ0KSB7XG4gIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAvKmVhcmxpZXIgd2Ugc2V0IHRoZSB2YWx1ZSB0byB0aGUgdGV4dCBjb250ZW50LCBub3cgd2UncmUgYXNzaWduaW5nIHRleHQuY29udGVudCB0byB0aGUgdmFsdWUqL1xuICBwcm9maWxlTmFtZS50ZXh0Q29udGVudCA9IGVkaXRNb2RhbE5hbWVJbnB1dC52YWx1ZTtcbiAgLypub3cgdGhhdCB3ZSBkaWQgaXQgZ290IHByb2ZpbGVOYW1lLCBsZXQncyBkbyBpdCBmb3IgcHJvZmlsZURlc2NyaXB0aW9uKi9cbiAgcHJvZmlsZURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZWRpdE1vZGFsRGVzY3JpcHRpb25JbnB1dC52YWx1ZTtcbiAgLypUaGlzIGNvZGUgYWxsb3dzIHRoZSBlZGl0UHJvZmlsZUNvbnRhdGluZXIgdG8gY2xvc2Ugb25jZSBjbGlja2luZyBzdWJtaXQqL1xuICBjbG9zZU1vZGFsKGVkaXRNb2RhbCk7XG59XG5cbi8vIGFkZGVkIGluIHByb2plY3QgNjogVG8gY2xvc2Ugd2l0aCBFc2Mga2V5XG5mdW5jdGlvbiBoYW5kbGVFc2NhcGVDbG9zZShldnQpIHtcbiAgaWYgKGV2dC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfb3BlbmVkXCIpO1xuICAgIGNsb3NlTW9kYWwobW9kYWwpO1xuICB9XG59XG4vLyBhZGRlZCBpbiBwcm9qZWN0IDY6IHRvIGNsb3NlIG91dHNpZGUgb2YgZm9ybSB3aXRoIGNsaWNrXG5mdW5jdGlvbiBoYW5kbGVPdmVyTGF5Q2xvc2UoZXZ0KSB7XG4gIGlmIChldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm1vZGFsXCIpKSB7XG4gICAgY2xvc2VNb2RhbChldnQudGFyZ2V0KTtcbiAgfVxufVxuXG4vL1N0ZXAgMyBpbiBjcmVhdGluZyB0aGUgZnVuY3Rpb24gZm9yIHRoIGVoYW5kbGVyIGluIFRhc2sgMy83LiBBZGRpbmcgYSBjYXJkXG4vL2V2dCBpcyBhZGRlZCB0byBoZWxwIHByZXZlbnQgdGhlIGRlZmF1bHQgYnJvd3NpbmcgYmVoYXZpb3IgbGlrZSB0aGUgZnVuY3RvbiBhYm92ZVxuZnVuY3Rpb24gaGFuZGxlQWRkQ2FyZFN1Ym1pdChldnQpIHtcbiAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgY29uc3QgaW5wdXRWYWx1ZXMgPSB7IG5hbWU6IGNhcmROYW1lSW5wdXQudmFsdWUsIGxpbms6IGNhcmRMaW5rSW5wdXQudmFsdWUgfTtcbiAgY29uc3QgY2FyZEVsZW1lbnQgPSBnZXRDYXJkRWxlbWVudChpbnB1dFZhbHVlcyk7XG4gIGNhcmRzTGlzdC5wcmVwZW5kKGNhcmRFbGVtZW50KTtcbiAgY2xvc2VNb2RhbChjYXJkTW9kYWwpO1xuICBldnQudGFyZ2V0LnJlc2V0KCk7XG4gIGRpc2FibGVCdXR0b24oY2FyZFN1Ym1pdEJ0biwgc2V0dGluZ3MpO1xufVxuXG4vKmZ1bmN0aW9uIHdpbGwgZGVzY3JpYmUgd2hhdCBoYXBwZW5zIHdoZW4gdGhlIGJ1dHRvbiBpcyBjbGlja2VkICovXG5wcm9maWxlRWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAvKkxhc3Qgc3RlcCB0byBwdXQgbmFtZSBpbiBmb3JtIGJveCovXG4gIGVkaXRNb2RhbE5hbWVJbnB1dC52YWx1ZSA9XG4gICAgcHJvZmlsZU5hbWUudGV4dENvbnRlbnQ7IC8qYXNzaWduaW5nIHRoZSB2YWx1ZSB0byB0aGUgdGV4dCBjb250ZW50Ki9cblxuICAvKkxhc3Qgc3RlcCB0byBwdXQgZGVzY3JpcHRpb24gaW4gZm9ybSBib3gqL1xuICBlZGl0TW9kYWxEZXNjcmlwdGlvbklucHV0LnZhbHVlID0gcHJvZmlsZURlc2NyaXB0aW9uLnRleHRDb250ZW50O1xuICByZXNldFZhbGlkYXRpb24oXG4gICAgZWRpdEZvcm1FbGVtZW50LFxuICAgIFtlZGl0TW9kYWxOYW1lSW5wdXQsIGVkaXRNb2RhbERlc2NyaXB0aW9uSW5wdXRdLFxuICAgIHNldHRpbmdzXG4gICk7XG4gIG9wZW5Nb2RhbChlZGl0TW9kYWwpO1xufSk7XG5cbmVkaXRNb2RhbENsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZ0KSA9PiB7XG4gIGNsb3NlTW9kYWwoZWRpdE1vZGFsKTtcbn0pO1xuXG4vL1Rhc2sgMi83LiBGb3JtIGZvciBhZGRpbmcgYSBjYXJkXG5cbmNhcmRNb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBvcGVuTW9kYWwoY2FyZE1vZGFsKTtcbn0pO1xuXG5jYXJkTW9kYWxDbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4ge1xuICBjbG9zZU1vZGFsKGNhcmRNb2RhbCk7XG59KTtcblxuLy9DbG9zaW5nIHRoZSBpbWFnZSBjYXJkIHdoZW4gb3BlbmVkIGJ5IGNsaWNrIG9uIHhcbnByZXZpZXdNb2RhbERlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjbG9zZU1vZGFsKHByZXZpZXdNb2RhbCk7XG59KTtcblxuLy9UYXNrIDMvNy4gQWRkaW5nIGEgY2FyZFxuXG5lZGl0Rm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVFZGl0Rm9ybVN1Ym1pdCk7XG5jYXJkRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZUFkZENhcmRTdWJtaXQpOyAvLygybmQgc3RlcCAtIHNldHRpbmcgdGhlIGxpc3RlbmVyIHRvIHRoZSBjYXJkRm9ybSlcblxuLypXaGF0IHRoaXMgc2F5czogYXMgbG9uZyBhcyBcImkgPCBpbml0aWFsQ2FyZHMubGVuZ3RoXCIgeW91IGtlZXAgaXRlcmF0aW5nKi9cbi8qIFwiaSsrXCIgYWZ0ZXIgZWFjaCBpdGVyYXRpb24sIGluY3JlbWVudCBpIGJ5IDEgKGFkZCBieSAxKSAqL1xuXG4vKiBTUFJJTlQgNTogKi9cblxuLypGaXJzdCB3ZSB3aWxsIGNhbGwgdGhlIG1ldGhvZCAmIHN0YXJ0IHdpdGggdGhlIG5hbWUgb2YgdGhlIGFycmF5IHdlIHdhbnQgdG8gbG9vcCAoaW5pdGFsQ2FyZHMpXG5UaGUgdGhlIGZvciBsb29wIGFjY2VwdHMgYW4gYXJndWVtZW50IHRoYXQgbmVlZHMgdG8gYmUgYSBmdW5jdGlvbiBvciBhcnJvdyBmdW5jdGlvbiBsaWtlIHVzZWRcblRoZSBmaXJzdCBpdGVtIGFyZ3VlbWVudCB0aGlzIGFycm93IGZ1bmN0aW9uIGFjY2VwdHMgd2lsbCBiZSBpdGVtIG9mIG9uZSBvZiB0aGUgY2FyZHMgc3RvcmVkIGluIHRoZSBhcnJheSAoaW5pdGFsQ2FyZHMpKi9cbmluaXRpYWxDYXJkcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gIGNvbnN0IGNhcmRFbGVtZW50ID0gZ2V0Q2FyZEVsZW1lbnQoaXRlbSk7IC8vSGVyZSB5b3UgYXJlIGdldHRpbmcgdGhlIGNhcmQgZWxlbWVudFxuICBjYXJkc0xpc3QuYXBwZW5kKGNhcmRFbGVtZW50KTsgLy9IZXJlIHlvdSBhcmUgYXBwZW5kaW5nIGl0IHRvIHRoZSBET01cbn0pO1xuXG4vL0NhbGluZyBlbmFibGVWYWxpZGF0aW9uXG5lbmFibGVWYWxpZGF0aW9uKHNldHRpbmdzKTtcbiJdLCJuYW1lcyI6WyJzZXR0aW5ncyIsImZvcm1TZWxlY3RvciIsImlucHV0U2VsZWN0b3IiLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsImluYWN0aXZlQnV0dG9uQ2xhc3MiLCJpbnB1dEVycm9yQ2xhc3MiLCJlcnJvckNsYXNzIiwiaGlkZUlucHV0RXJyb3IiLCJmb3JtRWwiLCJpbnB1dEVsZW1lbnQiLCJjb25maWciLCJlcnJvck1lc3NhZ2VJRCIsImlkIiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwidG9nZ2xlQnV0dG9uU3RhdGUiLCJpbnB1dExpc3QiLCJidXR0b25FbGVtZW50Iiwic29tZSIsImlucHV0IiwidmFsaWRpdHkiLCJ2YWxpZCIsImhhc0ludmFsaWRJbnB1dCIsImRpc2FibGVCdXR0b24iLCJkaXNhYmxlZCIsImFkZCIsImluaXRpYWxDYXJkcyIsIm5hbWUiLCJsaW5rIiwiY29uc29sZSIsImxvZyIsInByb2ZpbGVFZGl0QnV0dG9uIiwiZG9jdW1lbnQiLCJjYXJkTW9kYWxCdG4iLCJwcm9maWxlTmFtZSIsInByb2ZpbGVEZXNjcmlwdGlvbiIsImVkaXRNb2RhbCIsImVkaXRGb3JtRWxlbWVudCIsImVkaXRNb2RhbENsb3NlQnRuIiwiZWRpdE1vZGFsTmFtZUlucHV0IiwiZWRpdE1vZGFsRGVzY3JpcHRpb25JbnB1dCIsImNhcmRNb2RhbCIsImNhcmRGb3JtIiwiY2FyZFN1Ym1pdEJ0biIsImNhcmRNb2RhbENsb3NlQnRuIiwiY2FyZE5hbWVJbnB1dCIsImNhcmRMaW5rSW5wdXQiLCJwcmV2aWV3TW9kYWwiLCJwcmV2aWV3TW9kYWxJbWFnZUVsIiwicHJldmlld01vZGFsQ2FwdGlvbkVsIiwicHJldmlld01vZGFsRGVsZXRlQnRuIiwiY2FyZFRlbXBsYXRlIiwiY2FyZHNMaXN0IiwiZ2V0Q2FyZEVsZW1lbnQiLCJkYXRhIiwiY2FyZEVsZW1lbnQiLCJjb250ZW50IiwiY2xvbmVOb2RlIiwiY2FyZE5hbWVFbCIsImNhcmRJbWFnZUVsIiwic3JjIiwiYWx0IiwiY2FyZExpa2VCdG4iLCJhZGRFdmVudExpc3RlbmVyIiwidG9nZ2xlIiwib3Blbk1vZGFsIiwibW9kYWwiLCJoYW5kbGVFc2NhcGVDbG9zZSIsImhhbmRsZU92ZXJMYXlDbG9zZSIsImNsb3NlTW9kYWwiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZXZ0Iiwia2V5IiwidGFyZ2V0IiwiY29udGFpbnMiLCJyZXNldFZhbGlkYXRpb24iLCJ2YWx1ZSIsImZvckVhY2giLCJwcmV2ZW50RGVmYXVsdCIsInByZXBlbmQiLCJyZXNldCIsIml0ZW0iLCJhcHBlbmQiLCJxdWVyeVNlbGVjdG9yQWxsIiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJBcnJheSIsImZyb20iLCJjaGVja0lucHV0VmFsaWRpdHkiLCJzaG93SW5wdXRFcnJvciIsImVycm9yTWVzc2FnZSIsInZhbGlkYXRpb25NZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==