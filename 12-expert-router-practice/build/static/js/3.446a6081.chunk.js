(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[3],{48:function(e,t,c){e.exports={comments:"Comments_comments__2JaI_"}},49:function(e,t,c){e.exports={form:"NewCommentForm_form__35HgC",loading:"NewCommentForm_loading__2A55G",control:"NewCommentForm_control__1bzd4",actions:"NewCommentForm_actions__3dKvA"}},50:function(e,t,c){e.exports={item:"CommentItem_item__2RhUR"}},51:function(e,t,c){e.exports={comments:"CommentsList_comments__2zNoA"}},52:function(e,t,c){e.exports={quote:"HighlightedQuote_quote__26T2r"}},54:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(2),o=c(8),a=c(21),m=c(48),r=c.n(m),i=c(19),j=c(20),d=c(49),u=c.n(d),l=c(14),b=c(0),x=function(e){var t=Object(n.useRef)(),c=Object(i.a)(j.a),s=c.sendRequest,o=c.status,a=c.error,m=e.onAddedComment;Object(n.useEffect)((function(){"completed"!==o||a||m()}),[o,m,a]);var r=function(c){c.preventDefault();var n=t.current.value;s({commentData:{text:n},quoteId:e.id})};return Object(b.jsxs)("form",{className:u.a.form,onSubmit:r,children:["pending"===o&&Object(b.jsx)(l.a,{}),Object(b.jsxs)("div",{className:u.a.control,onSubmit:r,children:[Object(b.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(b.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(b.jsx)("div",{className:u.a.actions,children:Object(b.jsx)("button",{className:"btn",children:"Add Comment"})})]})},O=c(50),h=c.n(O),f=function(e){return Object(b.jsx)("li",{className:h.a.item,children:Object(b.jsx)("p",{children:e.text})})},p=c(51),_=c.n(p),N=function(e){return Object(b.jsx)("ul",{className:_.a.comments,children:e.comments.map((function(e){return Object(b.jsx)(f,{text:e.text},e.id)}))})},C=function(){var e=Object(n.useState)(!1),t=Object(a.a)(e,2),c=t[0],o=t[1],m=Object(s.j)().id,d=Object(i.a)(j.c),u=d.sendRequest,O=d.status,h=d.data;Object(n.useEffect)((function(){u(m)}),[u,m]);var f,p=Object(n.useCallback)((function(){u(m)}),[u,m]);return"pennding"===O&&(f=Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(l.a,{})})),"completed"===O&&h&&(f=Object(b.jsx)(N,{comments:h})),"completed"!==O||h&&0!==h.length||(f=Object(b.jsx)("p",{className:"centered",children:"No Comments were added yet"})),Object(b.jsxs)("section",{className:r.a.comments,children:[Object(b.jsx)("h2",{children:"User Comments"}),!c&&Object(b.jsx)("button",{className:"btn",onClick:function(){o(!0)},children:"Add a Comment"}),c&&Object(b.jsx)(x,{id:m,onAddedComment:p}),f]})},v=c(52),g=c.n(v),q=function(e){return Object(b.jsxs)("figure",{className:g.a.quote,children:[Object(b.jsx)("p",{children:e.text}),Object(b.jsx)("figcaption",{children:e.author})]})},w=c(22);t.default=function(){var e=Object(s.k)(),t=Object(s.j)(),c=t.id,a=Object(i.a)(j.e,!0),m=a.sendRequest,r=a.status,d=a.data,u=a.error;return Object(n.useEffect)((function(){m(c)}),[m,c]),"pending"===r?Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(l.a,{})}):u?Object(b.jsx)("p",{className:"centered focused",children:u}):d.text?Object(b.jsxs)(n.Fragment,{children:[Object(b.jsx)(q,{text:d.text,author:d.author}),Object(b.jsx)(s.c,{path:"/quotes/".concat(t.id),exact:!0,children:Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(o.b,{className:"btn--flat",to:"".concat(e.url,"/comments"),children:"Load comments"})})}),Object(b.jsx)(s.c,{path:"".concat(e.path,"/comments"),children:Object(b.jsx)(C,{})})]}):Object(b.jsx)(w.a,{})}}}]);
//# sourceMappingURL=3.446a6081.chunk.js.map