/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./dirname.cjs":
/*!******************************************!*\
  !*** external "./src/utils/dirname.cjs" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("./src/utils/dirname.cjs");

/***/ }),

/***/ "fontkit":
/*!**************************!*\
  !*** external "fontkit" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("fontkit");

/***/ }),

/***/ "image-size":
/*!*****************************!*\
  !*** external "image-size" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("image-size");

/***/ }),

/***/ "sax":
/*!**********************!*\
  !*** external "sax" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("sax");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setFontDir": () => (/* binding */ setFontDir),
/* harmony export */   "setFontFamilyMappings": () => (/* binding */ setFontFamilyMappings),
/* harmony export */   "preloadFonts": () => (/* binding */ preloadFonts),
/* harmony export */   "getConfig": () => (/* binding */ getConfig),
/* harmony export */   "getFonts": () => (/* binding */ getFonts),
/* harmony export */   "config": () => (/* binding */ config)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var fontkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fontkit */ "fontkit");



const _config = {}
const fonts = {}

const setFontDir = function (dir) {
  _config.fontDir = dir
  return this
}

const setFontFamilyMappings = function (map) {
  _config.fontFamilyMappings = map
  return this
}

// TODO: make async
const preloadFonts = () => {
  var map = _config.fontFamilyMappings

  for (const [ font, file ] of Object.entries(map)) {
    const filename = path__WEBPACK_IMPORTED_MODULE_0__.join(_config.fontDir, file)

    try {
      fonts[font] = fontkit__WEBPACK_IMPORTED_MODULE_1__.openSync(filename)
    } catch (e) {
      console.warn(`Could not load font file for ${font}`, e)
    }
  }
  return undefined
}

const getConfig = () => _config
const getFonts = () => fonts

const config = {
  setFontDir,
  setFontFamilyMappings,
  preloadFonts,
  getConfig,
  getFonts
}


/***/ }),

/***/ "./src/dom/Attr.js":
/*!*************************!*\
  !*** ./src/dom/Attr.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Attr": () => (/* binding */ Attr)
/* harmony export */ });
/* harmony import */ var _Node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Node.js */ "./src/dom/Node.js");
/* harmony import */ var _utils_namespaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/namespaces.js */ "./src/utils/namespaces.js");



class Attr extends _Node_js__WEBPACK_IMPORTED_MODULE_0__.Node {
  constructor (name, props, ns) {
    super(name, { nodeValue: '', ...props }, ns)

    // Follow spec and lowercase nodeName for html
    this.nodeName = ns === _utils_namespaces_js__WEBPACK_IMPORTED_MODULE_1__.html ? name.toLowerCase() : name
    this.nodeType = _Node_js__WEBPACK_IMPORTED_MODULE_0__.Node.ATTRIBUTE_NODE
    this.ownerElement = null
  }

  get value () {
    return this.nodeValue
  }

  set value (val) {
    this.nodeValue = val
  }

  get name () {
    return this.nodeName
  }
}


/***/ }),

/***/ "./src/dom/CharacterData.js":
/*!**********************************!*\
  !*** ./src/dom/CharacterData.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CharacterData": () => (/* binding */ CharacterData)
/* harmony export */ });
/* harmony import */ var _Node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Node.js */ "./src/dom/Node.js");
/* harmony import */ var _utils_objectCreationUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/objectCreationUtils.js */ "./src/utils/objectCreationUtils.js");
/* harmony import */ var _mixins_NonDocumentTypeChildNode_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mixins/NonDocumentTypeChildNode.js */ "./src/dom/mixins/NonDocumentTypeChildNode.js");
/* harmony import */ var _mixins_ChildNode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mixins/ChildNode.js */ "./src/dom/mixins/ChildNode.js");





class CharacterData extends _Node_js__WEBPACK_IMPORTED_MODULE_0__.Node {
  constructor (name, props) {
    super(name, props)

    this.data = this.nodeValue
  }

  appendData (data) {
    this.data += data
  }

  deleteData (offset, count) {
    this.data = this.data.slice(0, offset) + this.data.slice(0, offset + count)
  }

  insertData (offset, data) {
    this.data = this.data.slice(0, offset) + data + this.data.slice(offset)
  }

  replaceData (offset, count, data) {
    this.deleteData(offset, count)
    this.insertData(offset, data)
  }

  substringData (offset, count) {
    this.data = this.data.substr(offset, count)
  }

  get length () {
    return this.data.length
  }
}

(0,_utils_objectCreationUtils_js__WEBPACK_IMPORTED_MODULE_1__.mixin)(_mixins_NonDocumentTypeChildNode_js__WEBPACK_IMPORTED_MODULE_2__.NonDocumentTypeChildNode, CharacterData)
;(0,_utils_objectCreationUtils_js__WEBPACK_IMPORTED_MODULE_1__.mixin)(_mixins_ChildNode_js__WEBPACK_IMPORTED_MODULE_3__.ChildNode, CharacterData)


/***/ }),

/***/ "./src/dom/Comment.js":
/*!****************************!*\
  !*** ./src/dom/Comment.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Comment": () => (/* binding */ Comment)
/* harmony export */ });
/* harmony import */ var _CharacterData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CharacterData.js */ "./src/dom/CharacterData.js");
/* harmony import */ var _Node_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Node.js */ "./src/dom/Node.js");


class Comment extends _CharacterData_js__WEBPACK_IMPORTED_MODULE_0__.CharacterData {
  constructor (name, props) {
    super(name, props)
    this.nodeType = _Node_js__WEBPACK_IMPORTED_MODULE_1__.Node.COMMENT_NODE
  }
}


/***/ }),

/***/ "./src/dom/CustomEvent.js":
/*!********************************!*\
  !*** ./src/dom/CustomEvent.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomEvent": () => (/* binding */ CustomEvent)
/* harmony export */ });
/* harmony import */ var _Event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Event.js */ "./src/dom/Event.js");

class CustomEvent extends _Event_js__WEBPACK_IMPORTED_MODULE_0__.Event {
  constructor (name, props = {}) {
    super(name)
    this.detail = props.detail || null
    this.cancelable = props.cancelable || false
  }
}


/***/ }),

/***/ "./src/dom/Document.js":
/*!*****************************!*\
  !*** ./src/dom/Document.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOMImplementation": () => (/* binding */ DOMImplementation),
/* harmony export */   "Document": () => (/* binding */ Document)
/* harmony export */ });
/* harmony import */ var _Node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Node.js */ "./src/dom/Node.js");
/* harmony import */ var _Comment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Comment.js */ "./src/dom/Comment.js");
/* harmony import */ var _Text_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Text.js */ "./src/dom/Text.js");
/* harmony import */ var _Attr_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Attr.js */ "./src/dom/Attr.js");
/* harmony import */ var _DocumentFragment_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DocumentFragment.js */ "./src/dom/DocumentFragment.js");
/* harmony import */ var _html_HTMLLinkElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./html/HTMLLinkElement.js */ "./src/dom/html/HTMLLinkElement.js");
/* harmony import */ var _html_HTMLScriptElement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./html/HTMLScriptElement.js */ "./src/dom/html/HTMLScriptElement.js");
/* harmony import */ var _html_HTMLImageElement_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./html/HTMLImageElement.js */ "./src/dom/html/HTMLImageElement.js");
/* harmony import */ var _html_HTMLElement_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./html/HTMLElement.js */ "./src/dom/html/HTMLElement.js");
/* harmony import */ var _mixins_elementAccess_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mixins/elementAccess.js */ "./src/dom/mixins/elementAccess.js");
/* harmony import */ var _utils_objectCreationUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/objectCreationUtils.js */ "./src/utils/objectCreationUtils.js");
/* harmony import */ var _svg_SVGSVGElement_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./svg/SVGSVGElement.js */ "./src/dom/svg/SVGSVGElement.js");
/* harmony import */ var _svg_SVGPathElement_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./svg/SVGPathElement.js */ "./src/dom/svg/SVGPathElement.js");
/* harmony import */ var _svg_SVGTextContentElement_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./svg/SVGTextContentElement.js */ "./src/dom/svg/SVGTextContentElement.js");
/* harmony import */ var _svg_SVGGraphicsElement_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./svg/SVGGraphicsElement.js */ "./src/dom/svg/SVGGraphicsElement.js");
/* harmony import */ var _mixins_ParentNode_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./mixins/ParentNode.js */ "./src/dom/mixins/ParentNode.js");
/* harmony import */ var _utils_namespaces_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/namespaces.js */ "./src/utils/namespaces.js");
/* harmony import */ var _DocumentType_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./DocumentType.js */ "./src/dom/DocumentType.js");
/* harmony import */ var _mixins_NonElementParentNode_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./mixins/NonElementParentNode.js */ "./src/dom/mixins/NonElementParentNode.js");




















function getChildByTagName (parent, name) {
  for (let child = parent.firstChild; child != null; child = child.nextSibling) {
    if (child.nodeType === _Node_js__WEBPACK_IMPORTED_MODULE_0__.Node.ELEMENT_NODE && child.nodeName === name) {
      return child
    }
  }
  return null
}

const getSVGElementForName = (name) => {
  switch (name.toLowerCase()) {
  case 'svg':
    return _svg_SVGSVGElement_js__WEBPACK_IMPORTED_MODULE_11__.SVGSVGElement
  case 'path':
    return _svg_SVGPathElement_js__WEBPACK_IMPORTED_MODULE_12__.SVGPathElement
  case 'text':
  case 'tspan':
  case 'tref':
  case 'altglyph':
  case 'textpath':
    return _svg_SVGTextContentElement_js__WEBPACK_IMPORTED_MODULE_13__.SVGTextContentElement
  default:
    return _svg_SVGGraphicsElement_js__WEBPACK_IMPORTED_MODULE_14__.SVGGraphicsElement
  }
}

const getHTMLElementForName = (name) => {
  switch (name.toLowerCase()) {
  case 'img':
    return _html_HTMLImageElement_js__WEBPACK_IMPORTED_MODULE_7__.HTMLImageElement
  case 'link':
    return _html_HTMLLinkElement_js__WEBPACK_IMPORTED_MODULE_5__.HTMLLinkElement
  case 'script':
    return _html_HTMLScriptElement_js__WEBPACK_IMPORTED_MODULE_6__.HTMLScriptElement
  default:
    return _html_HTMLElement_js__WEBPACK_IMPORTED_MODULE_8__.HTMLElement
  }
}

const getElementForNamespace = (ns, name) => {
  switch (ns) {
  case _utils_namespaces_js__WEBPACK_IMPORTED_MODULE_16__.svg:
    return getSVGElementForName(name)
  case _utils_namespaces_js__WEBPACK_IMPORTED_MODULE_16__.html:
  case null:
  case '':
  default:
    return getHTMLElementForName(name)
  }
}

// Feature/version pairs that DOMImplementation.hasFeature() returns true for.  It returns false for anything else.
const supportedFeatures = {
  xml: { '': true, '1.0': true, '2.0': true },
  core: { '': true, '2.0': true },
  html: { '': true, '1.0': true, '2.0': true },
  xhtml: { '': true, '1.0': true, '2.0': true } // HTML
}

const DOMImplementation = {
  hasFeature (feature, version) {
    const f = supportedFeatures[(feature || '').toLowerCase()]
    return (f && f[version || '']) || false
  },

  createDocumentType (qualifiedName, publicId, systemId) {
    return new _DocumentType_js__WEBPACK_IMPORTED_MODULE_17__.DocumentType(qualifiedName, { publicId, systemId, ownerDocument: this })
  },

  createDocument (namespace, qualifiedName, doctype) {
    const doc = new Document(namespace)
    if (doctype) {
      if (doctype.ownerDocument) {
        throw new Error('the object is in the wrong Document, a call to importNode is required')
      }
      doctype.ownerDocument = doc
      doc.appendChild(doctype)
    }
    if (qualifiedName) {
      doc.appendChild(doc.createElementNS(namespace, qualifiedName))
    }
    return doc
  },

  createHTMLDocument (titleText = '') {
    const d = new Document(_utils_namespaces_js__WEBPACK_IMPORTED_MODULE_16__.html)
    const root = d.createElement('html')
    const head = d.createElement('head')
    const title = d.createElement('title')
    title.appendChild(d.createTextNode(titleText))
    head.appendChild(title)
    root.appendChild(head)
    root.appendChild(d.createElement('body'))

    d.appendChild(root)
    return d
  }
}

class Document extends _Node_js__WEBPACK_IMPORTED_MODULE_0__.Node {
  constructor (ns) {
    super('#document', {}, ns)
    this.nodeType = _Node_js__WEBPACK_IMPORTED_MODULE_0__.Node.DOCUMENT_NODE
    this.implementation = DOMImplementation
    this.defaultView = null
  }

  // https://dom.spec.whatwg.org/#dom-document-createattribute
  createAttribute (localName) {
    if (this.namespaceURI === _utils_namespaces_js__WEBPACK_IMPORTED_MODULE_16__.html) {
      localName = localName.toLowerCase()
    }
    return this.createAttributeNS(null, localName, true)
  }

  createAttributeNS (ns, qualifiedName, local = false) {
    return new _Attr_js__WEBPACK_IMPORTED_MODULE_3__.Attr(qualifiedName, { ownerDocument: this, local }, ns)
  }

  createComment (text) {
    return new _Comment_js__WEBPACK_IMPORTED_MODULE_1__.Comment('#comment', { nodeValue: text, ownerDocument: this })
  }

  createDocumentFragment (name) {
    return new _DocumentFragment_js__WEBPACK_IMPORTED_MODULE_4__.DocumentFragment('#document-fragment', { ownerDocument: this })
  }

  createElement (localName) {
    return this.createElementNS(this.namespaceURI, localName, true)
  }

  createElementNS (ns, qualifiedName, local = false) {
    const Element = getElementForNamespace(ns, qualifiedName)

    return new Element(qualifiedName, {
      ownerDocument: this,
      local
    }, ns)
  }

  createTextNode (text) {
    return new _Text_js__WEBPACK_IMPORTED_MODULE_2__.Text('#text', { nodeValue: text, ownerDocument: this })
  }

  get compatMode () {
    return 'CSS1Compat' // always be in standards-mode
  }

  get body () {
    return getChildByTagName(this.documentElement, 'BODY')
  }

  get head () {
    return getChildByTagName(this.documentElement, 'HEAD')
  }

  get documentElement () {
    return this.lastChild
  }
}

(0,_utils_objectCreationUtils_js__WEBPACK_IMPORTED_MODULE_10__.mixin)(_mixins_elementAccess_js__WEBPACK_IMPORTED_MODULE_9__.elementAccess, Document)
;(0,_utils_objectCreationUtils_js__WEBPACK_IMPORTED_MODULE_10__.mixin)(_mixins_ParentNode_js__WEBPACK_IMPORTED_MODULE_15__.ParentNode, Document)
;(0,_utils_objectCreationUtils_js__WEBPACK_IMPORTED_MODULE_10__.mixin)(_mixins_NonElementParentNode_js__WEBPACK_IMPORTED_MODULE_18__.NonElementParentNode, Document)


/***/ }),

/***/ "./src/dom/DocumentFragment.js":
/*!*************************************!*\
  !*** ./src/dom/DocumentFragment.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentFragment": () => (/* binding */ DocumentFragment)
/* harmony export */ });
/* harmony import */ var _Node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Node.js */ "./src/dom/Node.js");
/* harmony import */ var _utils_objectCreationUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/objectCreationUtils.js */ "./src/utils/objectCreationUtils.js");
/* harmony import */ var _mixins_elementAccess_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mixins/elementAccess.js */ "./src/dom/mixins/elementAccess.js");
/* harmony import */ var _mixins_ParentNode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mixins/ParentNode.js */ "./src/dom/mixins/ParentNode.js");
/* harmony import */ var _mixins_NonElementParentNode_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mixins/NonElementParentNode.js */ "./src/dom/mixins/NonElementParentNode.js");





class DocumentFragment extends _Node_js__WEBPACK_IMPORTED_MODULE_0__.Node {
  constructor (name, props) {
    super(name, props)
    this.nodeType = _Node_js__WEBPACK_IMPORTED_MODULE_0__.Node.DOCUMENT_FRAGMENT_NODE
  }
}

(0,_utils_objectCreationUtils_js__WEBPACK_IMPORTED_MODULE_1__.mixin)(_mixins_elementAccess_js__WEBPACK_IMPORTED_MODULE_2__.elementAccess, DocumentFragment)
;(0,_utils_objectCreationUtils_js__WEBPACK_IMPORTED_MODULE_1__.mixin)(_mixins_ParentNode_js__WEBPACK_IMPORTED_MODULE_3__.ParentNode, DocumentFragment)
;(0,_utils_objectCreationUtils_js__WEBPACK_IMPORTED_MODULE_1__.mixin)(_mixins_NonElementParentNode_js__WEBPACK_IMPORTED_MODULE_4__.NonElementParentNode, DocumentFragment)


/***/ }),

/***/ "./src/dom/DocumentType.js":
/*!*********************************!*\
  !*** ./src/dom/DocumentType.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentType": () => (/* binding */ DocumentType)
/* harmony export */ });
/* harmony import */ var _Node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Node.js */ "./src/dom/Node.js");
/* harmony import */ var _utils_objectCreationUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/objectCreationUtils.js */ "./src/utils/objectCreationUtils.js");
/* harmony import */ var _mixins_ChildNode_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mixins/ChildNode.js */ "./src/dom/mixins/ChildNode.js");




class DocumentType extends _Node_js__WEBPACK_IMPORTED_MODULE_0__.Node {
  constructor (name, props) {
    super(name, props)

    this.nodeType = _Node_js__WEBPACK_IMPORTED_MODULE_0__.Node.DOCUMENT_TYPE_NODE
    this.name = name

    const { publicId, systemId } = props
    this.publicId = publicId || ''
    this.systemId = systemId || ''
  }
}

(0,_utils_objectCreationUtils_js__WEBPACK_IMPORTED_MODULE_1__.mixin)(_mixins_ChildNode_js__WEBPACK_IMPORTED_MODULE_2__.ChildNode, DocumentType)


/***/ }),

/***/ "./src/dom/Element.js":
/*!****************************!*\
  !*** ./src/dom/Element.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Element": () => (/* binding */ Element)
/* harmony export */ });
/* harmony import */ var _Node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Node.js */ "./src/dom/Node.js");
/* harmony import */ var _mixins_ParentNode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mixins/ParentNode.js */ "./src/dom/mixins/ParentNode.js");
/* harmony import */ var _mixins_elementAccess_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mixins/elementAccess.js */ "./src/dom/mixins/elementAccess.js");
/* harmony import */ var _html_HTMLParser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./html/HTMLParser.js */ "./src/dom/html/HTMLParser.js");
/* harmony import */ var _DocumentFragment_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DocumentFragment.js */ "./src/dom/DocumentFragment.js");
/* harmony import */ var _utils_objectCreationUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/objectCreationUtils.js */ "./src/utils/objectCreationUtils.js");
/* harmony import */ var _utils_tagUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/tagUtils.js */ "./src/utils/tagUtils.js");
/* harmony import */ var _utils_mapUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/mapUtils.js */ "./src/utils/mapUtils.js");
/* harmony import */ var _utils_strUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/strUtils.js */ "./src/utils/strUtils.js");
/* harmony import */ var _mixins_NonDocumentTypeChildNode_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mixins/NonDocumentTypeChildNode.js */ "./src/dom/mixins/NonDocumentTypeChildNode.js");
/* harmony import */ var _mixins_ChildNode_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mixins/ChildNode.js */ "./src/dom/mixins/ChildNode.js");
/* harmony import */ var _utils_namespaces_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/namespaces.js */ "./src/utils/namespaces.js");














const validateAndExtract = (ns, name) => {
  let prefix = null
  let localname = name

  if (!ns) ns = null

  if (name.includes(':')) {
    [ prefix, localname ] = name.split(':')
  }

  if (!ns && prefix) {
    throw new Error('Namespace Error')
  }

  if (prefix === 'xml' && ns !== _utils_namespaces_js__WEBPACK_IMPORTED_MODULE_11__.xml) {
    throw new Error('Namespace Error')
  }

  if ((prefix === 'xmlns' || name === 'xmlns') && ns !== _utils_namespaces_js__WEBPACK_IMPORTED_MODULE_11__.xmlns) {
    throw new Error('Namespace Error')
  }

  if (prefix !== 'xmlns' && name !== 'xmlns' && ns === _utils_namespaces_js__WEBPACK_IMPORTED_MODULE_11__.xmlns) {
    throw new Error('Namespace Error')
  }

  return [ ns, prefix, localname ]
}

const getAttributeByNsAndLocalName = (el, ns, localName) => {
  if (!ns) ns = null
  return [ ...el.attrs ].find((node) => node.localName === localName && node.namespaceURI === ns)
}

const getAttributeByQualifiedName = (el, qualifiedName) => {
  if (el.namespaceURI === _utils_namespaces_js__WEBPACK_IMPORTED_MODULE_11__.html && el.ownerDocument.namespaceURI === _utils_namespaces_js__WEBPACK_IMPORTED_MODULE_11__.html) {
    qualifiedName = qualifiedName.toLowerCase()
  }

  return [ ...el.attrs ].find((node) => node.name === qualifiedName)
}

// This Proxy proxies all access to node.style to the css saved in the attribute
const getStyleProxy = (node) => {

  return new Proxy(node, {
    get (target, key) {
      const styles = target.getAttribute('style') || ''
      const styleMap = (0,_utils_mapUtils_js__WEBPACK_IMPORTED_MODULE_7__.cssToMap)(styles)

      if (key === 'cssText') {
        return styles
      }

      if (key === 'setProperty') {
        return function (propertyName, value = '', priority = '') {
          node.style[propertyName] = value + (priority ? ` !${priority}` : '')
        }
      }

      key = (0,_utils_strUtils_js__WEBPACK_IMPORTED_MODULE_8__.decamelize)(key)
      if (!styleMap.has(key)) return ''

      return styleMap.get(key)
    },
    set (target, key, value) {
      key = (0,_utils_strUtils_js__WEBPACK_IMPORTED_MODULE_8__.decamelize)(key)

      if (key === 'css-text') {
        // ensure correct spacing and syntax by converting back and forth
        target.setAttribute('style', (0,_utils_mapUtils_js__WEBPACK_IMPORTED_MODULE_7__.mapToCss)((0,_utils_mapUtils_js__WEBPACK_IMPORTED_MODULE_7__.cssToMap)(value)))
        return true
      } else {
        value = (0,_utils_strUtils_js__WEBPACK_IMPORTED_MODULE_8__.hexToRGB)(value.toString())
        const styles = target.getAttribute('style') || ''
        const styleMap = (0,_utils_mapUtils_js__WEBPACK_IMPORTED_MODULE_7__.cssToMap)(styles)
        styleMap.set(key, value)

        target.setAttribute('style', (0,_utils_mapUtils_js__WEBPACK_IMPORTED_MODULE_7__.mapToCss)(styleMap))

        return true
      }
    }
  })
}

// https://dom.spec.whatwg.org/#dom-element-setattributens
class Element extends _Node_js__WEBPACK_IMPORTED_MODULE_0__.Node {
  constructor (name, props, ns) {
    super(name, props, ns)

    this.style = getStyleProxy(this)
    this.tagName = this.nodeName
  }

  getAttribute (qualifiedName) {
    const attr = this.getAttributeNode(qualifiedName)
    return attr ? attr.value : null
  }

  getAttributeNode (qualifiedName) {
    return getAttributeByQualifiedName(this, qualifiedName)
  }

  getAttributeNodeNS (ns, localName) {
    return getAttributeByNsAndLocalName(this, ns, localName)
  }

  getAttributeNS (ns, localName) {
    const attr = this.getAttributeNodeNS(ns, localName)
    return attr ? attr.value : null
  }

  getBoundingClientRect () {
    throw new Error('Only implemented for SVG Elements')
  }

  hasAttribute (qualifiedName) {
    const attr = this.getAttributeNode(qualifiedName)
    return !!attr
  }

  hasAttributeNS (ns, localName) {
    const attr = this.getAttributeNodeNS(ns, localName)
    return !!attr
  }

  matches (query) {
    return this.matchWithScope(query, this)
  }

  removeAttribute (qualifiedName) {
    const attr = this.getAttributeNode(qualifiedName)
    if (attr) {
      this.removeAttributeNode(attr)
    }
    return attr
  }

  removeAttributeNode (node) {
    if (!this.attrs.delete(node)) throw new Error('Attribute cannot be removed because it was not found on the element')
    return node
  }

  // call is: d.removeAttributeNS('http://www.mozilla.org/ns/specialspace', 'align', 'center');
  removeAttributeNS (ns, localName) {
    const attr = this.getAttributeNodeNS(ns, localName)
    if (attr) {
      this.removeAttributeNode(attr)
    }
    return attr
  }

  /* The setAttribute(qualifiedName, value) method, when invoked, must run these steps:

    If qualifiedName does not match the Name production in XML, then throw an "InvalidCharacterError" DOMException.

    If this is in the HTML namespace and its node document is an HTML document, then set qualifiedName to qualifiedName in ASCII lowercase.

    Let attribute be the first attribute in this’s attribute list whose qualified name is qualifiedName, and null otherwise.

    If attribute is null, create an attribute whose local name is qualifiedName, value is value, and node document is this’s node document, then append this attribute to this, and then return.

    Change attribute to value.
  */
  setAttribute (qualifiedName, value) {
    // We have to do that here because we cannot check if `this` is in the correct namespace
    // when doing it in createAttribute
    if (this.namespaceURI === _utils_namespaces_js__WEBPACK_IMPORTED_MODULE_11__.html && this.ownerDocument.namespaceURI === _utils_namespaces_js__WEBPACK_IMPORTED_MODULE_11__.html) {
      qualifiedName = qualifiedName.toLowerCase()
    }

    let attr = this.getAttributeNode(qualifiedName)
    if (!attr) {
      // Because createAttribute lowercases the attribute in an html doc we have to use createAttributeNS
      attr = this.ownerDocument.createAttributeNS(null, qualifiedName, true)
      this.setAttributeNode(attr)
    }

    attr.value = value
  }

  /*
    Let namespace, prefix, and localName be the result of passing namespace and qualifiedName to validate and extract.

    Set an attribute value for this using localName, value, and also prefix and namespace.

    If prefix is not given, set it to null.
    If namespace is not given, set it to null.
    Let attribute be the result of getting an attribute given namespace, localName, and element.
    If attribute is null, create an attribute whose namespace is namespace, namespace prefix is prefix, local name is localName, value is value, and node document is element’s node document, then append this attribute to element, and then return.

    Change attribute to value.
  */

  setAttributeNode (node) {
    this.attrs.add(node)
    node.ownerElement = this
  }

  // call is: d.setAttributeNS('http://www.mozilla.org/ns/specialspace', 'spec:align', 'center');
  setAttributeNS (namespace, name, value) {

    // eslint-disable-next-line
    const [ ns, prefix, localName ] = validateAndExtract(namespace, name)

    let attr = this.getAttributeNodeNS(ns, localName)
    if (!attr) {
      attr = this.ownerDocument.createAttributeNS(ns, name)
      this.setAttributeNode(attr) // setAttributeNodeNS is a synonym of setAttributeNode
    }

    attr.value = value

    this.attrs.add(attr)
  }

  get attributes () {
    return [ ...this.attrs ]
  }

  get className () {
    return this.getAttribute('class')
  }

  set className (c) {
    this.setAttribute('class', c)
  }

  get id () {
    return this.getAttribute('id') || ''
  }

  set id (id) {
    return this.setAttribute('id', id)
  }

  get innerHTML () {

    return this.childNodes.map(node => {
      if (node.nodeType === _Node_js__WEBPACK_IMPORTED_MODULE_0__.Node.TEXT_NODE) return (0,_utils_strUtils_js__WEBPACK_IMPORTED_MODULE_8__.htmlEntities)(node.data)
      if (node.nodeType === _Node_js__WEBPACK_IMPORTED_MODULE_0__.Node.CDATA_SECTION_NODE) return (0,_utils_strUtils_js__WEBPACK_IMPORTED_MODULE_8__.cdata)(node.data)
      if (node.nodeType === _Node_js__WEBPACK_IMPORTED_MODULE_0__.Node.COMMENT_NODE) return (0,_utils_strUtils_js__WEBPACK_IMPORTED_MODULE_8__.comment)(node.data)
      return node.outerHTML
    }).join('')
  }

  set innerHTML (str) {
    while (this.firstChild) {
      this.removeChild(this.firstChild)
    }
    // The parser adds the html to this
    (0,_html_HTMLParser_js__WEBPACK_IMPORTED_MODULE_3__.HTMLParser)(str, this)
  }

  get outerHTML () {
    return (0,_utils_tagUtils_js__WEBPACK_IMPORTED_MODULE_6__.tag)(this)
  }

  set outerHTML (str) {
    var well = new _DocumentFragment_js__WEBPACK_IMPORTED_MODULE_4__.DocumentFragment()
    ;(0,_html_HTMLParser_js__WEBPACK_IMPORTED_MODULE_3__.HTMLParser)(str, well)
    this.parentNode.insertBefore(well, this)
    this.parentNode.removeChild(this)
  }

}

(0,_utils_objectCreationUtils_js__WEBPACK_IMPORTED_MODULE_5__.mixin)(_mixins_ParentNode_js__WEBPACK_IMPORTED_MODULE_1__.ParentNode, Element)
;(0,_utils_objectCreationUtils_js__WEBPACK_IMPORTED_MODULE_5__.mixin)(_mixins_elementAccess_js__WEBPACK_IMPORTED_MODULE_2__.elementAccess, Element)
;(0,_utils_objectCreationUtils_js__WEBPACK_IMPORTED_MODULE_5__.mixin)(_mixins_NonDocumentTypeChildNode_js__WEBPACK_IMPORTED_MODULE_9__.NonDocumentTypeChildNode, Element)
;(0,_utils_objectCreationUtils_js__WEBPACK_IMPORTED_MODULE_5__.mixin)(_mixins_ChildNode_js__WEBPACK_IMPORTED_MODULE_10__.ChildNode, Element)


/***/ }),

/***/ "./src/dom/Event.js":
/*!**************************!*\
  !*** ./src/dom/Event.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Event": () => (/* binding */ Event)
/* harmony export */ });
class Event {
  constructor (type) {
    this.type = type
    this.cancelable = false
    this.defaultPrevented = false
    this.target = null
  }

  preventDefault () {
    if (this.cancelable) {
      this.defaultPrevented = true
    }
  }
}


/***/ }),

/***/ "./src/dom/EventTarget.js":
/*!********************************!*\
  !*** ./src/dom/EventTarget.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventTarget": () => (/* binding */ EventTarget)
/* harmony export */ });
const $ = Symbol('private properties')

class EventTarget {
  constructor () {
    this[$] = {}
    this[$].listeners = {}
  }

  addEventListener (type, callback) {
    if (!(type in this[$].listeners)) {
      this[$].listeners[type] = []
    }
    this[$].listeners[type].push(callback)
  }

  dispatchEvent (event) {
    if (!(event.type in this[$].listeners)) { return true }

    var stack = this[$].listeners[event.type]
    event.target = this

    stack.forEach(function (el) {
      el(event)
    })

    return !event.defaultPrevented
  }

  removeEventListener (type, callback) {
    if (!(type in this[$].listeners)) {
      return
    }

    var stack = this[$].listeners[type]
    for (var i = 0, il = stack.length; i < il; i++) {
      if (stack[i] === callback) {
        stack.splice(i, 1)
        return
      }
    }
  }

}


/***/ }),

/***/ "./src/dom/Node.js":
/*!*************************!*\
  !*** ./src/dom/Node.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Node": () => (/* binding */ Node)
/* harmony export */ });
/* harmony import */ var _utils_objectCreationUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/objectCreationUtils.js */ "./src/utils/objectCreationUtils.js");
/* harmony import */ var _EventTarget_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventTarget.js */ "./src/dom/EventTarget.js");
/* harmony import */ var _utils_tagUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/tagUtils.js */ "./src/utils/tagUtils.js");
/* harmony import */ var _utils_namespaces_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/namespaces.js */ "./src/utils/namespaces.js");






const nodeTypes = {
  ELEMENT_NODE: 1,
  ATTRIBUTE_NODE: 2,
  TEXT_NODE: 3,
  CDATA_SECTION_NODE: 4,
  ENTITY_REFERENCE_NODE: 5,
  ENTITY_NODE: 6,
  PROCESSING_INSTRUCTION_NODE: 7,
  COMMENT_NODE: 8,
  DOCUMENT_NODE: 9,
  DOCUMENT_TYPE_NODE: 10,
  DOCUMENT_FRAGMENT_NODE: 11,
  NOTATION_NODE: 12
}

class Node extends _EventTarget_js__WEBPACK_IMPORTED_MODULE_1__.EventTarget {
  constructor (name = '', props = {}, ns = null) {
    super()

    // If props.local is true, the element was Node was created with the non-namespace function
    // that means whatever was passed as name is the local name even though it might look like a prefix
    if (name.includes(':') && !props.local) {
      ;[ this.prefix, this.localName ] = name.split(':')
    } else {
      this.localName = name
      this.prefix = null
    }

    // Follow spec and uppercase nodeName for html
    this.nodeName = ns === _utils_namespaces_js__WEBPACK_IMPORTED_MODULE_3__.html ? name.toUpperCase() : name

    this.namespaceURI = ns
    this.nodeType = Node.ELEMENT_NODE
    this.nodeValue = props.nodeValue != null ? props.nodeValue : null
    this.childNodes = []

    this.attrs = props.attrs || new Set()

    this.ownerDocument = props.ownerDocument || null
    this.parentNode = null

    // this.namespaces = {}
    // if (this.prefix) {
    //   this.namespaces[this.prefix] = ns
    // } else {
    //   this.namespaces.default = ns
    // }

    if (props.childNodes) {
      for (let i = 0, il = props.childNodes.length; i < il; ++i) {
        this.appendChild(props.childNodes[i])
      }
    }
  }

  appendChild (node) {
    return this.insertBefore(node)
  }

  cloneNode (deep = false) {
    const clone = (0,_utils_tagUtils_js__WEBPACK_IMPORTED_MODULE_2__.cloneNode)(this)

    if (deep) {
      this.childNodes.forEach(function (el) {
        const node = el.cloneNode(deep)
        clone.appendChild(node)
      })
    }

    return clone
  }

  contains (node) {
    if (node === this) return false

    while (node.parentNode) {
      if (node === this) return true
      node = node.parentNode
    }
    return false
  }

  getRootNode () {
    if (!this.parentNode || this.nodeType === Node.DOCUMENT_NODE) return this
    return this.parentNode.getRootNode()
  }

  hasChildNodes () {
    return !!this.childNodes.length
  }

  insertBefore (node, before) {
    let index = this.childNodes.indexOf(before)
    if (index === -1) {
      index = this.childNodes.length
    }

    if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      let child
      let oldChild = before
      while ((child = node.childNodes.pop())) {
        this.insertBefore(child, oldChild)
        oldChild = child
      }
      return node
    }

    if (node.parentNode) {
      node.parentNode.removeChild(node)
    }

    node.parentNode = this
    // Object.setPrototypeOf(node.namespaces.prototype, this.namespaces.prototype)

    this.childNodes.splice(index, 0, node)
    return node
  }

  isDefaultNamespace (namespaceURI) {
    switch (this.nodeType) {
    case Node.ELEMENT_NODE:
      if (!this.prefix) {
        return this.namespaceURI === namespaceURI
      }

      if (this.hasAttribute('xmlns')) {
        return this.getAttribute('xmlns')
      }

      // EntityReferences may have to be skipped to get to it
      if (this.parentNode) {
        return this.parentNode.isDefaultNamespace(namespaceURI)
      }

      return false
    case Node.DOCUMENT_NODE:
      return this.documentElement.isDefaultNamespace(namespaceURI)
    case Node.ENTITY_NODE:
    case Node.NOTATION_NODE:
    case Node.DOCUMENT_TYPE_NODE:
    case Node.DOCUMENT_FRAGMENT_NODE:
      return false
    case Node.ATTRIBUTE_NODE:
      if (this.ownerElement) {
        return this.ownerElement.isDefaultNamespace(namespaceURI)
      }
      return false
    default:
      // EntityReferences may have to be skipped to get to it
      if (this.parentNode) {
        return this.parentNode.isDefaultNamespace(namespaceURI)
      }
      return false
    }
  }

  isEqualNode (node) {
    this.normalize()
    node.normalize()

    let bool = this.nodeName === node.nodeName
    bool = bool && this.localName === node.localName
    bool = bool && this.namespaceURI === node.namespaceURI
    bool = bool && this.prefix === node.prefix
    bool = bool && this.nodeValue === node.nodeValue

    bool = bool && this.childNodes.length === node.childNodes.length

    // dont check children recursively when the count doesnt event add up
    if (!bool) return false

    bool = bool && !this.childNodes.reduce((last, curr, index) => {
      return last && curr.isEqualNode(node.childNodes[index])
    }, true)

    // FIXME: Use attr nodes
    /* bool = bool && ![ ...this.attrs.entries() ].reduce((last, curr, index) => {
      const [ key, val ] = node.attrs.entries()
      return last && curr[0] === key && curr[1] === val
    }, true) */

    /*
    TODO:
    For two DocumentType nodes to be equal, the following conditions must also be satisfied:

    The following string attributes are equal: publicId, systemId, internalSubset.
    The entities NamedNodeMaps are equal.
    The notations NamedNodeMaps are equal.
    */

    if (this.nodeType === Node.DOCUMENT_TYPE_NODE && node.nodeType === Node.DOCUMENT_TYPE_NODE) {
      bool = bool && this.publicId === node.publicId
      bool = bool && this.systemId === node.systemId
      bool = bool && this.internalSubset === node.internalSubset
    }

    return bool
  }

  isSameNode (node) {
    return this === node
  }

  lookupNamespacePrefix (namespaceURI, originalElement) {
    if (this.namespaceURI && this.namespaceURI === namespaceURI && this.prefix
         && originalElement.lookupNamespaceURI(this.prefix) === namespaceURI) {
      return this.prefix
    }

    for (const [ key, val ] of this.attrs.entries()) {
      if (!key.includes(':')) continue

      const [ attrPrefix, name ] = key.split(':')
      if (attrPrefix === 'xmlns' && val === namespaceURI && originalElement.lookupNamespaceURI(name) === namespaceURI) {
        return name
      }
    }

    // EntityReferences may have to be skipped to get to it
    if (this.parentNode) {
      return this.parentNode.lookupNamespacePrefix(namespaceURI, originalElement)
    }
    return null
  }

  lookupNamespaceURI (prefix) {
    switch (this.nodeType) {
    case Node.ELEMENT_NODE:
      if (this.namespaceURI != null && this.prefix === prefix) {
        // Note: prefix could be "null" in this case we are looking for default namespace
        return this.namespaceURI
      }

      for (const [ key, val ] of this.attrs.entries()) {
        if (!key.includes(':')) continue

        const [ attrPrefix, name ] = key.split(':')
        if (attrPrefix === 'xmlns' && name === prefix) {
          if (val != null) {
            return val
          }
          return null
          // FIXME: Look up if prefix or attrPrefix
        } else if (name === 'xmlns' && prefix == null) {
          if (val != null) {
            return val
          }
          return null
        }
      }

      // EntityReferences may have to be skipped to get to it
      if (this.parentNode) {
        return this.parentNode.lookupNamespaceURI(prefix)
      }
      return null
    case Node.DOCUMENT_NODE:
      return this.documentElement.lookupNamespaceURI(prefix)
    case Node.ENTITY_NODE:
    case Node.NOTATION_NODE:
    case Node.DOCUMENT_TYPE_NODE:
    case Node.DOCUMENT_FRAGMENT_NODE:
      return null
    case Node.ATTRIBUTE_NODE:
      if (this.ownerElement) {
        return this.ownerElement.lookupNamespaceURI(prefix)
      }
      return null
    default:
      // EntityReferences may have to be skipped to get to it
      if (this.parentNode) {
        return this.parentNode.lookupNamespaceURI(prefix)
      }
      return null
    }
  }

  lookupPrefix (namespaceURI) {
    if (!namespaceURI) {
      return null
    }

    const type = this.nodeType

    switch (type) {
    case Node.ELEMENT_NODE:
      return this.lookupNamespacePrefix(namespaceURI, this)
    case Node.DOCUMENT_NODE:
      return this.documentElement.lookupNamespacePrefix(namespaceURI)
    case Node.ENTITY_NODE :
    case Node.NOTATION_NODE:
    case Node.DOCUMENT_FRAGMENT_NODE:
    case Node.DOCUMENT_TYPE_NODE:
      return null // type is unknown
    case Node.ATTRIBUTE_NODE:
      if (this.ownerElement) {
        return this.ownerElement.lookupNamespacePrefix(namespaceURI)
      }
      return null
    default:
      // EntityReferences may have to be skipped to get to it
      if (this.parentNode) {
        return this.parentNode.lookupNamespacePrefix(namespaceURI)
      }
      return null
    }
  }

  normalize () {
    const childNodes = []
    for (const node of this.childNodes) {
      const last = childNodes.shift()
      if (!last) {
        if (node.data) {
          childNodes.unshift(node)
        }
        continue
      }

      if (node.nodeType === Node.TEXT_NODE) {
        if (!node.data) {
          childNodes.unshift(last)
          continue
        }

        if (last.nodeType === Node.TEXT_NODE) {
          const merged = this.ownerDocument.createTextNode(last.data + node.data)
          childNodes.push(merged)
          continue
        }

        childNodes.push(last, node)
      }
    }

    childNodes.forEach(node => {
      node.parentNode = this
    })
    this.childNodes = childNodes
    // this.childNodes = this.childNodes.forEach((textNodes, node) => {
    //   // FIXME: If first node is an empty textnode, what do we do? -> spec
    //   if (!textNodes) return [ node ]
    //   var last = textNodes.pop()

    //   if (node.nodeType === Node.TEXT_NODE) {
    //     if (!node.data) return textNodes

    //     if (last.nodeType === Node.TEXT_NODE) {
    //       const merged = this.ownerDocument.createTextNode(last.data + ' ' + node.data)
    //       textNodes.push(merged)
    //       return textNodes.concat(merged)
    //     }
    //   } else {
    //     textNodes.push(last, node)
    //   }

    //   return textNodes
    // }, null)
  }

  removeChild (node) {

    node.parentNode = null
    // Object.setPrototypeOf(node, null)
    const index = this.childNodes.indexOf(node)
    if (index === -1) return node
    this.childNodes.splice(index, 1)
    return node
  }

  replaceChild (newChild, oldChild) {
    const before = oldChild.nextSibling
    this.removeChild(oldChild)
    this.insertBefore(newChild, before)
    return oldChild
  }

  get nextSibling () {
    const child = this.parentNode && this.parentNode.childNodes[this.parentNode.childNodes.indexOf(this) + 1]
    return child || null
  }

  get previousSibling () {
    const child = this.parentNode && this.parentNode.childNodes[this.parentNode.childNodes.indexOf(this) - 1]
    return child || null
  }

  get textContent () {
    if (this.nodeType === Node.TEXT_NODE) return this.data
    if (this.nodeType === Node.CDATA_SECTION_NODE) return this.data
    if (this.nodeType === Node.COMMENT_NODE) return this.data

    return this.childNodes.reduce(function (last, current) {
      return last + current.textContent
    }, '')
  }

  set textContent (text) {
    if (this.nodeType === Node.TEXT_NODE || this.nodeType === Node.CDATA_SECTION_NODE || this.nodeType === Node.COMMENT_NODE) {
      this.data = text
      return
    }
    this.childNodes = []
    this.appendChild(this.ownerDocument.createTextNode(text))
  }

  get lastChild () {
    return this.childNodes[this.childNodes.length - 1] || null
  }

  get firstChild () {
    return this.childNodes[0] || null
  }
}

(0,_utils_objectCreationUtils_js__WEBPACK_IMPORTED_MODULE_0__.extendStatic)(Node, nodeTypes)
;(0,_utils_objectCreationUtils_js__WEBPACK_IMPORTED_MODULE_0__.extend)(Node, nodeTypes)


/***/ }),

/***/ "./src/dom/NodeFilter.js":
/*!*******************************!*\
  !*** ./src/dom/NodeFilter.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NodeFilter": () => (/* binding */ NodeFilter)
/* harmony export */ });
/* harmony import */ var _utils_objectCreationUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/objectCreationUtils.js */ "./src/utils/objectCreationUtils.js");


class NodeFilter {
  acceptNode () {
    return NodeFilter.FILTER_ACCEPT
  }
}

(0,_utils_objectCreationUtils_js__WEBPACK_IMPORTED_MODULE_0__.extendStatic)(NodeFilter, {
  FILTER_ACCEPT: 1,
  FILTER_REJECT: 2,
  FILTER_IGNORE: 4,
  SHOW_ALL: -1,
  SHOW_ELEMENT: 1,
  SHOW_TEXT: 4,
  SHOW_ENTITY_REFERENCE: 16,
  SHOW_ENTITY: 32,
  SHOW_PROCESSING_INSTRUCTION: 64,
  SHOW_COMMENT: 128,
  SHOW_DOCUMENT: 256,
  SHOW_DOCUMENT_TYPE: 512,
  SHOW_DOCUMENT_FRAGMENT: 1024,
  SHOW_NOTATION: 2048
})


/***/ }),

/***/ "./src/dom/Text.js":
/*!*************************!*\
  !*** ./src/dom/Text.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Text": () => (/* binding */ Text)
/* harmony export */ });
/* harmony import */ var _CharacterData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CharacterData.js */ "./src/dom/CharacterData.js");
/* harmony import */ var _Node_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Node.js */ "./src/dom/Node.js");



class Text extends _CharacterData_js__WEBPACK_IMPORTED_MODULE_0__.CharacterData {
  constructor (name, props) {
    super(name, props)
    this.nodeType = _Node_js__WEBPACK_IMPORTED_MODULE_1__.Node.TEXT_NODE
  }
}


/***/ }),

/***/ "./src/dom/Window.js":
/*!***************************!*\
  !*** ./src/dom/Window.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Window": () => (/* binding */ Window)
/* harmony export */ });
/* harmony import */ var _utils_objectCreationUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/objectCreationUtils.js */ "./src/utils/objectCreationUtils.js");
/* harmony import */ var _EventTarget_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventTarget.js */ "./src/dom/EventTarget.js");
/* harmony import */ var _Node_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Node.js */ "./src/dom/Node.js");
/* harmony import */ var _Document_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Document.js */ "./src/dom/Document.js");
/* harmony import */ var _DocumentFragment_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DocumentFragment.js */ "./src/dom/DocumentFragment.js");
/* harmony import */ var _Text_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Text.js */ "./src/dom/Text.js");
/* harmony import */ var _CustomEvent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CustomEvent.js */ "./src/dom/CustomEvent.js");
/* harmony import */ var _Event_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Event.js */ "./src/dom/Event.js");
/* harmony import */ var _Element_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Element.js */ "./src/dom/Element.js");
/* harmony import */ var _Attr_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Attr.js */ "./src/dom/Attr.js");
/* harmony import */ var _html_HTMLImageElement_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./html/HTMLImageElement.js */ "./src/dom/html/HTMLImageElement.js");
/* harmony import */ var _html_HTMLLinkElement_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./html/HTMLLinkElement.js */ "./src/dom/html/HTMLLinkElement.js");
/* harmony import */ var _html_HTMLScriptElement_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./html/HTMLScriptElement.js */ "./src/dom/html/HTMLScriptElement.js");
/* harmony import */ var _html_HTMLElement_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./html/HTMLElement.js */ "./src/dom/html/HTMLElement.js");
/* harmony import */ var _svg_SVGPoint_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./svg/SVGPoint.js */ "./src/dom/svg/SVGPoint.js");
/* harmony import */ var _svg_SVGMatrix_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./svg/SVGMatrix.js */ "./src/dom/svg/SVGMatrix.js");
/* harmony import */ var _svg_SVGElement_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./svg/SVGElement.js */ "./src/dom/svg/SVGElement.js");
/* harmony import */ var _svg_SVGSVGElement_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./svg/SVGSVGElement.js */ "./src/dom/svg/SVGSVGElement.js");
/* harmony import */ var _svg_SVGPathElement_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./svg/SVGPathElement.js */ "./src/dom/svg/SVGPathElement.js");
/* harmony import */ var _svg_SVGGraphicsElement_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./svg/SVGGraphicsElement.js */ "./src/dom/svg/SVGGraphicsElement.js");
/* harmony import */ var _svg_SVGTextContentElement_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./svg/SVGTextContentElement.js */ "./src/dom/svg/SVGTextContentElement.js");
/* harmony import */ var _utils_strUtils_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../utils/strUtils.js */ "./src/utils/strUtils.js");
/* harmony import */ var _utils_defaults_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../utils/defaults.js */ "./src/utils/defaults.js");
























class Window extends _EventTarget_js__WEBPACK_IMPORTED_MODULE_1__.EventTarget {
  constructor () {
    super()
    this.document = new _Document_js__WEBPACK_IMPORTED_MODULE_3__.Document()
    this.document.defaultView = this
    this.self = this
    const doc = this.document
    this.Image = class {
      constructor (width, height) {
        const img = doc.createElement('img')
        if (width != null) img.setAttribute('width', width)
        if (height != null) img.setAttribute('height', height)
        return img
      }
    }
  }

  getComputedStyle (node) {
    return {
      // FIXME: Currently this function treats every given attr
      // as inheritable from its parents which is ofc not always true
      // but good enough for svg.js
      getPropertyValue (attr) {
        let value
        let cur = node

        do {
          value = cur.style[attr] || cur.getAttribute(attr)
        } while (
          value == null
          && (cur = cur.parentNode)
          && cur.nodeType === 1
        )

        return value || _utils_defaults_js__WEBPACK_IMPORTED_MODULE_22__[(0,_utils_strUtils_js__WEBPACK_IMPORTED_MODULE_21__.camelCase)(attr)] || null
      }
    }
  }
}

let lastTime = 0
const requestAnimationFrame = callback => {
  const now = new global.Date().getTime()
  const timeToCall = Math.max(0, 16 - (now - lastTime))
  return global.setTimeout(() => {
    lastTime = now + timeToCall
    callback(lastTime)
  }, timeToCall)
}

const nowOffset = global.Date.now()
const performance = {
  now: () => Date.now() - nowOffset
}

const winProps = {
  Window,
  Document: _Document_js__WEBPACK_IMPORTED_MODULE_3__.Document,
  DocumentFragment: _DocumentFragment_js__WEBPACK_IMPORTED_MODULE_4__.DocumentFragment,
  Node: _Node_js__WEBPACK_IMPORTED_MODULE_2__.Node,
  EventTarget: _EventTarget_js__WEBPACK_IMPORTED_MODULE_1__.EventTarget,
  Text: _Text_js__WEBPACK_IMPORTED_MODULE_5__.Text,
  Attr: _Attr_js__WEBPACK_IMPORTED_MODULE_9__.Attr,
  Element: _Element_js__WEBPACK_IMPORTED_MODULE_8__.Element,
  CustomEvent: _CustomEvent_js__WEBPACK_IMPORTED_MODULE_6__.CustomEvent,
  Event: _Event_js__WEBPACK_IMPORTED_MODULE_7__.Event,
  HTMLElement: _html_HTMLElement_js__WEBPACK_IMPORTED_MODULE_13__.HTMLElement,
  HTMLLinkElement: _html_HTMLLinkElement_js__WEBPACK_IMPORTED_MODULE_11__.HTMLLinkElement,
  HTMLScriptElement: _html_HTMLScriptElement_js__WEBPACK_IMPORTED_MODULE_12__.HTMLScriptElement,
  HTMLImageElement: _html_HTMLImageElement_js__WEBPACK_IMPORTED_MODULE_10__.HTMLImageElement,
  // Image: HTMLImageElement, // is set on construction
  SVGMatrix: _svg_SVGMatrix_js__WEBPACK_IMPORTED_MODULE_15__.SVGMatrix,
  SVGPoint: _svg_SVGPoint_js__WEBPACK_IMPORTED_MODULE_14__.SVGPoint,
  SVGElement: _svg_SVGElement_js__WEBPACK_IMPORTED_MODULE_16__.SVGElement,
  SVGSVGElement: _svg_SVGSVGElement_js__WEBPACK_IMPORTED_MODULE_17__.SVGSVGElement,
  SVGPathElement: _svg_SVGPathElement_js__WEBPACK_IMPORTED_MODULE_18__.SVGPathElement,
  SVGGraphicsElement: _svg_SVGGraphicsElement_js__WEBPACK_IMPORTED_MODULE_19__.SVGGraphicsElement,
  SVGTextContentElement: _svg_SVGTextContentElement_js__WEBPACK_IMPORTED_MODULE_20__.SVGTextContentElement,
  setTimeout: global.setTimeout,
  clearTimeout: global.clearTimeout,
  pageXOffset: 0,
  pageYOffset: 0,
  Date: global.Date,
  requestAnimationFrame,
  cancelAnimationFrame: global.clearTimeout,
  performance
}

;(0,_utils_objectCreationUtils_js__WEBPACK_IMPORTED_MODULE_0__.extend)(Window, winProps)


/***/ }),

/***/ "./src/dom/html/HTMLElement.js":
/*!*************************************!*\
  !*** ./src/dom/html/HTMLElement.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLElement": () => (/* binding */ HTMLElement)
/* harmony export */ });
/* harmony import */ var _Element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Element.js */ "./src/dom/Element.js");


class HTMLElement extends _Element_js__WEBPACK_IMPORTED_MODULE_0__.Element {}


/***/ }),

/***/ "./src/dom/html/HTMLImageElement.js":
/*!******************************************!*\
  !*** ./src/dom/html/HTMLImageElement.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLImageElement": () => (/* binding */ HTMLImageElement)
/* harmony export */ });
/* harmony import */ var image_size__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! image-size */ "image-size");
/* harmony import */ var _Event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Event.js */ "./src/dom/Event.js");
/* harmony import */ var _HTMLElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HTMLElement.js */ "./src/dom/html/HTMLElement.js");



// import { getFileBufferFromURL } from '../../utils/fileUrlToBuffer.js'
// import path from 'path'

class HTMLImageElement extends _HTMLElement_js__WEBPACK_IMPORTED_MODULE_2__.HTMLElement {
  constructor (...args) {
    super(...args)
    this.naturalWidth = 0
    this.naturalHeight = 0
    this.complete = false
  }
}

Object.defineProperties(HTMLImageElement.prototype, {
  src: {
    get () {
      return this.getAttribute('src')
    },
    set (val) {
      this.setAttribute('src', val)
      // const url = path.resolve(this.ownerDocument.defaultView.location, val)
      // getFileBufferFromURL(url, (buffer) => {
      image_size__WEBPACK_IMPORTED_MODULE_0__(val, (err, size) => {
        if (err) {
          this.dispatchEvent(new _Event_js__WEBPACK_IMPORTED_MODULE_1__.Event('error'))
          return
        }
        this.naturalWidth = size.width
        this.naturalHeight = size.height
        this.complete = true
        this.dispatchEvent(new _Event_js__WEBPACK_IMPORTED_MODULE_1__.Event('load'))
      })
      // })
    }
  },
  height: {
    get () {
      return this.getAttribute('height') || this.naturalHeight
    },
    set (val) {
      this.setAttribute('height', val)
    }
  },
  width: {
    get () {
      return this.getAttribute('width') || this.naturalWidth
    },
    set (val) {
      this.setAttribute('width', val)
    }
  }
})


/***/ }),

/***/ "./src/dom/html/HTMLLinkElement.js":
/*!*****************************************!*\
  !*** ./src/dom/html/HTMLLinkElement.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLLinkElement": () => (/* binding */ HTMLLinkElement)
/* harmony export */ });
/* harmony import */ var _HTMLElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTMLElement.js */ "./src/dom/html/HTMLElement.js");


class HTMLLinkElement extends _HTMLElement_js__WEBPACK_IMPORTED_MODULE_0__.HTMLElement {}

Object.defineProperties(HTMLLinkElement.prototype, {
  href: {
    get () {
      return this.getAttribute('href')
    },
    set (val) {
      this.setAttribute('href', val)
    }
  },
  rel: {
    get () {
      return this.getAttribute('rel')
    },
    set (val) {
      this.setAttribute('rel', val)
    }
  },
  type: {
    get () {
      return this.getAttribute('type')
    },
    set (val) {
      this.setAttribute('type', val)
    }
  }
})


/***/ }),

/***/ "./src/dom/html/HTMLParser.js":
/*!************************************!*\
  !*** ./src/dom/html/HTMLParser.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLParser": () => (/* binding */ HTMLParser)
/* harmony export */ });
/* harmony import */ var sax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sax */ "sax");


// TODO: Its an XMLParser not HTMLParser!!
const HTMLParser = function (str, el) {
  let currentTag = el
  // const namespaces = { xmlns: el.getAttribute('xmlns') }
  let document = el.ownerDocument
  let cdata = null

  // sax expects a root element but we also missuse it to parse fragments
  if (el.nodeType !== el.DOCUMENT_NODE) {
    str = '<svgdom:wrapper xmlns:svgdom="svgdom:rocks">' + str + '</svgdom:wrapper>'
  } else {
    document = el
  }

  const parser = sax__WEBPACK_IMPORTED_MODULE_0__.parser(true, {
    // lowercase: true,
    xmlns: true,
    strictEntities: true
  })

  parser.onerror = (e) => {
    throw e
  }

  parser.ondoctype = (str) => {
    if (currentTag !== document) {
      throw new Error('Doctype can only be appended to document')
    }
    currentTag.appendChild(document.implementation.createDocumentType())
  }

  parser.ontext = (str) => currentTag.appendChild(document.createTextNode(str))
  parser.oncomment = (str) => currentTag.appendChild(document.createComment(str))

  // parser.onopennamespace = ns => {
  //   namespaces[ns.prefix] = ns.uri
  // }
  // parser.onclosenamespace = ns => {
  //   delete namespaces[ns.prefix]
  // }

  parser.onopentag = node => {
    if (node.name === 'svgdom:wrapper') return

    const attrs = node.attributes

    const uri = node.uri || currentTag.lookupNamespaceURI(node.prefix || null)

    var newElement = document.createElementNS(uri, node.name)

    for (const [ name, node ] of Object.entries(attrs)) {
      newElement.setAttributeNS(node.uri, name, node.value)
    }

    currentTag.appendChild(newElement)
    currentTag = newElement
  }

  parser.onclosetag = tagName => {
    if (tagName === 'svgdom:wrapper') return

    currentTag = currentTag.parentNode
  }

  parser.onopencdata = () => {
    cdata = document.createCDATASection('')
  }

  parser.oncdata = (str) => {
    cdata.appendData(str)
  }

  parser.onclosecdata = () => {
    currentTag.appendChild(cdata)
  }

  parser.write(str)
}


/***/ }),

/***/ "./src/dom/html/HTMLScriptElement.js":
/*!*******************************************!*\
  !*** ./src/dom/html/HTMLScriptElement.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTMLScriptElement": () => (/* binding */ HTMLScriptElement)
/* harmony export */ });
/* harmony import */ var _HTMLElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTMLElement.js */ "./src/dom/html/HTMLElement.js");


class HTMLScriptElement extends _HTMLElement_js__WEBPACK_IMPORTED_MODULE_0__.HTMLElement {}

Object.defineProperties(HTMLScriptElement.prototype, {
  src: {
    get () {
      return this.getAttribute('src')
    },
    set (val) {
      this.setAttribute('src', val)
    }
  },
  type: {
    get () {
      return this.getAttribute('type')
    },
    set (val) {
      this.setAttribute('type', val)
    }
  }
})


/***/ }),

/***/ "./src/dom/mixins/ChildNode.js":
/*!*************************************!*\
  !*** ./src/dom/mixins/ChildNode.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChildNode": () => (/* binding */ ChildNode)
/* harmony export */ });
/* harmony import */ var _utils_nodesToNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/nodesToNode.js */ "./src/utils/nodesToNode.js");


// https://dom.spec.whatwg.org/#interface-childnode
// Todo: check if this is contained in nodes or siblings are contained (viablePreviousSibling, viableNextSibling)
const ChildNode = {
  before (nodes) {
    if (!this.parentNode) return
    const node = (0,_utils_nodesToNode_js__WEBPACK_IMPORTED_MODULE_0__.nodesToNode)(nodes, this.ownerDocument)
    this.parent.insertBefore(node, this)
  },
  after (nodes) {
    if (!this.parentNode) return
    const node = (0,_utils_nodesToNode_js__WEBPACK_IMPORTED_MODULE_0__.nodesToNode)(nodes, this.ownerDocument)
    this.parent.insertBefore(node, this.nextSibling)
  },
  replaceWith (nodes) {
    if (!this.parentNode) return
    const next = this.nextSibling
    this.delete()
    const node = (0,_utils_nodesToNode_js__WEBPACK_IMPORTED_MODULE_0__.nodesToNode)(nodes)
    this.parent.insertBefore(node, next)
  },
  remove () {
    if (!this.parentNode) return
    this.parentNode.removeChild(this)
  }
}


/***/ }),

/***/ "./src/dom/mixins/NonDocumentTypeChildNode.js":
/*!****************************************************!*\
  !*** ./src/dom/mixins/NonDocumentTypeChildNode.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NonDocumentTypeChildNode": () => (/* binding */ NonDocumentTypeChildNode)
/* harmony export */ });
const NonDocumentTypeChildNode = {

}

Object.defineProperties(NonDocumentTypeChildNode, {
  previousElementSibling: {
    get () {
      let node
      while ((node = this.previousSibling)) {
        if (node.nodeType === node.ELEMENT_NODE) {
          return node
        }
      }
      return null
    }
  },

  nextElementSibling: {
    get () {
      let node
      while ((node = this.nextSibling)) {
        if (node.nodeType === node.ELEMENT_NODE) {
          return node
        }
      }
      return null
    }
  }
})


/***/ }),

/***/ "./src/dom/mixins/NonElementParentNode.js":
/*!************************************************!*\
  !*** ./src/dom/mixins/NonElementParentNode.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NonElementParentNode": () => (/* binding */ NonElementParentNode)
/* harmony export */ });
/* harmony import */ var _utils_NodeIterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/NodeIterator.js */ "./src/utils/NodeIterator.js");
/* harmony import */ var _NodeFilter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../NodeFilter.js */ "./src/dom/NodeFilter.js");



// https://dom.spec.whatwg.org/#interface-nonelementparentnode
const NonElementParentNode = {
  getElementById (id) {
    const iter = new _utils_NodeIterator_js__WEBPACK_IMPORTED_MODULE_0__.NodeIterator(this, _NodeFilter_js__WEBPACK_IMPORTED_MODULE_1__.NodeFilter.SHOW_ELEMENT, (node) => id === node.id ? _NodeFilter_js__WEBPACK_IMPORTED_MODULE_1__.NodeFilter.FILTER_ACCEPT : _NodeFilter_js__WEBPACK_IMPORTED_MODULE_1__.NodeFilter.FILTER_IGNORE, false)
    for (const node of iter) {
      return node
    }
    return null
  }
}


/***/ }),

/***/ "./src/dom/mixins/ParentNode.js":
/*!**************************************!*\
  !*** ./src/dom/mixins/ParentNode.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParentNode": () => (/* binding */ ParentNode)
/* harmony export */ });
/* harmony import */ var _other_CssQuery_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../other/CssQuery.js */ "./src/other/CssQuery.js");
/* harmony import */ var _utils_NodeIterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/NodeIterator.js */ "./src/utils/NodeIterator.js");
/* harmony import */ var _NodeFilter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../NodeFilter.js */ "./src/dom/NodeFilter.js");
/* harmony import */ var _utils_nodesToNode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/nodesToNode.js */ "./src/utils/nodesToNode.js");





// https://dom.spec.whatwg.org/#parentnode
const ParentNode = {
  matchWithScope (query, scope) {
    return new _other_CssQuery_js__WEBPACK_IMPORTED_MODULE_0__.CssQuery(query).matches(this, scope)
  },

  query (query, scope, single = false) {

    const iter = new _utils_NodeIterator_js__WEBPACK_IMPORTED_MODULE_1__.NodeIterator(scope, _NodeFilter_js__WEBPACK_IMPORTED_MODULE_2__.NodeFilter.SHOW_ELEMENT, (node) => node.matchWithScope(query, scope) ? _NodeFilter_js__WEBPACK_IMPORTED_MODULE_2__.NodeFilter.FILTER_ACCEPT : _NodeFilter_js__WEBPACK_IMPORTED_MODULE_2__.NodeFilter.FILTER_IGNORE, false)

    const nodes = []
    for (const node of iter) {
      nodes.push(node)
      if (single) return nodes
    }

    return nodes
  },

  querySelectorAll (query) {
    return this.query(query, this)
  },

  querySelector (query) {
    return this.query(query, this, true)[0] || null
  },

  prepend (nodes) {
    const node = (0,_utils_nodesToNode_js__WEBPACK_IMPORTED_MODULE_3__.nodesToNode)(nodes, this.ownerDocument)

    this.insertBefore(node, this.firstChild)
  },

  append (nodes) {
    const node = (0,_utils_nodesToNode_js__WEBPACK_IMPORTED_MODULE_3__.nodesToNode)(nodes, this.ownerDocument)
    this.appendChild(node)
  },

  replaceChildren (nodes) {
    while (this.firstChild) {
      this.removeChild(this.firstChild)
    }
    this.append(nodes)
  }
}

Object.defineProperties(ParentNode, {
  children: {
    get () {
      return this.childNodes.filter(function (node) { return node.nodeType === node.ELEMENT_NODE })
    }
  },
  firstElementChild: {
    get () {
      for (const node of this.childNodes) {
        if (node && node.nodeType === node.ELEMENT_NODE) {
          return node
        }
      }
      return null
    }
  },
  lastElementChild: {
    get () {
      for (const node of this.childNodes.slice().reverse()) {
        if (node && node.nodeType === node.ELEMENT_NODE) {
          return node
        }
      }
      return null
    }
  },
  childElementCount: {
    get () {
      return this.children.length
    }
  }
})




/***/ }),

/***/ "./src/dom/mixins/elementAccess.js":
/*!*****************************************!*\
  !*** ./src/dom/mixins/elementAccess.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "elementAccess": () => (/* binding */ elementAccess)
/* harmony export */ });
/* harmony import */ var _NodeFilter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../NodeFilter.js */ "./src/dom/NodeFilter.js");
/* harmony import */ var _utils_NodeIterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/NodeIterator.js */ "./src/utils/NodeIterator.js");



const hasClass = (node, name) => {
  const classList = node.className.split(/\s+/)
  return classList.includes(name)
}

const elementAccess = {
  getElementsByTagName (name) {
    // const document = this.ownerDocument
    const iter = new _utils_NodeIterator_js__WEBPACK_IMPORTED_MODULE_1__.NodeIterator(this, _NodeFilter_js__WEBPACK_IMPORTED_MODULE_0__.NodeFilter.SHOW_ELEMENT, (node) => node.nodeName === name ? _NodeFilter_js__WEBPACK_IMPORTED_MODULE_0__.NodeFilter.FILTER_ACCEPT : _NodeFilter_js__WEBPACK_IMPORTED_MODULE_0__.NodeFilter.FILTER_IGNORE, false)
    // const iter = document.createNodeIterator(this, 1, (node) => node.nodeName === name ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_IGNORE)
    return [ ...iter ]
  },

  getElementsByTagNameNS (ns, name) {
    // const document = this.ownerDocument
    const iter = new _utils_NodeIterator_js__WEBPACK_IMPORTED_MODULE_1__.NodeIterator(this, _NodeFilter_js__WEBPACK_IMPORTED_MODULE_0__.NodeFilter.SHOW_ELEMENT, (node) => node.isNamespace(ns) && node.nodeName === name ? _NodeFilter_js__WEBPACK_IMPORTED_MODULE_0__.NodeFilter.FILTER_ACCEPT : _NodeFilter_js__WEBPACK_IMPORTED_MODULE_0__.NodeFilter.FILTER_IGNORE, false)
    // const iter = document.createNodeIterator(this, 1, (node) => node.isNamespace(ns) && node.nodeName === name ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_IGNORE)
    return [ ...iter ]
  },

  getElementsByClassName (name) {
    // const document = this.ownerDocument
    const iter = new _utils_NodeIterator_js__WEBPACK_IMPORTED_MODULE_1__.NodeIterator(this, _NodeFilter_js__WEBPACK_IMPORTED_MODULE_0__.NodeFilter.SHOW_ELEMENT, (node) => hasClass(node, name) ? _NodeFilter_js__WEBPACK_IMPORTED_MODULE_0__.NodeFilter.FILTER_ACCEPT : _NodeFilter_js__WEBPACK_IMPORTED_MODULE_0__.NodeFilter.FILTER_IGNORE, false)
    // const iter = document.createNodeIterator(this, 1, (node) => hasClass(node, name) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_IGNORE)
    return [ ...iter ]
  }
}




/***/ }),

/***/ "./src/dom/svg/SVGElement.js":
/*!***********************************!*\
  !*** ./src/dom/svg/SVGElement.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SVGElement": () => (/* binding */ SVGElement)
/* harmony export */ });
/* harmony import */ var _Element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Element.js */ "./src/dom/Element.js");

class SVGElement extends _Element_js__WEBPACK_IMPORTED_MODULE_0__.Element {
  get ownerSVGElement () {
    let parent = this
    while ((parent = parent.parentNode)) {
      if ('svg' == parent.nodeName) {
        return parent
      }
    }
    return null
  }

  get viewportElement () {
    let parent = this
    while ((parent = parent.parentNode)) {
      // TODO: and others
      if ([ 'svg', 'symbol' ].includes(parent.nodeName)) {
        return parent
      }
    }
    return null
  }
}


/***/ }),

/***/ "./src/dom/svg/SVGGraphicsElement.js":
/*!*******************************************!*\
  !*** ./src/dom/svg/SVGGraphicsElement.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SVGGraphicsElement": () => (/* binding */ SVGGraphicsElement)
/* harmony export */ });
/* harmony import */ var _SVGElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SVGElement.js */ "./src/dom/svg/SVGElement.js");
/* harmony import */ var _utils_bboxUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/bboxUtils.js */ "./src/utils/bboxUtils.js");
/* harmony import */ var _utils_regex_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/regex.js */ "./src/utils/regex.js");
/* harmony import */ var _SVGMatrix_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SVGMatrix.js */ "./src/dom/svg/SVGMatrix.js");





// Map matrix array to object
function arrayToMatrix (a) {
  return { a: a[0], b: a[1], c: a[2], d: a[3], e: a[4], f: a[5] }
}

class SVGGraphicsElement extends _SVGElement_js__WEBPACK_IMPORTED_MODULE_0__.SVGElement {
  // TODO: https://www.w3.org/TR/SVG2/coords.html#ComputingAViewportsTransform
  generateViewBoxMatrix () {
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox
    if (![ 'marker', 'symbol', 'pattern', 'svg', 'view' ].includes(this.nodeName)) {
      return new _SVGMatrix_js__WEBPACK_IMPORTED_MODULE_3__.SVGMatrix()
    }

    let view = (this.getAttribute('viewBox') || '').split(_utils_regex_js__WEBPACK_IMPORTED_MODULE_2__.delimiter).map(parseFloat).filter(el => !isNaN(el))
    const width = parseFloat(this.getAttribute('width')) || 0
    const height = parseFloat(this.getAttribute('height')) || 0
    const x = parseFloat(this.getAttribute('x')) || 0
    const y = parseFloat(this.getAttribute('y')) || 0

    // TODO: If no width and height is given, width and height of the outer svg element is used
    if (!width || !height) {
      return new _SVGMatrix_js__WEBPACK_IMPORTED_MODULE_3__.SVGMatrix().translate(x, y)
    }

    if (view.length !== 4) {
      view = [ 0, 0, width, height ]
    }

    // first apply x and y if nested, then viewbox scale, then viewBox move
    return new _SVGMatrix_js__WEBPACK_IMPORTED_MODULE_3__.SVGMatrix().translate(x, y).scale(width / view[2], height / view[3]).translate(-view[0], -view[1])
  }

  getBBox () {
    return (0,_utils_bboxUtils_js__WEBPACK_IMPORTED_MODULE_1__.getSegments)(this).bbox()
  }

  // TODO: This method actually exists on all Elements
  getBoundingClientRect () {
    // The bounding client rect takes the screen ctm of the element
    // and converts the bounding box with it

    // however, normal bounding consists of:
    // - all children transformed
    // - the viewbox of the element if available

    // The boundingClientRect is not affected by its own viewbox
    // So we apply only our own transformations and parents screenCTM

    let m = this.matrixify()

    if (this.parentNode && this.parentNode.nodeName !== '#document') {
      m = this.parentNode.getScreenCTM().multiply(m)
    }

    // let m = this.getScreenCTM()

    // There are a few extra rules regarding rbox and the <svg> element
    // Namely this is:
    // BBox is calculated as normal for container elements
    // Rbox is calculated with the width and height of the <svg>
    // This could be also true for symbols so this is a:
    // Todo: ...
    return (0,_utils_bboxUtils_js__WEBPACK_IMPORTED_MODULE_1__.getSegments)(this, false, true).transform(m).bbox()
  }

  getCTM () {
    let m = this.matrixify()

    let node = this
    while ((node = node.parentNode)) {
      if ([ 'svg', 'symbol', 'image', 'pattern', 'marker' ].indexOf(node.nodeName) > -1) break
      m = m.multiply(node.matrixify())
      if (node.nodeName === '#document') return this.getScreenCTM()
    }

    return node.generateViewBoxMatrix().multiply(m)
  }

  getInnerMatrix () {
    let m = this.matrixify()

    if ([ 'svg', 'symbol', 'image', 'pattern', 'marker' ].indexOf(this.nodeName) > -1) {
      m = this.generateViewBoxMatrix().multiply(m)
    }
    return m
  }

  getScreenCTM () {
    // ref: https://bugzilla.mozilla.org/show_bug.cgi?id=1344537
    // We follow Chromes behavior and include the viewbox in the screenCTM
    const m = this.getInnerMatrix()

    // TODO: We have to loop until document, however html elements dont have getScreenCTM implemented
    // they also dont have a transform attribute. Therefore we need a different way of figuring out their (css) transform
    if (this.parentNode && this.parentNode instanceof SVGGraphicsElement) {
      return this.parentNode.getScreenCTM().multiply(m)
    }

    return m
  }

  matrixify () {
    const matrix = (this.getAttribute('transform') || '').trim()
      // split transformations
      .split(_utils_regex_js__WEBPACK_IMPORTED_MODULE_2__.transforms).slice(0, -1).map(function (str) {
        // generate key => value pairs
        const kv = str.trim().split('(')
        return [ kv[0].trim(), kv[1].split(_utils_regex_js__WEBPACK_IMPORTED_MODULE_2__.delimiter).map(function (str) { return parseFloat(str.trim()) }) ]
      })
      // merge every transformation into one matrix
      .reduce(function (matrix, transform) {

        if (transform[0] === 'matrix') return matrix.multiply(arrayToMatrix(transform[1]))
        return matrix[transform[0]].apply(matrix, transform[1])

      }, new _SVGMatrix_js__WEBPACK_IMPORTED_MODULE_3__.SVGMatrix())

    return matrix
  }

  get transform () {
    throw new Error('Not implemented')
  }

}


/***/ }),

/***/ "./src/dom/svg/SVGMatrix.js":
/*!**********************************!*\
  !*** ./src/dom/svg/SVGMatrix.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "matrixFactory": () => (/* binding */ matrixFactory),
/* harmony export */   "SVGMatrix": () => (/* binding */ SVGMatrix)
/* harmony export */ });
const radians = function (d) {
  return d % 360 * Math.PI / 180
}

function matrixFactory (a, b, c, d, e, f) {
  var r = new SVGMatrix()
  r.a = a
  r.b = b
  r.c = c
  r.d = d
  r.e = e
  r.f = f
  return r
}

class SVGMatrix {
  constructor () {
    this.a = this.d = 1
    this.b = this.c = this.e = this.f = 0
  }

  inverse () {
    // Get the current parameters out of the matrix
    var a = this.a
    var b = this.b
    var c = this.c
    var d = this.d
    var e = this.e
    var f = this.f

    // Invert the 2x2 matrix in the top left
    var det = a * d - b * c
    if (!det) throw new Error('Cannot invert ' + this)

    // Calculate the top 2x2 matrix
    var na = d / det
    var nb = -b / det
    var nc = -c / det
    var nd = a / det

    // Apply the inverted matrix to the top right
    var ne = -(na * e + nc * f)
    var nf = -(nb * e + nd * f)

    // Construct the inverted matrix
    this.a = na
    this.b = nb
    this.c = nc
    this.d = nd
    this.e = ne
    this.f = nf

    return this
  }

  multiply (m) {
    var r = new SVGMatrix()
    r.a = this.a * m.a + this.c * m.b + this.e * 0
    r.b = this.b * m.a + this.d * m.b + this.f * 0
    r.c = this.a * m.c + this.c * m.d + this.e * 0
    r.d = this.b * m.c + this.d * m.d + this.f * 0
    r.e = this.a * m.e + this.c * m.f + this.e * 1
    r.f = this.b * m.e + this.d * m.f + this.f * 1
    return r
  }

  rotate (r, x, y) {
    r = r % 360 * Math.PI / 180
    return this.multiply(matrixFactory(
      Math.cos(r),
      Math.sin(r),
      -Math.sin(r),
      Math.cos(r),
      x ? -Math.cos(r) * x + Math.sin(r) * y + x : 0,
      y ? -Math.sin(r) * x - Math.cos(r) * y + y : 0
    ))
  }

  scale (scaleX, scaleY = scaleX) {
    return this.multiply(matrixFactory(scaleX, 0, 0, scaleY, 0, 0))
  }

  skew (x, y) {
    return this.multiply(matrixFactory(1, Math.tan(radians(y)), Math.tan(radians(x)), 1, 0, 0))
  }

  skewX (x) {
    return this.skew(x, 0)
  }

  skewY (y) {
    return this.skew(0, y)
  }

  toString () {
    return 'SVGMatrix'
  }

  translate (x = 0, y = 0) {
    return this.multiply(matrixFactory(1, 0, 0, 1, x, y))
  }

}


/***/ }),

/***/ "./src/dom/svg/SVGPathElement.js":
/*!***************************************!*\
  !*** ./src/dom/svg/SVGPathElement.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SVGPathElement": () => (/* binding */ SVGPathElement)
/* harmony export */ });
/* harmony import */ var _SVGGraphicsElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SVGGraphicsElement.js */ "./src/dom/svg/SVGGraphicsElement.js");
/* harmony import */ var _utils_pathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/pathUtils.js */ "./src/utils/pathUtils.js");



class SVGPathElement extends _SVGGraphicsElement_js__WEBPACK_IMPORTED_MODULE_0__.SVGGraphicsElement {
  getPointAtLength (len) {
    return _utils_pathUtils_js__WEBPACK_IMPORTED_MODULE_1__.pointAtLength(this.getAttribute('d'), len)
  }

  getTotalLength () {
    return _utils_pathUtils_js__WEBPACK_IMPORTED_MODULE_1__.length(this.getAttribute('d'))
  }
}


/***/ }),

/***/ "./src/dom/svg/SVGPoint.js":
/*!*********************************!*\
  !*** ./src/dom/svg/SVGPoint.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SVGPoint": () => (/* binding */ SVGPoint)
/* harmony export */ });
class SVGPoint {
  constructor () {
    this.x = 0
    this.y = 0
  }

  matrixTransform (m) {
    var r = new SVGPoint()
    r.x = m.a * this.x + m.c * this.y + m.e * 1
    r.y = m.b * this.x + m.d * this.y + m.f * 1
    return r
  }
}


/***/ }),

/***/ "./src/dom/svg/SVGSVGElement.js":
/*!**************************************!*\
  !*** ./src/dom/svg/SVGSVGElement.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SVGSVGElement": () => (/* binding */ SVGSVGElement)
/* harmony export */ });
/* harmony import */ var _SVGGraphicsElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SVGGraphicsElement.js */ "./src/dom/svg/SVGGraphicsElement.js");
/* harmony import */ var _other_Box_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../other/Box.js */ "./src/other/Box.js");
/* harmony import */ var _SVGMatrix_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SVGMatrix.js */ "./src/dom/svg/SVGMatrix.js");
/* harmony import */ var _SVGPoint_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SVGPoint.js */ "./src/dom/svg/SVGPoint.js");





class SVGSVGElement extends _SVGGraphicsElement_js__WEBPACK_IMPORTED_MODULE_0__.SVGGraphicsElement {
  createSVGMatrix () {
    return new _SVGMatrix_js__WEBPACK_IMPORTED_MODULE_2__.SVGMatrix()
  }

  createSVGPoint () {
    return new _SVGPoint_js__WEBPACK_IMPORTED_MODULE_3__.SVGPoint()
  }

  createSVGRect () {
    return new _other_Box_js__WEBPACK_IMPORTED_MODULE_1__.Box()
  }

}


/***/ }),

/***/ "./src/dom/svg/SVGTextContentElement.js":
/*!**********************************************!*\
  !*** ./src/dom/svg/SVGTextContentElement.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SVGTextContentElement": () => (/* binding */ SVGTextContentElement)
/* harmony export */ });
/* harmony import */ var _SVGGraphicsElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SVGGraphicsElement.js */ "./src/dom/svg/SVGGraphicsElement.js");


class SVGTextContentElement extends _SVGGraphicsElement_js__WEBPACK_IMPORTED_MODULE_0__.SVGGraphicsElement {
  getComputedTextLength () {
    return this.getBBox().width
  }
}


/***/ }),

/***/ "./src/factories.js":
/*!**************************!*\
  !*** ./src/factories.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDocument": () => (/* binding */ createDocument),
/* harmony export */   "createHTMLDocument": () => (/* binding */ createHTMLDocument),
/* harmony export */   "createSVGDocument": () => (/* binding */ createSVGDocument),
/* harmony export */   "createWindow": () => (/* binding */ createWindow),
/* harmony export */   "createHTMLWindow": () => (/* binding */ createHTMLWindow),
/* harmony export */   "createSVGWindow": () => (/* binding */ createSVGWindow)
/* harmony export */ });
/* harmony import */ var _dom_Window_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/Window.js */ "./src/dom/Window.js");
/* harmony import */ var _dom_Document_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/Document.js */ "./src/dom/Document.js");
/* harmony import */ var _utils_namespaces_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/namespaces.js */ "./src/utils/namespaces.js");




const { createDocument, createHTMLDocument } = _dom_Document_js__WEBPACK_IMPORTED_MODULE_1__.DOMImplementation

const createWindow = (...args) => {
  const window = new _dom_Window_js__WEBPACK_IMPORTED_MODULE_0__.Window()
  const document = createDocument(...args)
  window.document = document
  document.defaultView = window
  return window
}

const createHTMLWindow = (title) => {
  const window = new _dom_Window_js__WEBPACK_IMPORTED_MODULE_0__.Window()
  const document = _dom_Document_js__WEBPACK_IMPORTED_MODULE_1__.DOMImplementation.createHTMLDocument(title)
  window.document = document
  document.defaultView = window
  return window
}

const createSVGWindow = () => {
  return createWindow(_utils_namespaces_js__WEBPACK_IMPORTED_MODULE_2__.svg, 'svg')
}

const createSVGDocument = () => {
  return createDocument(_utils_namespaces_js__WEBPACK_IMPORTED_MODULE_2__.svg, 'svg')
}




/***/ }),

/***/ "./src/other/Box.js":
/*!**************************!*\
  !*** ./src/other/Box.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Box": () => (/* binding */ Box),
/* harmony export */   "NoBox": () => (/* binding */ NoBox)
/* harmony export */ });
/* harmony import */ var _utils_regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/regex.js */ "./src/utils/regex.js");
/* harmony import */ var _Point_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Point.js */ "./src/other/Point.js");



class Box {
  constructor (source) {
    var base = [ 0, 0, 0, 0 ]
    source = typeof source === 'string' ? source.split(_utils_regex_js__WEBPACK_IMPORTED_MODULE_0__.delimiter).map(parseFloat)
      : Array.isArray(source) ? source
      : typeof source === 'object' ? [
        source.left != null ? source.left : source.x,
        source.top != null ? source.top : source.y,
        source.width,
        source.height
      ]
      : arguments.length === 4 ? [].slice.call(arguments)
      : base

    this.x = this.left = source[0]
    this.y = this.top = source[1]
    this.width = source[2]
    this.height = source[3]
    this.right = this.left + this.width
    this.bottom = this.top + this.height
  }

  // Merge rect box with another, return a new instance
  merge (box) {
    if (box instanceof NoBox) return new Box(this)

    var x = Math.min(this.x, box.x)
    var y = Math.min(this.y, box.y)

    return new Box(
      x, y,
      Math.max(this.x + this.width, box.x + box.width) - x,
      Math.max(this.y + this.height, box.y + box.height) - y
    )
  }

  transform (m) {
    var xMin = Infinity
    var xMax = -Infinity
    var yMin = Infinity
    var yMax = -Infinity

    var pts = [
      new _Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(this.x, this.y),
      new _Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(this.x + this.width, this.y),
      new _Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(this.x, this.y + this.height),
      new _Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(this.x + this.width, this.y + this.height)
    ]

    pts.forEach(function (p) {
      p = p.transform(m)
      xMin = Math.min(xMin, p.x)
      xMax = Math.max(xMax, p.x)
      yMin = Math.min(yMin, p.y)
      yMax = Math.max(yMax, p.y)
    })

    return new Box(
      xMin, yMin,
      xMax - xMin,
      yMax - yMin
    )
  }
}

class NoBox extends Box {
  // NoBox has no valid values so it cant be merged
  merge (box) {
    return box instanceof NoBox ? new NoBox() : new Box(box)
  }

  transform (m) {
    return new NoBox()
  }
}


/***/ }),

/***/ "./src/other/CssQuery.js":
/*!*******************************!*\
  !*** ./src/other/CssQuery.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CssQuery": () => (/* binding */ CssQuery)
/* harmony export */ });
/* harmony import */ var _utils_strUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/strUtils.js */ "./src/utils/strUtils.js");
/* harmony import */ var _utils_regex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/regex.js */ "./src/utils/regex.js");
/* harmony import */ var _utils_namespaces_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/namespaces.js */ "./src/utils/namespaces.js");




class CssQuery {
  constructor (query) {
    if (CssQuery.cache.has(query)) {
      this.queries = CssQuery.cache.get(query)
      return
    }

    var queries = (0,_utils_strUtils_js__WEBPACK_IMPORTED_MODULE_0__.splitNotInBrackets)(query, ',')

    queries = queries.map(query => {

      var roundBrackets = 0
      var squareBrackets = 0

      // this is the same as above but easier
      query = query.replace(/[()[\]>~+]/g, function (ch) {
        if (ch === '(') ++roundBrackets
        else if (ch === ')') --roundBrackets
        else if (ch === '[') ++squareBrackets
        else if (ch === ']') --squareBrackets

        if ('()[]'.indexOf(ch) > -1) return ch
        if (squareBrackets || roundBrackets) return ch

        return ' ' + ch + ' '
      })

      // split at space and remove empty results
      query = (0,_utils_strUtils_js__WEBPACK_IMPORTED_MODULE_0__.splitNotInBrackets)(query, ' ').filter(el => !!el.length)

      var pairs = []

      var relation = '%'

      // generate querynode relation tuples
      for (var i = 0, il = query.length; i < il; ++i) {

        if ('>~+%'.indexOf(query[i]) > -1) {
          relation = query[i]
          continue
        }

        pairs.push([ relation, query[i] ])
        relation = '%'

      }

      return pairs

    })

    this.queries = queries

    // to prevent memory leaks we have to manage our cache.
    // we delete everything which is older than 50 entries
    if (CssQuery.cacheKeys.length > 50) {
      CssQuery.cache.delete(CssQuery.cacheKeys.shift())
    }
    CssQuery.cache.set(query, queries)
    CssQuery.cacheKeys.push(query)

  }

  matches (node, scope) {
    for (var i = this.queries.length; i--;) {
      if (this.matchHelper(this.queries[i], node, scope)) {
        return true
      }
    }
    return false
  }

  matchHelper (query, node, scope) {
    query = query.slice()
    var last = query.pop()

    if (!new CssQueryNode(last[1]).matches(node, scope)) { return false }

    if (!query.length) return true

    if (last[0] === ',') return true

    if (last[0] === '+') {
      return !!node.previousSibling && this.matchHelper(query, node.previousSibling, scope)
    }

    if (last[0] === '>') {
      return !!node.parentNode && this.matchHelper(query, node.parentNode, scope)
    }

    if (last[0] === '~') {
      while ((node = node.previousSibling)) {
        if (this.matchHelper(query, node, scope)) { return true }
      }
      return false
    }

    if (last[0] === '%') {
      while ((node = node.parentNode)) {
        if (this.matchHelper(query, node, scope)) { return true }
      }
      return false
    }

  }
}

CssQuery.cache = new Map()
CssQuery.cacheKeys = []

// check if [node] is the [nth] child of [arr] where nth can also be a formula
const nth = (node, arr, nth) => {

  if (nth === 'even') nth = '2n'
  else if (nth === 'odd') nth = '2n+1'

  // check for eval chars
  if (/[^\d\-n+*/]+/.test(nth)) return false

  nth = nth.replace('n', '*n')

  // eval nth to get the index
  for (var i, n = 0, nl = arr.length; n < nl; ++n) {
    /* eslint no-eval: off */
    i = eval(nth)

    if (i > nl) break
    if (arr[i - 1] === node) return true
  }

  return false
}

const lower = a => a.toLowerCase()

// checks if a and b are equal. Is insensitive when i is true
const eq = (a, b, i) => i ? lower(a) === lower(b) : a === b

// [i] (prebound) is true if insensitive matching is required
// [a] (prebound) is the value the attr is compared to
// [b] (passed)   is the value of the attribute
const attributeMatcher = {
  '=': (i, a, b) => eq(a, b, i),
  '~=': (i, a, b) => b.split(_utils_regex_js__WEBPACK_IMPORTED_MODULE_1__.delimiter).filter(el => eq(el, a, i)).length > 0,
  '|=': (i, a, b) => eq(b.split(_utils_regex_js__WEBPACK_IMPORTED_MODULE_1__.delimiter)[0], a, i),
  '^=': (i, a, b) => i ? lower(b).startsWith(lower(a)) : b.startsWith(a),
  '$=': (i, a, b) => i ? lower(b).endsWith(lower(a)) : b.endsWith(a),
  '*=': (i, a, b) => i ? lower(b).includes(lower(a)) : b.includes(a),
  '*': (i, a, b) => b != null
}

const getAttributeValue = (prefix, name, node) => {
  if (!prefix || prefix === '*') {
    return node.getAttribute(name)
  }
  return node.getAttribute(prefix + ':' + name)
}

// [a] (prebound) [a]rgument of the pseudo selector
// [n] (passed)   [n]ode
// [s] (passed)   [s]cope - the element this query is scoped to
const pseudoMatcher = {
  'first-child': (a, n) => n.parentNode && n.parentNode.firstChild === n,
  'last-child': (a, n) => n.parentNode && n.parentNode.lastChild === n,
  'nth-child': (a, n) => n.parentNode && nth(n, n.parentNode.childNodes, a),
  'nth-last-child': (a, n) => n.parentNode && nth(n, n.parentNode.childNodes.slice().reverse(), a),
  'first-of-type': (a, n) => n.parentNode && n.parentNode.childNodes.filter(el => el.nodeName === n.nodeName)[0] === n,
  'last-of-type': (a, n) => n.parentNode && n.parentNode.childNodes.filter(el => el.nodeName === n.nodeName).pop() === n,
  'nth-of-type': (a, n) => n.parentNode && nth(n, n.parentNode.childNodes.filter(el => el.nodeName === n.nodeName), a),
  'nth-last-of-type': (a, n) => n.parentNode && nth(n, n.parentNode.childNodes.filter(el => el.nodeName === n.nodeName).reverse(), a),
  'only-child': (a, n) => n.parentNode && n.parentNode.childNodes.length === 1,
  'only-of-type': (a, n) => n.parentNode && n.parentNode.childNodes.filter(el => el.nodeName === n.nodeName).length === 1,
  root: (a, n) => n.ownerDocument.documentElement === n,
  not: (a, n, s) => !(new CssQuery(a)).matches(n, s),
  matches: (a, n, s) => (new CssQuery(a)).matches(n, s),
  scope: (a, n, s) => n === s
}

class CssQueryNode {
  constructor (node) {
    this.tag = ''
    this.id = ''
    this.classList = []
    this.attrs = []
    this.pseudo = []

    // match the tag name
    var matches = node.match(/^[\w-]+|^\*/)
    if (matches) {
      this.tag = matches[0]
      node = node.slice(this.tag.length)
    }

    // match pseudo classes
    while ((matches = /:([\w-]+)(?:\((.+)\))?/g.exec(node))) {
      this.pseudo.push(pseudoMatcher[matches[1]].bind(this, (0,_utils_strUtils_js__WEBPACK_IMPORTED_MODULE_0__.removeQuotes)(matches[2] || '')))
      node = node.slice(0, matches.index) + node.slice(matches.index + matches[0].length)
    }

    // match the id
    matches = node.match(/#([\w-]+)/)
    if (matches) {
      this.id = matches[1]
      node = node.slice(0, matches.index) + node.slice(matches.index + matches[0].length)
    }

    // match classes
    while ((matches = /\.([\w-]+)/g.exec(node))) {
      this.classList.push(matches[1])
      node = node.slice(0, matches.index) + node.slice(matches.index + matches[0].length)
    }

    // match attributes
    while ((matches = /\[([\w-*]+\|)?([\w-]+)(([=^~$|*]+)(.+?)( +[iI])?)?\]/g.exec(node))) {
      const prefix = matches[1] ? matches[1].split('|')[0] : null
      this.attrs.push({
        name: matches[2],
        getValue: getAttributeValue.bind(this, prefix, matches[2]),
        matcher: attributeMatcher[matches[4] || '*'].bind(
          this,
          !!matches[6], // case insensitive yes/no
          (0,_utils_strUtils_js__WEBPACK_IMPORTED_MODULE_0__.removeQuotes)((matches[5] || '').trim()) // attribute value
        )
      })
      node = node.slice(0, matches.index) + node.slice(matches.index + matches[0].length)
    }
  }

  matches (node, scope) {
    var i

    if (node.nodeType !== 1) return false

    // Always this extra code for html -.-
    if (node.namespaceURI === _utils_namespaces_js__WEBPACK_IMPORTED_MODULE_2__.html) {
      this.tag = this.tag.toUpperCase()
    }

    if (this.tag && this.tag !== node.nodeName && this.tag !== '*') { return false }

    if (this.id && this.id !== node.id) {
      return false
    }

    var classList = (node.getAttribute('class') || '').split(_utils_regex_js__WEBPACK_IMPORTED_MODULE_1__.delimiter).filter(el => !!el.length)
    if (this.classList.filter(className => classList.indexOf(className) < 0).length) {
      return false
    }

    for (i = this.attrs.length; i--;) {
      var attrValue = this.attrs[i].getValue(node)
      if (attrValue === null || !this.attrs[i].matcher(attrValue)) {
        return false
      }
    }

    for (i = this.pseudo.length; i--;) {
      if (!this.pseudo[i](node, scope)) {
        return false
      }
    }

    return true
  }

}


/***/ }),

/***/ "./src/other/Point.js":
/*!****************************!*\
  !*** ./src/other/Point.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Point": () => (/* binding */ Point)
/* harmony export */ });
/* harmony import */ var _dom_svg_SVGPoint_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom/svg/SVGPoint.js */ "./src/dom/svg/SVGPoint.js");


class Point {
  // Initialize
  constructor (x, y) {
    const base = { x: 0, y: 0 }

    // ensure source as object
    const source = Array.isArray(x)
      ? { x: x[0], y: x[1] }
      : typeof x === 'object'
        ? { x: x.x, y: x.y }
        : x != null
          ? { x: x, y: (y != null ? y : x) }
          : base // If y has no value, then x is used has its value

    // merge source
    this.x = source.x
    this.y = source.y
  }

  abs () {
    return Math.sqrt(this.absQuad())
  }

  absQuad () {
    return this.x * this.x + this.y * this.y
  }

  add (x, y) {
    const p = new Point(x, y)
    return new Point(this.x + p.x, this.y + p.y)
  }

  angleTo (p) {
    let sign = Math.sign(this.x * p.y - this.y * p.x)
    sign = sign || 1
    return sign * Math.acos(Math.round((this.dot(p) / (this.abs() * p.abs())) * 1000000) / 1000000)
  }

  // Clone point
  clone () {
    return new Point(this)
  }

  closeTo (p, eta = 0.00001) {
    return this.equals(p) || (Math.abs(this.x - p.x) < eta && Math.abs(this.y - p.y) < eta)
  }

  div (factor) {
    return new Point(this.x / factor, this.y / factor)
  }

  dot (p) {
    return this.x * p.x + this.y * p.y
  }

  equals (p) {
    return this.x === p.x && this.y === p.y
  }

  mul (factor) {
    return new Point(this.x * factor, this.y * factor)
  }

  // Convert to native SVGPoint
  native () {
    // create new point
    const point = new _dom_svg_SVGPoint_js__WEBPACK_IMPORTED_MODULE_0__.SVGPoint()

    // update with current values
    point.x = this.x
    point.y = this.y

    return point
  }

  normal () {
    return new Point(this.y, -this.x)
  }

  normalize () {
    const abs = this.abs()
    if (!abs) throw new Error('Can\'t normalize vector of zero length')
    return this.div(abs)
  }

  reflectAt (p) {
    return p.add(p.sub(this))
  }

  sub (x, y) {
    const p = new Point(x, y)
    return new Point(this.x - p.x, this.y - p.y)
  }

  toArray () {
    return [ this.x, this.y ]
  }

  toPath () {
    return [ 'M', this.x, this.y ].join(' ')
  }

  // transform point with matrix
  transform (matrix) {
    return new Point(this.native().matrixTransform(matrix))
  }

  transformO (matrix) {
    const { x, y } = this.native().matrixTransform(matrix)
    this.x = x
    this.y = y
  }

}


/***/ }),

/***/ "./src/utils/NodeIterator.js":
/*!***********************************!*\
  !*** ./src/utils/NodeIterator.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NodeIterator": () => (/* binding */ NodeIterator)
/* harmony export */ });
/* harmony import */ var _dom_NodeFilter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom/NodeFilter.js */ "./src/dom/NodeFilter.js");


const showThisNode = (whatToShow, node) => {
  if (whatToShow === _dom_NodeFilter_js__WEBPACK_IMPORTED_MODULE_0__.NodeFilter.SHOW_ALL) return true
  if (whatToShow & _dom_NodeFilter_js__WEBPACK_IMPORTED_MODULE_0__.NodeFilter.SHOW_ELEMENT && node.nodeType === node.ELEMENT_NODE) return true
  if (whatToShow & _dom_NodeFilter_js__WEBPACK_IMPORTED_MODULE_0__.NodeFilter.SHOW_TEXT && node.nodeType === node.TEXT_NODE) return true
  if (whatToShow & _dom_NodeFilter_js__WEBPACK_IMPORTED_MODULE_0__.NodeFilter.SHOW_ENTITY_REFERENCE && node.nodeType === node.ENTITY_REFERENCE_NODE) return true
  if (whatToShow & _dom_NodeFilter_js__WEBPACK_IMPORTED_MODULE_0__.NodeFilter.SHOW_ENTITY && node.nodeType === node.ENTITY_NODE) return true
  if (whatToShow & _dom_NodeFilter_js__WEBPACK_IMPORTED_MODULE_0__.NodeFilter.SHOW_PROCESSING_INSTRUCTION && node.nodeType === node.PROCESSING_INSTRUCTION_NODE) return true
  if (whatToShow & _dom_NodeFilter_js__WEBPACK_IMPORTED_MODULE_0__.NodeFilter.SHOW_COMMENT && node.nodeType === node.COMMENT_NODE) return true
  if (whatToShow & _dom_NodeFilter_js__WEBPACK_IMPORTED_MODULE_0__.NodeFilter.SHOW_DOCUMENT && node.nodeType === node.DOCUMENT_NODE) return true
  if (whatToShow & _dom_NodeFilter_js__WEBPACK_IMPORTED_MODULE_0__.NodeFilter.SHOW_DOCUMENT_TYPE && node.nodeType === node.DOCUMENT_TYPE_NODE) return true
  if (whatToShow & _dom_NodeFilter_js__WEBPACK_IMPORTED_MODULE_0__.NodeFilter.SHOW_DOCUMENT_FRAGMENT && node.nodeType === node.DOCUMENT_FRAGMENT_NODE) return true
  if (whatToShow & _dom_NodeFilter_js__WEBPACK_IMPORTED_MODULE_0__.NodeFilter.SHOW_NOTATION && node.nodeType === node.NOTATION_NODE) return true
  return false
}

class NodeIterator {
  constructor (root, whatToShow = _dom_NodeFilter_js__WEBPACK_IMPORTED_MODULE_0__.NodeFilter.SHOW_ALL, filter = () => _dom_NodeFilter_js__WEBPACK_IMPORTED_MODULE_0__.NodeFilter.FILTER_ACCEPT, includeParent = true) {
    this.root = includeParent ? { childNodes: [ root ] } : root
    this.whatToShow = whatToShow
    this.filter = filter
  }

  * [Symbol.iterator] () {
    const nodes = this.root.childNodes

    for (const node of nodes) {
      if (!showThisNode(this.whatToShow, node)) continue

      const filterRet = this.filter(node)

      if (filterRet === _dom_NodeFilter_js__WEBPACK_IMPORTED_MODULE_0__.NodeFilter.FILTER_REJECT) continue
      if (filterRet === _dom_NodeFilter_js__WEBPACK_IMPORTED_MODULE_0__.NodeFilter.FILTER_ACCEPT) {
        yield node
      }

      yield * new NodeIterator(node, this.whatToShow, this.filter, false)
    }

    return this
  }
}


/***/ }),

/***/ "./src/utils/PointCloud.js":
/*!*********************************!*\
  !*** ./src/utils/PointCloud.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PointCloud": () => (/* binding */ PointCloud)
/* harmony export */ });
/* harmony import */ var _other_Box_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../other/Box.js */ "./src/other/Box.js");


class PointCloud extends Array {
  constructor (...args) {
    if (args.length === 1 && typeof args[0] === 'number') {
      super(args.shift())
    } else {
      super()
    }

    // except multiple point arrays as input and merge them into one
    args.reduce((last, curr) => {
      last.push(...curr)
      return this
    }, this)
  }

  bbox () {
    if (!this.length) {
      return new _other_Box_js__WEBPACK_IMPORTED_MODULE_0__.NoBox()
    }

    let xMin = Infinity
    let xMax = -Infinity
    let yMin = Infinity
    let yMax = -Infinity

    this.forEach(function (p) {
      xMin = Math.min(xMin, p.x)
      xMax = Math.max(xMax, p.x)
      yMin = Math.min(yMin, p.y)
      yMax = Math.max(yMax, p.y)
    })

    return new _other_Box_js__WEBPACK_IMPORTED_MODULE_0__.Box(
      xMin, yMin,
      xMax - xMin,
      yMax - yMin
    )
  }

  merge (cloud) {
    return new PointCloud(this, cloud)
  }

  transform (m) {
    return new PointCloud(this.map((p) => p.transform(m)))
  }

}


/***/ }),

/***/ "./src/utils/bboxUtils.js":
/*!********************************!*\
  !*** ./src/utils/bboxUtils.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSegments": () => (/* binding */ getSegments)
/* harmony export */ });
/* harmony import */ var _pathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pathUtils.js */ "./src/utils/pathUtils.js");
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./regex.js */ "./src/utils/regex.js");
/* harmony import */ var _textUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./textUtils.js */ "./src/utils/textUtils.js");
/* harmony import */ var _other_Box_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../other/Box.js */ "./src/other/Box.js");
/* harmony import */ var _NodeIterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NodeIterator.js */ "./src/utils/NodeIterator.js");
/* harmony import */ var _dom_NodeFilter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom/NodeFilter.js */ "./src/dom/NodeFilter.js");







const applyTransformation = (segments, node, applyTransformations) => {
  if (node.matrixify && applyTransformations) {
    return segments.transform(node.matrixify())
  }
  return segments
}

const getSegments = (node, applyTransformations, rbox = false) => {
  const segments = getPathSegments(node, rbox)
  return applyTransformation(segments, node, applyTransformations)
}

const getPathSegments = (node, rbox) => {
  if (node.nodeType !== 1) return new _pathUtils_js__WEBPACK_IMPORTED_MODULE_0__.PathSegmentArray()

  switch (node.nodeName) {
  case 'rect':
  case 'image':
  case 'pattern':
  case 'mask':
  case 'foreignObject':
    // Create Path from rect and create PointCloud from Path
    return _pathUtils_js__WEBPACK_IMPORTED_MODULE_0__.getPathSegments(_pathUtils_js__WEBPACK_IMPORTED_MODULE_0__.pathFrom.rect(node))
  case 'svg':
  case 'symbol':
    // return pathUtils.getPathSegments(pathUtils.pathFrom.rect(node))
    if (rbox) {
      return _pathUtils_js__WEBPACK_IMPORTED_MODULE_0__.getPathSegments(_pathUtils_js__WEBPACK_IMPORTED_MODULE_0__.pathFrom.rect(node))
    }
  // ATTENTION: FALL THROUGH
  // Because normal bbox is calculated by the content of the element and not its width and height
  // eslint-disable-next-line
  case 'g':
  case 'clipPath':
  case 'a':
  case 'marker':
    // Iterate trough all children and get the point cloud of each
    // Then transform it with viewbox matrix if needed
    return node.childNodes.reduce((segments, child) => {
      if (!child.matrixify) return segments
      return segments.merge(getSegments(child, true).transform(child.generateViewBoxMatrix()))
    }, new _pathUtils_js__WEBPACK_IMPORTED_MODULE_0__.PathSegmentArray())
  case 'circle':
    return _pathUtils_js__WEBPACK_IMPORTED_MODULE_0__.getPathSegments(_pathUtils_js__WEBPACK_IMPORTED_MODULE_0__.pathFrom.circle(node))
  case 'ellipse':
    return _pathUtils_js__WEBPACK_IMPORTED_MODULE_0__.getPathSegments(_pathUtils_js__WEBPACK_IMPORTED_MODULE_0__.pathFrom.ellipse(node))
  case 'line':
    return _pathUtils_js__WEBPACK_IMPORTED_MODULE_0__.getPathSegments(_pathUtils_js__WEBPACK_IMPORTED_MODULE_0__.pathFrom.line(node))
  case 'polyline':
  case 'polygon':
    return _pathUtils_js__WEBPACK_IMPORTED_MODULE_0__.getPathSegments(_pathUtils_js__WEBPACK_IMPORTED_MODULE_0__.pathFrom.polyline(node))
  case 'path':
  case 'glyph':
  case 'missing-glyph':
    return _pathUtils_js__WEBPACK_IMPORTED_MODULE_0__.getPathSegments(node.getAttribute('d'))
  case 'use': {
    // Get reference from element
    const ref = node.getAttribute('href') || node.getAttribute('xlink:href')
    // Get the actual referenced Node
    const refNode = node.getRootNode().querySelector(ref)
    // Get the BBox of the referenced element and apply the viewbox of <use>
    // TODO: Do we need to apply the transformations of the element?
    // Check bbox of transformed element which is reused with <use>
    return getSegments(refNode).transform(node.generateViewBoxMatrix())
  }
  case 'tspan':
  case 'text':
  case 'altGlyph': {
    const box = getTextBBox(node)

    if (box instanceof _other_Box_js__WEBPACK_IMPORTED_MODULE_3__.NoBox) {
      return new _pathUtils_js__WEBPACK_IMPORTED_MODULE_0__.PathSegmentArray()
    }

    return _pathUtils_js__WEBPACK_IMPORTED_MODULE_0__.getPathSegments(_pathUtils_js__WEBPACK_IMPORTED_MODULE_0__.pathFrom.box(box))
  }
  default:
    return new _pathUtils_js__WEBPACK_IMPORTED_MODULE_0__.PathSegmentArray()
  }
}

const getTextBBox = (node) => {
  const textRoot = findTextRoot(node)
  const boxes = getTextBBoxes(node, textRoot)
  return boxes.filter(isNotEmptyBox).reduce((last, curr) => last.merge(curr), new _other_Box_js__WEBPACK_IMPORTED_MODULE_3__.NoBox())
}

const findTextRoot = (node) => {
  while (node.parentNode) {
    if ((node.nodeName === 'text' && node.parentNode.nodeName === 'text')
    || ((node.nodeName === 'tspan' || node.nodeName === 'textPath') && [ 'tspan', 'text', 'textPath' ].includes(node.parentNode.nodeName))) {
      node = node.parentNode
    } else {
      break
    }
  }

  return node
}

// This function takes a node of which the bbox needs to be calculated
// In order to position the box correctly, we need to know were the parent and were the siblings *before* our node are
// Thats why a textRoot is passed which is the most outer textElement needed to calculate all boxes
// When the iterator hits the element we need the bbox of, it is terminated and this function is called again
// only for the substree of our node and without textRoor but instead pos, dx and dy are known
const getTextBBoxes = function (target, textRoot = target, pos = { x: 0, y: 0 }, dx = [ 0 ], dy = [ 0 ], boxes = []) {

  // Create NodeIterator. Only show elemnts and text and skip descriptive elements
  // TODO: make an instanceof check for DescriptiveElement instead of testing one by one
  // Only title is skipped atm
  const iter = new _NodeIterator_js__WEBPACK_IMPORTED_MODULE_4__.NodeIterator(textRoot, _dom_NodeFilter_js__WEBPACK_IMPORTED_MODULE_5__.NodeFilter.SHOW_ELEMENT | _dom_NodeFilter_js__WEBPACK_IMPORTED_MODULE_5__.NodeFilter.SHOW_TEXT, (node) => {
    if (node.nodeName === 'title') return _dom_NodeFilter_js__WEBPACK_IMPORTED_MODULE_5__.NodeFilter.FILTER_IGNORE
    return _dom_NodeFilter_js__WEBPACK_IMPORTED_MODULE_5__.NodeFilter.FILTER_ACCEPT
  })

  // Iterate trough all nodes top to bottom, left to right
  for (const node of iter) {

    // If we hit our target, we gathered all positional information we need to move the bbox to the correct spot
    if (node === target && node !== textRoot) {
      return getTextBBoxes(node, node, pos, dx, dy)
    }

    // Traverse trough this node updating positions and add boxes
    getPositionDetailsFor(node, pos, dx, dy, boxes)
  }

  return boxes
}

const isNotEmptyBox = box => box.x !== 0 || box.y !== 0 || box.width !== 0 || box.height !== 0

// This function either updates pos, dx and dy (when its an element) or calculates the boxes for text with the passed arguments
// All arguments are passed by reference so dont overwrite them (treat them as const!)
// TODO: Break this into two functions?
const getPositionDetailsFor = (node, pos, dx, dy, boxes) => {
  if (node.nodeType === node.ELEMENT_NODE) {
    const x = parseFloat(node.getAttribute('x'))
    const y = parseFloat(node.getAttribute('y'))

    pos.x = isNaN(x) ? pos.x : x
    pos.y = isNaN(y) ? pos.y : y

    const dx0 = (node.getAttribute('dx') || '').split(_regex_js__WEBPACK_IMPORTED_MODULE_1__.delimiter).filter(num => num !== '').map(parseFloat)
    const dy0 = (node.getAttribute('dy') || '').split(_regex_js__WEBPACK_IMPORTED_MODULE_1__.delimiter).filter(num => num !== '').map(parseFloat)

    // TODO: eventually replace only as much values as we have text chars (node.textContent.length) because we could end up adding to much
    // replace initial values with node values if present
    dx.splice(0, dx0.length, ...dx0)
    dy.splice(0, dy0.length, ...dy0)
  } else {
    // get text data
    const data = node.data

    let j = 0
    const jl = data.length
    const details = getFontDetails(node)

    // if it is more than one dx/dy single letters are moved by the amount (https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/dx)
    if (dy.length || dx.length) {
      for (;j < jl; j++) {
        // Calculate a box for a single letter
        boxes.push(_textUtils_js__WEBPACK_IMPORTED_MODULE_2__.textBBox(data.substr(j, 1), pos.x, pos.y, details))

        // Add the next position to current one
        pos.x += dx.shift() || 0
        pos.y += dy.shift() || 0

        if (!dy.length && !dx.length) break
      }
    }

    // in case it was only one dx/dy or no more dx/dy move the rest of the text
    boxes.push(_textUtils_js__WEBPACK_IMPORTED_MODULE_2__.textBBox(data.substr(j), pos.x, pos.y, details))
    pos.x += boxes[boxes.length - 1].width
  }
}

/*
// this function is passing dx and dy values by references. Dont assign new values to it
const textIterator = function (node, pos = { x: 0, y: 0 }, dx = [ 0 ], dy = [ 0 ]) {

  var x = parseFloat(node.getAttribute('x'))
  var y = parseFloat(node.getAttribute('y'))

  pos.x = isNaN(x) ? pos.x : x
  pos.y = isNaN(y) ? pos.y : y

  var dx0 = (node.getAttribute('dx') || '').split(regex.delimiter).filter(num => num !== '').map(parseFloat)
  var dy0 = (node.getAttribute('dy') || '').split(regex.delimiter).filter(num => num !== '').map(parseFloat)
  var boxes = []
  var data = ''

  // TODO: eventually replace only as much values as we have text chars (node.textContent.length) because we could end up adding to much
  // replace initial values with node values if present
  dx.splice(0, dx0.length, ...dx0)
  dy.splice(0, dy0.length, ...dy0)

  var i = 0
  var il = node.childNodes.length

  // iterate through all children
  for (; i < il; ++i) {

    // shift next child
    pos.x += dx.shift() || 0
    pos.y += dy.shift() || 0

    // text
    if (node.childNodes[i].nodeType === node.TEXT_NODE) {

      // get text data
      data = node.childNodes[i].data

      let j = 0
      const jl = data.length

      // if it is more than one dx/dy single letters are moved by the amount (https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/dx)
      if (dy.length || dx.length) {
        for (;j < jl; j++) {
          boxes.push(textUtils.textBBox(data.substr(j, 1), pos.x, pos.y, getFontDetails(node)))

          pos.x += dx.shift() || 0
          pos.y += dy.shift() || 0

          if (!dy.length && !dx.length) break
        }
      }

      // in case it was only one dx/dy or no more dx/dy move the rest of the text

      boxes.push(textUtils.textBBox(data.substr(j), pos.x, pos.y, getFontDetails(node)))
      pos.x += boxes[boxes.length - 1].width

    // element
    } else {
      // in case of element, recursively call function again with new start values
      boxes = boxes.concat(textIterator(node.childNodes[i], pos, dx, dy))
    }
  }

  return boxes
} */

const getFontDetails = (node) => {
  if (node.nodeType === node.TEXT_NODE) node = node.parentNode

  let fontSize = null
  let fontFamily = null
  let textAnchor = null
  let dominantBaseline = null

  const textContentElements = [
    'text',
    'tspan',
    'tref',
    'textPath',
    'altGlyph',
    'g'
  ]

  do {
    // TODO: stop on
    if (!fontSize) { fontSize = node.style.fontSize || node.getAttribute('font-size') }
    if (!fontFamily) { fontFamily = node.style.fontFamily || node.getAttribute('font-family') }
    if (!textAnchor) { textAnchor = node.style.textAnchor || node.getAttribute('text-anchor') }
    if (!dominantBaseline) { dominantBaseline = node.style.dominantBaseline || node.getAttribute('dominant-baseline') }
    // TODO: check for alignment-baseline in tspan, tref, textPath, altGlyph
    // TODO: alignment-adjust, baseline-shift
    /*
    if(!alignmentBaseline)
    alignmentBaseline = this.style.alignmentBaseline || this.getAttribute('alignment-baseline')
    */

  } while (
    (node = node.parentNode)
    && node.nodeType === node.ELEMENT_NODE
    && (textContentElements.includes(node.nodeName))
  )

  return {
    fontFamily,
    fontSize,
    textAnchor: textAnchor || 'start',
    // TODO: use central for writing-mode === horizontal https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/dominant-baseline
    dominantBaseline: dominantBaseline || 'alphabetical'
    // fontFamilyMappings: this.ownerDocument.fontFamilyMappings,
    // fontDir: this.ownerDocument.fontDir,
    // preloaded: this.ownerDocument._preloaded
  }
}


/***/ }),

/***/ "./src/utils/defaults.js":
/*!*******************************!*\
  !*** ./src/utils/defaults.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fontSize": () => (/* binding */ fontSize),
/* harmony export */   "fontFamily": () => (/* binding */ fontFamily),
/* harmony export */   "fontDir": () => (/* binding */ fontDir),
/* harmony export */   "fontFamilyMappings": () => (/* binding */ fontFamilyMappings)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var _dirname_cjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dirname.cjs */ "./dirname.cjs");

// import { fileURLToPath } from 'url'
 // eslint-disable-line

// use this as soon as import.meta is standardized
// const __dirname = dirname(fileURLToPath(import.meta.url));

const fontSize = 16
const fontFamily = 'sans-serif'
const fontDir = (0,path__WEBPACK_IMPORTED_MODULE_0__.join)(_dirname_cjs__WEBPACK_IMPORTED_MODULE_1__, '../../', 'fonts/')
const fontFamilyMappings = {
  'sans-serif': 'OpenSans-Regular.ttf',
  'Open Sans': 'OpenSans-Regular.ttf'
}


/***/ }),

/***/ "./src/utils/mapUtils.js":
/*!*******************************!*\
  !*** ./src/utils/mapUtils.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "objectToMap": () => (/* binding */ objectToMap),
/* harmony export */   "mapToObject": () => (/* binding */ mapToObject),
/* harmony export */   "mapMap": () => (/* binding */ mapMap),
/* harmony export */   "mapToCss": () => (/* binding */ mapToCss),
/* harmony export */   "cssToMap": () => (/* binding */ cssToMap)
/* harmony export */ });
/* harmony import */ var _utils_strUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/strUtils.js */ "./src/utils/strUtils.js");


const objectToMap = function (obj) {
  if (obj instanceof Map) return new Map(obj)
  return Object.keys(obj).reduce((map, key) => map.set(key, obj[key]), new Map())
}

const mapToObject = function (map) {
  var obj = {}
  map.forEach(function (value, key) {
    obj[key] = value
  })
  return obj
}

const mapMap = function (map, cb) {
  var arr = []
  map.forEach(function (value, key) {
    arr.push(cb(value, key))
  })
  return arr
}

const mapToCss = function (myMap) {
  return mapMap(myMap, function (value, key) {
    if (!value) return false
    return (0,_utils_strUtils_js__WEBPACK_IMPORTED_MODULE_0__.decamelize)(key) + ': ' + value
  }).filter(function (el) { return !!el }).join('; ') + ';' || 0
}

const cssToMap = function (css) {
  return new Map(css.split(/\s*;\s*/).filter(function (el) { return !!el }).map(function (el) {
    return el.split(/\s*:\s*/)
  }))
}


/***/ }),

/***/ "./src/utils/namespaces.js":
/*!*********************************!*\
  !*** ./src/utils/namespaces.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svg": () => (/* binding */ svg),
/* harmony export */   "xlink": () => (/* binding */ xlink),
/* harmony export */   "html": () => (/* binding */ html),
/* harmony export */   "mathml": () => (/* binding */ mathml),
/* harmony export */   "xml": () => (/* binding */ xml),
/* harmony export */   "xmlns": () => (/* binding */ xmlns)
/* harmony export */ });

const svg = 'http://www.w3.org/2000/svg'
const xlink = 'http://www.w3.org/1999/xlink'
const html = 'http://www.w3.org/1999/xhtml'
const mathml = 'http://www.w3.org/1998/Math/MathML'
const xml = 'http://www.w3.org/XML/1998/namespace'
const xmlns = 'http://www.w3.org/2000/xmlns/'


/***/ }),

/***/ "./src/utils/nodesToNode.js":
/*!**********************************!*\
  !*** ./src/utils/nodesToNode.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nodesToNode": () => (/* binding */ nodesToNode)
/* harmony export */ });
const nodesToNode = (nodes, document) => {
  nodes = nodes.map((node) => {
    if (typeof node === 'string') {
      return document.createTextNode(node)
    }
    return node
  })
  if (nodes.length === 1) { return nodes }
  const node = document.createDocumentFragment()
  nodes.forEach(node.appendChild, node)
  return node
}


/***/ }),

/***/ "./src/utils/objectCreationUtils.js":
/*!******************************************!*\
  !*** ./src/utils/objectCreationUtils.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "extend": () => (/* binding */ extend),
/* harmony export */   "extendStatic": () => (/* binding */ extendStatic),
/* harmony export */   "mixin": () => (/* binding */ mixin)
/* harmony export */ });
const extend = (...modules) => {
  var methods, key, i

  // Get object with extensions
  methods = modules.pop()

  for (i = modules.length - 1; i >= 0; i--) {
    for (key in methods) { modules[i].prototype[key] = methods[key] }
  }
}

const extendStatic = (...modules) => {
  var methods, key, i

  // Get object with extensions
  methods = modules.pop()

  for (i = modules.length - 1; i >= 0; i--) {
    for (key in methods) { modules[i][key] = methods[key] }
  }
}

// TODO: refactor so that it takes a class
const mixin = (mixin, _class) => {
  const descriptors = Object.getOwnPropertyDescriptors(mixin)
  // const all = Object.getOwnPropertyNames(mixin)

  // const propNames = Object.keys(descriptors)
  // const methodNames = all.filter(p => !propNames.includes(p))

  // for (const method of methodNames) {
  //   _class.prototype[method] = mixin[method]
  // }

  Object.defineProperties(_class.prototype, descriptors)
}


/***/ }),

/***/ "./src/utils/pathUtils.js":
/*!********************************!*\
  !*** ./src/utils/pathUtils.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pathParser": () => (/* binding */ pathParser),
/* harmony export */   "Arc": () => (/* binding */ Arc),
/* harmony export */   "pathBBox": () => (/* binding */ pathBBox),
/* harmony export */   "PathSegmentArray": () => (/* binding */ PathSegmentArray),
/* harmony export */   "getPathSegments": () => (/* binding */ getPathSegments),
/* harmony export */   "pointAtLength": () => (/* binding */ pointAtLength),
/* harmony export */   "length": () => (/* binding */ length),
/* harmony export */   "debug": () => (/* binding */ debug),
/* harmony export */   "getCloud": () => (/* binding */ getCloud),
/* harmony export */   "pathFrom": () => (/* binding */ pathFrom)
/* harmony export */ });
/* harmony import */ var _other_Box_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../other/Box.js */ "./src/other/Box.js");
/* harmony import */ var _other_Point_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../other/Point.js */ "./src/other/Point.js");
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./regex.js */ "./src/utils/regex.js");
/* harmony import */ var _dom_svg_SVGMatrix_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../dom/svg/SVGMatrix.js */ "./src/dom/svg/SVGMatrix.js");
/* harmony import */ var _PointCloud_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PointCloud.js */ "./src/utils/PointCloud.js");



// TODO: use own matrix implementation



const pathHandlers = {
  M (c, p, r, p0) {
    p.x = p0.x = c[0]
    p.y = p0.y = c[1]

    return new Move(p)
  },
  L (c, p) {
    const ret = new Line(p.x, p.y, c[0], c[1])// .offset(o)
    p.x = c[0]
    p.y = c[1]
    return ret
  },
  H (c, p) {
    return pathHandlers.L([ c[0], p.y ], p)
  },
  V (c, p) {
    return pathHandlers.L([ p.x, c[0] ], p)
  },
  Q (c, p, r) {
    const ret = Cubic.fromQuad(p, new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(c[0], c[1]), new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(c[2], c[3]))// .offset(o)
    p.x = c[2]
    p.y = c[3]

    const reflect = new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(c[0], c[1]).reflectAt(p)
    r.x = reflect.x
    r.y = reflect.y

    return ret
  },
  T (c, p, r, p0, reflectionIsPossible) {
    if (reflectionIsPossible) { c = [ r.x, r.y ].concat(c) } else { c = [ p.x, p.y ].concat(c) }
    return pathHandlers.Q(c, p, r)
  },
  C (c, p, r) {
    const ret = new Cubic(p, new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(c[0], c[1]), new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(c[2], c[3]), new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(c[4], c[5]))// .offset(o)
    p.x = c[4]
    p.y = c[5]
    const reflect = new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(c[2], c[3]).reflectAt(p)
    r.x = reflect.x
    r.y = reflect.y
    return ret
  },
  S (c, p, r, p0, reflectionIsPossible) {
    // reflection makes only sense if this command was preceeded by another beziere command (QTSC)
    if (reflectionIsPossible) { c = [ r.x, r.y ].concat(c) } else { c = [ p.x, p.y ].concat(c) }
    return pathHandlers.C(c, p, r)
  },
  Z (c, p, r, p0) {
    // FIXME: The behavior of Z depends on the command before
    return pathHandlers.L([ p0.x, p0.y ], p)
  },
  A (c, p, r) {
    const ret = new Arc(p, new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(c[5], c[6]), c[0], c[1], c[2], c[3], c[4])
    p.x = c[5]
    p.y = c[6]
    return ret
  }
}

const mlhvqtcsa = 'mlhvqtcsaz'.split('')

for (let i = 0, il = mlhvqtcsa.length; i < il; ++i) {
  pathHandlers[mlhvqtcsa[i]] = (function (i) {
    return function (c, p, r, p0, reflectionIsPossible) {
      if (i === 'H') c[0] = c[0] + p.x
      else if (i === 'V') c[0] = c[0] + p.y
      else if (i === 'A') {
        c[5] = c[5] + p.x
        c[6] = c[6] + p.y
      } else {
        for (let j = 0, jl = c.length; j < jl; ++j) {
          c[j] = c[j] + (j % 2 ? p.y : p.x)
        }
      }

      return pathHandlers[i](c, p, r, p0, reflectionIsPossible)
    }
  })(mlhvqtcsa[i].toUpperCase())
}

function pathRegReplace (a, b, c, d) {
  return c + d.replace(_regex_js__WEBPACK_IMPORTED_MODULE_2__.dots, ' .')
}

function isBeziere (obj) {
  return obj instanceof Cubic
}

const pathParser = (array) => {

  // prepare for parsing
  const paramCnt = { M: 2, L: 2, H: 1, V: 1, C: 6, S: 4, Q: 4, T: 2, A: 7, Z: 0 }

  array = array
    .replace(_regex_js__WEBPACK_IMPORTED_MODULE_2__.numbersWithDots, pathRegReplace) // convert 45.123.123 to 45.123 .123
    .replace(_regex_js__WEBPACK_IMPORTED_MODULE_2__.pathLetters, ' $& ') // put some room between letters and numbers
    .replace(_regex_js__WEBPACK_IMPORTED_MODULE_2__.hyphen, '$1 -') // add space before hyphen
    .trim() // trim
    .split(_regex_js__WEBPACK_IMPORTED_MODULE_2__.delimiter) // split into array

  // array now is an array containing all parts of a path e.g. ['M', '0', '0', 'L', '30', '30' ...]
  const arr = []
  const p = new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point()
  const p0 = new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point()
  const r = new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point()
  let index = 0
  const len = array.length
  let s

  do {
    // Test if we have a path letter
    if (_regex_js__WEBPACK_IMPORTED_MODULE_2__.isPathLetter.test(array[index])) {
      s = array[index]
      ++index
    // If last letter was a move command and we got no new, it defaults to [L]ine
    } else if (s === 'M') {
      s = 'L'
    } else if (s === 'm') {
      s = 'l'
    }

    arr.push(
      pathHandlers[s].call(null,
        array.slice(index, (index = index + paramCnt[s.toUpperCase()])).map(parseFloat),
        p, r, p0,
        isBeziere(arr[arr.length - 1])
      )
    )

  } while (len > index)

  return arr
}

class Move {
  constructor (p) {
    this.p1 = p.clone()
  }

  // FIXME: Use pointcloud
  bbox () {
    const p = this.p1
    return new _other_Box_js__WEBPACK_IMPORTED_MODULE_0__.Box(p.x, p.y, 0, 0)
  }

  getCloud () {
    return new _PointCloud_js__WEBPACK_IMPORTED_MODULE_4__.PointCloud([ this.p1 ])
  }

  length () { return 0 }

  toPath () {
    return [ 'M', this.p1.x, this.p1.y ].join(' ')
  }

  toPathFragment () {
    return [ 'M', this.p1.x, this.p1.y ]
  }

  transform (matrix) {
    this.p1.transformO(matrix)
    return this
  }
}

class Arc {
  constructor (p1, p2, rx, ry, φ, arc, sweep) {
    // https://www.w3.org/TR/SVG/implnote.html#ArcCorrectionOutOfRangeRadii
    if (!rx || !ry) return new Line(p1, p2)

    rx = Math.abs(rx)
    ry = Math.abs(ry)

    this.p1 = p1.clone()
    this.p2 = p2.clone()
    this.arc = arc ? 1 : 0
    this.sweep = sweep ? 1 : 0

    // Calculate cos and sin of angle phi
    const cosφ = Math.cos(φ / 180 * Math.PI)
    const sinφ = Math.sin(φ / 180 * Math.PI)

    // https://www.w3.org/TR/SVG/implnote.html#ArcConversionEndpointToCenter
    // (eq. 5.1)
    const p1_ = new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(
      (p1.x - p2.x) / 2,
      (p1.y - p2.y) / 2
    ).transform((0,_dom_svg_SVGMatrix_js__WEBPACK_IMPORTED_MODULE_3__.matrixFactory)(
      cosφ, -sinφ, sinφ, cosφ, 0, 0
    ))

    // (eq. 6.2)
    // Make sure the radius fit with the arc and correct if neccessary
    const ratio = (p1_.x ** 2 / rx ** 2) + (p1_.y ** 2 / ry ** 2)

    // (eq. 6.3)
    if (ratio > 1) {
      rx = Math.sqrt(ratio) * rx
      ry = Math.sqrt(ratio) * ry
    }

    // (eq. 5.2)
    const rxQuad = rx ** 2
    const ryQuad = ry ** 2

    const divisor1 = rxQuad * p1_.y ** 2
    const divisor2 = ryQuad * p1_.x ** 2
    const dividend = (rxQuad * ryQuad - divisor1 - divisor2)

    let c_
    if (Math.abs(dividend) < 1e-15) {
      c_ = new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(0, 0)
    } else {
      c_ = new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(
        rx * p1_.y / ry,
        -ry * p1_.x / rx
      ).mul(Math.sqrt(
        dividend / (divisor1 + divisor2)
      ))
    }

    if (this.arc === this.sweep) c_ = c_.mul(-1)

    // (eq. 5.3)
    const c = c_.transform((0,_dom_svg_SVGMatrix_js__WEBPACK_IMPORTED_MODULE_3__.matrixFactory)(
      cosφ, sinφ, -sinφ, cosφ, 0, 0
    )).add(new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(
      (p1.x + p2.x) / 2,
      (p1.y + p2.y) / 2
    ))

    const anglePoint = new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(
      (p1_.x - c_.x) / rx,
      (p1_.y - c_.y) / ry
    )

    /* For eq. 5.4 see angleTo function */

    // (eq. 5.5)
    const θ = new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(1, 0).angleTo(anglePoint)

    // (eq. 5.6)
    let Δθ = anglePoint.angleTo(new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(
      (-p1_.x - c_.x) / rx,
      (-p1_.y - c_.y) / ry
    ))

    Δθ = (Δθ % (2 * Math.PI))

    if (!sweep && Δθ > 0) Δθ -= 2 * Math.PI
    if (sweep && Δθ < 0) Δθ += 2 * Math.PI

    this.c = c
    this.theta = θ * 180 / Math.PI
    this.theta2 = (θ + Δθ) * 180 / Math.PI

    this.delta = Δθ * 180 / Math.PI
    this.rx = rx
    this.ry = ry
    this.phi = φ
    this.cosφ = cosφ
    this.sinφ = sinφ
  }

  static fromCenterForm (c, rx, ry, φ, θ, Δθ) {
    const cosφ = Math.cos(φ / 180 * Math.PI)
    const sinφ = Math.sin(φ / 180 * Math.PI)
    const m = (0,_dom_svg_SVGMatrix_js__WEBPACK_IMPORTED_MODULE_3__.matrixFactory)(cosφ, sinφ, -sinφ, cosφ, 0, 0)

    const p1 = new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(
      rx * Math.cos(θ / 180 * Math.PI),
      ry * Math.sin(θ / 180 * Math.PI)
    ).transform(m).add(c)

    const p2 = new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(
      rx * Math.cos((θ + Δθ) / 180 * Math.PI),
      ry * Math.sin((θ + Δθ) / 180 * Math.PI)
    ).transform(m).add(c)

    const arc = Math.abs(Δθ) > 180 ? 1 : 0
    const sweep = Δθ > 0 ? 1 : 0

    return new Arc(p1, p2, rx, ry, φ, arc, sweep)
  }

  bbox () {
    const cloud = this.getCloud()
    return cloud.bbox()
  }

  clone () {
    return new Arc(this.p1, this.p2, this.rx, this.ry, this.phi, this.arc, this.sweep)
  }

  getCloud () {
    if (this.p1.equals(this.p2)) return new _PointCloud_js__WEBPACK_IMPORTED_MODULE_4__.PointCloud([ this.p1 ])

    // arc could be rotated. the min and max values then dont lie on multiples of 90 degress but are shifted by the rotation angle
    // so we first calculate our 0/90 degree angle
    let θ01 = Math.atan(-this.sinφ / this.cosφ * this.ry / this.rx) * 180 / Math.PI
    let θ02 = Math.atan(this.cosφ / this.sinφ * this.ry / this.rx) * 180 / Math.PI
    let θ1 = this.theta
    let θ2 = this.theta2

    if (θ1 < 0 || θ2 < 0) {
      θ1 += 360
      θ2 += 360
    }

    if (θ2 < θ1) {
      const temp = θ1
      θ1 = θ2
      θ2 = temp

    }

    while (θ01 - 90 > θ01) θ01 -= 90
    while (θ01 < θ1) θ01 += 90
    while (θ02 - 90 > θ02) θ02 -= 90
    while (θ02 < θ1) θ02 += 90

    const angleToTest = [ θ01, θ02, (θ01 + 90), (θ02 + 90), (θ01 + 180), (θ02 + 180), (θ01 + 270), (θ02 + 270) ]

    const points = angleToTest.filter(function (angle) {
      return (angle > θ1 && angle < θ2)
    }).map(function (angle) {
      while (this.theta < angle) angle -= 360
      return this.pointAt(((angle - this.theta) % 360) / (this.delta)) // TODO: replace that call with pointAtAngle
    }.bind(this)).concat(this.p1, this.p2)

    return new _PointCloud_js__WEBPACK_IMPORTED_MODULE_4__.PointCloud(points)
  }

  length () {
    if (this.p1.equals(this.p2)) return 0

    const length = this.p2.sub(this.p1).abs()

    const ret = this.splitAt(0.5)
    const len1 = ret[0].p2.sub(ret[0].p1).abs()
    const len2 = ret[1].p2.sub(ret[1].p1).abs()

    if (len1 + len2 - length < 0.00001) {
      return len1 + len2
    }

    return ret[0].length() + ret[1].length()
  }

  pointAt (t) {
    if (this.p1.equals(this.p2)) return this.p1.clone()

    const tInAngle = (this.theta + t * this.delta) / 180 * Math.PI
    const sinθ = Math.sin(tInAngle)
    const cosθ = Math.cos(tInAngle)

    return new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(
      this.cosφ * this.rx * cosθ - this.sinφ * this.ry * sinθ + this.c.x,
      this.sinφ * this.ry * cosθ + this.cosφ * this.rx * sinθ + this.c.y
    )
  }

  splitAt (t) {
    const absDelta = Math.abs(this.delta)
    const delta1 = absDelta * t
    const delta2 = absDelta * (1 - t)

    const pointAtT = this.pointAt(t)

    return [
      new Arc(this.p1, pointAtT, this.rx, this.ry, this.phi, delta1 > 180, this.sweep),
      new Arc(pointAtT, this.p2, this.rx, this.ry, this.phi, delta2 > 180, this.sweep)
    ]
  }

  toPath () {
    return [ 'M', this.p1.x, this.p1.y, 'A', this.rx, this.ry, this.phi, this.arc, this.sweep, this.p2.x, this.p2.y ].join(' ')
  }

  toPathFragment () {
    return [ 'A', this.rx, this.ry, this.phi, this.arc, this.sweep, this.p2.x, this.p2.y ]
  }

  toString () {
    return `p1: ${this.p1.x.toFixed(4)} ${this.p1.y.toFixed(4)}, p2: ${this.p2.x.toFixed(4)} ${this.p2.y.toFixed(4)}, c: ${this.c.x.toFixed(4)} ${this.c.y.toFixed(4)} theta: ${this.theta.toFixed(4)}, theta2: ${this.theta2.toFixed(4)}, delta: ${this.delta.toFixed(4)}, large: ${this.arc}, sweep: ${this.sweep}`
  }

  transform (matrix) {
    return new Arc(this.p1.transform(matrix), this.p2.transform(matrix), this.rx, this.ry, this.phi, this.arc, this.sweep)
  }
}

class Cubic {
  constructor (p1, c1, c2, p2) {
    if (p1 instanceof _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point) {
      this.p1 = new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(p1)
      this.c1 = new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(c1)
      this.c2 = new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(c2)
      this.p2 = new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(p2)
    } else {
      this.p1 = new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(p1.p1)
      this.c1 = new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(p1.c1)
      this.c2 = new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(p1.c2)
      this.p2 = new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(p1.p2)
    }
  }

  static fromQuad (p1, c, p2) {
    const c1 = p1.mul(1 / 3).add(c.mul(2 / 3))
    const c2 = c.mul(2 / 3).add(p2.mul(1 / 3))
    return new Cubic(p1, c1, c2, p2)
  }

  bbox () {
    return this.getCloud().bbox()
  }

  findRoots () {
    return this.findRootsX().concat(this.findRootsY())
  }

  findRootsX () {
    return this.findRootsXY(this.p1.x, this.c1.x, this.c2.x, this.p2.x)
  }

  findRootsXY (p1, p2, p3, p4) {
    const a = 3 * (-p1 + 3 * p2 - 3 * p3 + p4)
    const b = 6 * (p1 - 2 * p2 + p3)
    const c = 3 * (p2 - p1)

    if (a === 0) return [ -c / b ].filter(function (el) { return el > 0 && el < 1 })

    if (b * b - 4 * a * c < 0) return []
    if (b * b - 4 * a * c === 0) return [ Math.round((-b / (2 * a)) * 100000) / 100000 ].filter(function (el) { return el > 0 && el < 1 })

    return [
      Math.round((-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a) * 100000) / 100000,
      Math.round((-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a) * 100000) / 100000
    ].filter(function (el) { return el > 0 && el < 1 })
  }

  findRootsY () {
    return this.findRootsXY(this.p1.y, this.c1.y, this.c2.y, this.p2.y)
  }

  flatness () {
    let ux = Math.pow(3 * this.c1.x - 2 * this.p1.x - this.p2.x, 2)
    let uy = Math.pow(3 * this.c1.y - 2 * this.p1.y - this.p2.y, 2)
    const vx = Math.pow(3 * this.c2.x - 2 * this.p2.x - this.p1.x, 2)
    const vy = Math.pow(3 * this.c2.y - 2 * this.p2.y - this.p1.y, 2)

    if (ux < vx) { ux = vx }
    if (uy < vy) { uy = vy }

    return ux + uy
  }

  getCloud () {
    const points = this.findRoots()
      .filter(root => root !== 0 && root !== 1)
      .map(root => this.pointAt(root))
      .concat(this.p1, this.p2)

    return new _PointCloud_js__WEBPACK_IMPORTED_MODULE_4__.PointCloud(points)
  }

  length () {
    return this.lengthAt()
  }

  lengthAt (t = 1) {
    const curves = this.splitAt(t)[0].makeFlat(t)

    let length = 0
    for (let i = 0, len = curves.length; i < len; ++i) {
      length += curves[i].p2.sub(curves[i].p1).abs()
    }

    return length
  }

  makeFlat (t) {
    if (this.flatness() > 0.15) {
      return this.splitAt(0.5)
        .map(function (el) { return el.makeFlat(t * 0.5) })
        .reduce(function (last, current) { return last.concat(current) }, [])
    } else {
      this.t_value = t
      return [ this ]
    }
  }

  pointAt (t) {
    return new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(
      (1 - t) * (1 - t) * (1 - t) * this.p1.x + 3 * (1 - t) * (1 - t) * t * this.c1.x + 3 * (1 - t) * t * t * this.c2.x + t * t * t * this.p2.x,
      (1 - t) * (1 - t) * (1 - t) * this.p1.y + 3 * (1 - t) * (1 - t) * t * this.c1.y + 3 * (1 - t) * t * t * this.c2.y + t * t * t * this.p2.y
    )
  }

  splitAt (z) {
    const x = this.splitAtScalar(z, 'x')
    const y = this.splitAtScalar(z, 'y')

    const a = new Cubic(
      new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(x[0][0], y[0][0]),
      new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(x[0][1], y[0][1]),
      new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(x[0][2], y[0][2]),
      new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(x[0][3], y[0][3])
    )

    const b = new Cubic(
      new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(x[1][0], y[1][0]),
      new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(x[1][1], y[1][1]),
      new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(x[1][2], y[1][2]),
      new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(x[1][3], y[1][3])
    )

    return [ a, b ]
  }

  splitAtScalar (z, p) {
    const p1 = this.p1[p]
    const p2 = this.c1[p]
    const p3 = this.c2[p]
    const p4 = this.p2[p]

    const t = z * z * z * p4 - 3 * z * z * (z - 1) * p3 + 3 * z * (z - 1) * (z - 1) * p2 - (z - 1) * (z - 1) * (z - 1) * p1

    return [
      [
        p1,
        z * p2 - (z - 1) * p1,
        z * z * p3 - 2 * z * (z - 1) * p2 + (z - 1) * (z - 1) * p1,
        t
      ],
      [
        t,
        z * z * p4 - 2 * z * (z - 1) * p3 + (z - 1) * (z - 1) * p2,
        z * p4 - (z - 1) * p3,
        p4
      ]
    ]
  }

  toPath () {
    return [ 'M', this.p1.x, this.p1.y ].concat(this.toPathFragment()).join(' ')
  }

  toPathFragment () {
    return [ 'C', this.c1.x, this.c1.y, this.c2.x, this.c2.y, this.p2.x, this.p2.y ]
  }

  transform (matrix) {
    this.p1.transformO(matrix)
    this.c1.transformO(matrix)
    this.c2.transformO(matrix)
    this.p2.transformO(matrix)
    return this
  }
}

class Line {
  constructor (x1, y1, x2, y2) {
    if (x1 instanceof Object) {
      this.p1 = new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(x1)
      this.p2 = new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(y1)
    } else {
      this.p1 = new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(x1, y1)
      this.p2 = new _other_Point_js__WEBPACK_IMPORTED_MODULE_1__.Point(x2, y2)
    }
  }

  bbox () {
    return this.getCloud().bbox()
  }

  getCloud () {
    return new _PointCloud_js__WEBPACK_IMPORTED_MODULE_4__.PointCloud([ this.p1, this.p2 ])
  }

  length () {
    return this.p2.sub(this.p1).abs()
  }

  pointAt (t) {
    const vec = this.p2.sub(this.p1).mul(t)
    return this.p1.add(vec)
  }

  toPath () {
    return [ 'M', this.p1.x, this.p1.y, this.p2.x, this.p2.y ].join(' ')
  }

  toPathFragment () {
    return [ 'L', this.p2.x, this.p2.y ]
  }

  transform (matrix) {
    this.p1.transformO(matrix)
    this.p2.transformO(matrix)
    return this
  }
}

const pathBBox = function (d) {
  return pathParser(d).reduce((l, c) => l.merge(c.bbox()), new _other_Box_js__WEBPACK_IMPORTED_MODULE_0__.NoBox())
}

class PathSegmentArray extends Array {
  bbox () {
    return this.reduce((l, c) => l.merge(c.bbox()), new _other_Box_js__WEBPACK_IMPORTED_MODULE_0__.NoBox())
  }

  cloud () {
    return this.reduce(
      (cloud, segment) => segment.getCloud().merge(cloud),
      new _PointCloud_js__WEBPACK_IMPORTED_MODULE_4__.PointCloud()
    )
  }

  merge (other) {
    return this.concat(other)
  }

  transform (matrix) {
    return this.map(segment => segment.transform(matrix))
  }
}

const getPathSegments = function (d) {
  return new PathSegmentArray(...pathParser(d))
}

const pointAtLength = function (d, len) {
  const segs = pathParser(d)

  const segLengths = segs.map(el => el.length())

  const length = segLengths.reduce((l, c) => l + c, 0)

  let i = 0

  let t = len / length

  // FIXME: Pop Move before using shortcut?
  // shortcut for trivial cases
  if (t >= 1) {
    // Check if there is a p2. If not, use p1
    if (segs[segs.length - 1].p2) {
      return segs[segs.length - 1].p2.native()
    } else {
      return segs[segs.length - 1].p1.native()
    }
  }

  if (t <= 0) return segs[0].p1.native()

  // remove move commands at the very end of the path
  while (segs[segs.length - 1] instanceof Move) segs.pop()

  let segEnd = 0

  for (const il = segLengths.length; i < il; ++i) {
    const k = segLengths[i] / length
    segEnd += k

    if (segEnd > t) {
      break
    }
  }

  const ratio = length / segLengths[i]
  t = ratio * (t - segEnd) + 1

  return segs[i].pointAt(t).native()
}

const length = function (d) {
  return pathParser(d)
    .reduce((l, c) => l + c.length(), 0)
}

const debug = function (node) {
  const parse = pathParser(node.getAttribute('d'))

  const ret = {
    paths: parse.map(el => el.toPath()),
    fragments: parse.map(el => el.toPathFragment().join(' ')),
    bboxs: parse.map(el => {
      const box = el.bbox()
      return [ box.x, box.y, box.width, box.height ]
    }),
    bbox: parse.reduce((l, c) => l.merge(c.bbox()), new _other_Box_js__WEBPACK_IMPORTED_MODULE_0__.NoBox()),
    bboxsTransformed: parse.map(el => {
      return el.getCloud().transform(node.matrixify()).bbox()
    })
  }

  return Object.assign({}, ret, {
    bboxTransformed: ret.bboxsTransformed.reduce((l, c) => l.merge(c), new _other_Box_js__WEBPACK_IMPORTED_MODULE_0__.NoBox())
  })
}

const getCloud = (d) => {
  return pathParser(d).reduce((cloud, segment) =>
    segment.getCloud().merge(cloud), new _PointCloud_js__WEBPACK_IMPORTED_MODULE_4__.PointCloud()
  )
}

const pathFrom = {
  box ({ x, y, width, height }) {
    return `M ${x} ${y} h ${width} v ${height} H ${x} V ${y}`
  },
  rect (node) {
    const width = parseFloat(node.getAttribute('width')) || 0
    const height = parseFloat(node.getAttribute('height')) || 0
    const x = parseFloat(node.getAttribute('x')) || 0
    const y = parseFloat(node.getAttribute('y')) || 0
    return `M ${x} ${y} h ${width} v ${height} H ${x} V ${y}`
  },
  circle (node) {
    const r = parseFloat(node.getAttribute('r')) || 0
    const x = parseFloat(node.getAttribute('cx')) || 0
    const y = parseFloat(node.getAttribute('cy')) || 0

    if (r === 0) return 'M0 0'

    return `M ${x - r} ${y} A ${r} ${r} 0 0 0 ${x + r} ${y} A ${r} ${r} 0 0 0 ${x - r} ${y}`
  },
  ellipse (node) {
    const rx = parseFloat(node.getAttribute('rx')) || 0
    const ry = parseFloat(node.getAttribute('ry')) || 0
    const x = parseFloat(node.getAttribute('cx')) || 0
    const y = parseFloat(node.getAttribute('cy')) || 0

    return `M ${x - rx} ${y} A ${rx} ${ry} 0 0 0 ${x + rx} ${y} A ${rx} ${ry} 0 0 0 ${x - rx} ${y}`
  },
  line (node) {
    const x1 = parseFloat(node.getAttribute('x1')) || 0
    const x2 = parseFloat(node.getAttribute('x2')) || 0
    const y1 = parseFloat(node.getAttribute('y1')) || 0
    const y2 = parseFloat(node.getAttribute('y2')) || 0

    return `M ${x1} ${y1} L ${x2} ${y2}`
  },
  polygon (node) {
    return `M ${node.getAttribute('points')} z`
  },
  polyline (node) {
    return `M ${node.getAttribute('points')}`
  }
}


/***/ }),

/***/ "./src/utils/regex.js":
/*!****************************!*\
  !*** ./src/utils/regex.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "transforms": () => (/* binding */ transforms),
/* harmony export */   "delimiter": () => (/* binding */ delimiter),
/* harmony export */   "hyphen": () => (/* binding */ hyphen),
/* harmony export */   "pathLetters": () => (/* binding */ pathLetters),
/* harmony export */   "isPathLetter": () => (/* binding */ isPathLetter),
/* harmony export */   "numbersWithDots": () => (/* binding */ numbersWithDots),
/* harmony export */   "dots": () => (/* binding */ dots)
/* harmony export */ });
// splits a transformation chain
const transforms = /\)\s*,?\s*/

// split at whitespace and comma
const delimiter = /[\s,]+/

// The following regex are used to parse the d attribute of a path

// Matches all hyphens which are not after an exponent
const hyphen = /([^e])-/gi

// Replaces and tests for all path letters
const pathLetters = /[MLHVCSQTAZ]/gi

// yes we need this one, too
const isPathLetter = /[MLHVCSQTAZ]/i

// matches 0.154.23.45
const numbersWithDots = /((\d?\.\d+(?:e[+-]?\d+)?)((?:\.\d+(?:e[+-]?\d+)?)+))+/gi

// matches .
const dots = /\./g


/***/ }),

/***/ "./src/utils/strUtils.js":
/*!*******************************!*\
  !*** ./src/utils/strUtils.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fullHex": () => (/* binding */ fullHex),
/* harmony export */   "hexToRGB": () => (/* binding */ hexToRGB),
/* harmony export */   "decamelize": () => (/* binding */ decamelize),
/* harmony export */   "camelCase": () => (/* binding */ camelCase),
/* harmony export */   "removeQuotes": () => (/* binding */ removeQuotes),
/* harmony export */   "htmlEntities": () => (/* binding */ htmlEntities),
/* harmony export */   "unhtmlEntities": () => (/* binding */ unhtmlEntities),
/* harmony export */   "cdata": () => (/* binding */ cdata),
/* harmony export */   "comment": () => (/* binding */ comment),
/* harmony export */   "splitNotInBrackets": () => (/* binding */ splitNotInBrackets)
/* harmony export */ });
// Ensure to six-based hex
const fullHex = function (hex) {
  return hex.length === 4
    ? [ '#',
      hex.substring(1, 2), hex.substring(1, 2),
      hex.substring(2, 3), hex.substring(2, 3),
      hex.substring(3, 4), hex.substring(3, 4)
    ].join('') : hex
}

const hexToRGB = function (valOrMap) {
  if (typeof valOrMap instanceof Map) {
    for (const [ key, val ] of valOrMap) {
      valOrMap.set(key, hexToRGB(val))
    }
    return valOrMap
  }

  if (!/#[0-9a-f]{3,6}/.test(valOrMap)) { return valOrMap }

  valOrMap = fullHex(valOrMap)

  return 'rgb(' + [
    parseInt(valOrMap.slice(1, 3), 16),
    parseInt(valOrMap.slice(3, 5), 16),
    parseInt(valOrMap.slice(5, 7), 16)
  ].join(',') + ')'
}

function decamelize (s) {
  return String(s).replace(/([a-z])([A-Z])/g, function (m, g1, g2) {
    return g1 + '-' + g2.toLowerCase()
  })
}

function camelCase (s) {
  return String(s).replace(/([a-z])-([a-z])/g, function (m, g1, g2) {
    return g1 + g2.toUpperCase()
  })
}

function removeQuotes (str) {
  if (str.startsWith('"') || str.startsWith("'")) {
    return str.slice(1, -1)
  }
  return str
}

function htmlEntities (str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

function unhtmlEntities (str) {
  return String(str).replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace('&quot;', '"')
}

function cdata (str) {
  return `<![CDATA[${str}]]>`
}

function comment (str) {
  return `<!--${str}-->`
}

const splitNotInBrackets = (str, delimiter) => {
  var roundBrackets = 0

  var squareBrackets = 0

  var lastIndex = 0

  var split = []

  var ch; var i; var il

  for (i = 0, il = str.length; i < il; ++i) {
    ch = str.charAt(i)

    if (ch === delimiter && !roundBrackets && !squareBrackets) {
      split.push(str.slice(lastIndex, i).trim())
      lastIndex = i + 1
      continue
    }

    if (ch === '(') ++roundBrackets
    else if (ch === ')') --roundBrackets
    else if (ch === '[') ++squareBrackets
    else if (ch === ']') --squareBrackets
  }

  split.push(str.slice(lastIndex).trim())
  return split
}


/***/ }),

/***/ "./src/utils/tagUtils.js":
/*!*******************************!*\
  !*** ./src/utils/tagUtils.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tag": () => (/* binding */ tag),
/* harmony export */   "cloneNode": () => (/* binding */ cloneNode)
/* harmony export */ });
const htmlEntities = function (str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

var emptyElements = {
  br: true,
  hr: true,
  img: true,
  link: true
}

const tag = function (node) {
  const attrs = [ ...node.attrs ].map(function (node) {
    return (node.prefix ? node.prefix + ':' : '') + node.localName + '="' + htmlEntities(node.value) + '"'
  })

  const { prefix, localName } = node
  const qualifiedName = (prefix ? prefix + ':' : '') + localName

  return '<' + [].concat(qualifiedName, attrs).join(' ') + '>' + (emptyElements[qualifiedName.toLowerCase()] ? '' : node.innerHTML + '</' + qualifiedName + '>')
}

const cloneNode = function (node) {

  const { prefix, localName, namespaceURI: ns, nodeValue, ownerDocument } = node

  // Build up the correctly cased qualified name
  const qualifiedName = (prefix ? prefix + ':' : '') + localName

  // Check if node was created using non-namespace function which can lead to : in the localName.
  // This check allows false negatives because `local` only matters IF there are : in the localName
  // and we dont care about it when there are non
  const local = localName.includes(':')

  var clone = new node.constructor(qualifiedName, {
    attrs: new Set([ ...node.attrs ].map(node => node.cloneNode())),
    nodeValue,
    ownerDocument,
    local
  }, ns)

  return clone
}


/***/ }),

/***/ "./src/utils/textUtils.js":
/*!********************************!*\
  !*** ./src/utils/textUtils.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "textBBox": () => (/* binding */ textBBox)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var fontkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fontkit */ "fontkit");
/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaults.js */ "./src/utils/defaults.js");
/* harmony import */ var _other_Box_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../other/Box.js */ "./src/other/Box.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config.js */ "./src/config.js");






const textBBox = function (text, x, y, details) {

  if (!text) return new _other_Box_js__WEBPACK_IMPORTED_MODULE_3__.NoBox()

  const config = (0,_config_js__WEBPACK_IMPORTED_MODULE_4__.getConfig)()
  const preloaded = (0,_config_js__WEBPACK_IMPORTED_MODULE_4__.getFonts)()

  var families = (details.fontFamily || _defaults_js__WEBPACK_IMPORTED_MODULE_2__.fontFamily).split(/\s*,\s*/)
  var fontMap = Object.assign({}, _defaults_js__WEBPACK_IMPORTED_MODULE_2__.fontFamilyMappings, config.fontFamilyMappings)
  var fontSize = details.fontSize || _defaults_js__WEBPACK_IMPORTED_MODULE_2__.fontSize
  var fontDir = config.fontDir || _defaults_js__WEBPACK_IMPORTED_MODULE_2__.fontDir
  var fontFamily
  var font

  for (var i = 0, il = families.length; i < il; ++i) {
    if (fontMap[families[i]]) {
      fontFamily = families[i]
      break
    }
  }

  if (!fontFamily) {
    fontFamily = _defaults_js__WEBPACK_IMPORTED_MODULE_2__.fontFamily
  }

  if (preloaded[fontFamily]) {
    font = preloaded[fontFamily]
  } else {
    const filename = path__WEBPACK_IMPORTED_MODULE_0__.join(fontDir, fontMap[fontFamily])
    try {
      font = fontkit__WEBPACK_IMPORTED_MODULE_1__.openSync(filename)
    } catch (e) {
      console.warn(`Could not open font "${fontFamily}" in file "${filename}". ${e.toString()}`)
      return new _other_Box_js__WEBPACK_IMPORTED_MODULE_3__.NoBox()
    }

    preloaded[fontFamily] = font
  }

  var fontHeight = font.ascent - font.descent
  var lineHeight = fontHeight > font.unitsPerEm ? fontHeight : fontHeight + font.lineGap

  var height = lineHeight / font.unitsPerEm * fontSize
  var width = font.layout(text).glyphs.reduce((last, curr) => last + curr.advanceWidth, 0) / font.unitsPerEm * fontSize

  // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/text-anchor
  var xAdjust = 0
  if (details.textAnchor === 'end') {
    xAdjust = -width
  } else if (details.textAnchor === 'middle') {
    xAdjust = -width / 2
  }

  // https://www.w3.org/TR/2002/WD-css3-linebox-20020515/
  // 4.2. Baseline identifiers
  var yAdjust = font.ascent // alphabetic
  if (details.dominantBaseline === 'before-edge' || details.dominantBaseline === 'text-before-edge') {
    yAdjust = 0
  } else if (details.dominantBaseline === 'hanging') {
    yAdjust = font.ascent - font.xHeight - font.capHeight
  } else if (details.dominantBaseline === 'mathematical') {
    yAdjust = font.ascent - font.xHeight
  } else if (details.dominantBaseline === 'middle') {
    yAdjust = font.ascent - font.xHeight / 2
  } else if (details.dominantBaseline === 'central') {
    yAdjust = font.ascent / 2 + font.descent / 2
  } else if (details.dominantBaseline === 'ideographic') {
    yAdjust = font.ascent + font.descent
  }

  return new _other_Box_js__WEBPACK_IMPORTED_MODULE_3__.Box(x + xAdjust, y - yAdjust / font.unitsPerEm * fontSize, width, height)
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./main-module.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Attr": () => (/* reexport safe */ _src_dom_Attr_js__WEBPACK_IMPORTED_MODULE_1__.Attr),
/* harmony export */   "CharacterData": () => (/* reexport safe */ _src_dom_CharacterData_js__WEBPACK_IMPORTED_MODULE_2__.CharacterData),
/* harmony export */   "Comment": () => (/* reexport safe */ _src_dom_Comment_js__WEBPACK_IMPORTED_MODULE_3__.Comment),
/* harmony export */   "CustomEvent": () => (/* reexport safe */ _src_dom_CustomEvent_js__WEBPACK_IMPORTED_MODULE_4__.CustomEvent),
/* harmony export */   "DOMImplementation": () => (/* reexport safe */ _src_dom_Document_js__WEBPACK_IMPORTED_MODULE_5__.DOMImplementation),
/* harmony export */   "Document": () => (/* reexport safe */ _src_dom_Document_js__WEBPACK_IMPORTED_MODULE_5__.Document),
/* harmony export */   "DocumentFragment": () => (/* reexport safe */ _src_dom_DocumentFragment_js__WEBPACK_IMPORTED_MODULE_6__.DocumentFragment),
/* harmony export */   "Element": () => (/* reexport safe */ _src_dom_Element_js__WEBPACK_IMPORTED_MODULE_7__.Element),
/* harmony export */   "Event": () => (/* reexport safe */ _src_dom_Event_js__WEBPACK_IMPORTED_MODULE_8__.Event),
/* harmony export */   "EventTarget": () => (/* reexport safe */ _src_dom_EventTarget_js__WEBPACK_IMPORTED_MODULE_9__.EventTarget),
/* harmony export */   "Node": () => (/* reexport safe */ _src_dom_Node_js__WEBPACK_IMPORTED_MODULE_10__.Node),
/* harmony export */   "NodeFilter": () => (/* reexport safe */ _src_dom_NodeFilter_js__WEBPACK_IMPORTED_MODULE_11__.NodeFilter),
/* harmony export */   "Text": () => (/* reexport safe */ _src_dom_Text_js__WEBPACK_IMPORTED_MODULE_12__.Text),
/* harmony export */   "Window": () => (/* reexport safe */ _src_dom_Window_js__WEBPACK_IMPORTED_MODULE_13__.Window),
/* harmony export */   "HTMLElement": () => (/* reexport safe */ _src_dom_html_HTMLElement_js__WEBPACK_IMPORTED_MODULE_14__.HTMLElement),
/* harmony export */   "HTMLImageElement": () => (/* reexport safe */ _src_dom_html_HTMLImageElement_js__WEBPACK_IMPORTED_MODULE_15__.HTMLImageElement),
/* harmony export */   "HTMLLinkElement": () => (/* reexport safe */ _src_dom_html_HTMLLinkElement_js__WEBPACK_IMPORTED_MODULE_16__.HTMLLinkElement),
/* harmony export */   "HTMLParser": () => (/* reexport safe */ _src_dom_html_HTMLParser_js__WEBPACK_IMPORTED_MODULE_17__.HTMLParser),
/* harmony export */   "HTMLScriptElement": () => (/* reexport safe */ _src_dom_html_HTMLScriptElement_js__WEBPACK_IMPORTED_MODULE_18__.HTMLScriptElement),
/* harmony export */   "elementAccess": () => (/* reexport safe */ _src_dom_mixins_elementAccess_js__WEBPACK_IMPORTED_MODULE_19__.elementAccess),
/* harmony export */   "ParentNode": () => (/* reexport safe */ _src_dom_mixins_ParentNode_js__WEBPACK_IMPORTED_MODULE_20__.ParentNode),
/* harmony export */   "SVGElement": () => (/* reexport safe */ _src_dom_svg_SVGElement_js__WEBPACK_IMPORTED_MODULE_21__.SVGElement),
/* harmony export */   "SVGGraphicsElement": () => (/* reexport safe */ _src_dom_svg_SVGGraphicsElement_js__WEBPACK_IMPORTED_MODULE_22__.SVGGraphicsElement),
/* harmony export */   "SVGMatrix": () => (/* reexport safe */ _src_dom_svg_SVGMatrix_js__WEBPACK_IMPORTED_MODULE_23__.SVGMatrix),
/* harmony export */   "matrixFactory": () => (/* reexport safe */ _src_dom_svg_SVGMatrix_js__WEBPACK_IMPORTED_MODULE_23__.matrixFactory),
/* harmony export */   "SVGPathElement": () => (/* reexport safe */ _src_dom_svg_SVGPathElement_js__WEBPACK_IMPORTED_MODULE_24__.SVGPathElement),
/* harmony export */   "SVGPoint": () => (/* reexport safe */ _src_dom_svg_SVGPoint_js__WEBPACK_IMPORTED_MODULE_25__.SVGPoint),
/* harmony export */   "SVGSVGElement": () => (/* reexport safe */ _src_dom_svg_SVGSVGElement_js__WEBPACK_IMPORTED_MODULE_26__.SVGSVGElement),
/* harmony export */   "SVGTextContentElement": () => (/* reexport safe */ _src_dom_svg_SVGTextContentElement_js__WEBPACK_IMPORTED_MODULE_27__.SVGTextContentElement),
/* harmony export */   "config": () => (/* reexport safe */ _src_config_js__WEBPACK_IMPORTED_MODULE_28__.config),
/* harmony export */   "getConfig": () => (/* reexport safe */ _src_config_js__WEBPACK_IMPORTED_MODULE_28__.getConfig),
/* harmony export */   "getFonts": () => (/* reexport safe */ _src_config_js__WEBPACK_IMPORTED_MODULE_28__.getFonts),
/* harmony export */   "preloadFonts": () => (/* reexport safe */ _src_config_js__WEBPACK_IMPORTED_MODULE_28__.preloadFonts),
/* harmony export */   "setFontDir": () => (/* reexport safe */ _src_config_js__WEBPACK_IMPORTED_MODULE_28__.setFontDir),
/* harmony export */   "setFontFamilyMappings": () => (/* reexport safe */ _src_config_js__WEBPACK_IMPORTED_MODULE_28__.setFontFamilyMappings),
/* harmony export */   "createDocument": () => (/* reexport safe */ _src_factories_js__WEBPACK_IMPORTED_MODULE_29__.createDocument),
/* harmony export */   "createHTMLDocument": () => (/* reexport safe */ _src_factories_js__WEBPACK_IMPORTED_MODULE_29__.createHTMLDocument),
/* harmony export */   "createHTMLWindow": () => (/* reexport safe */ _src_factories_js__WEBPACK_IMPORTED_MODULE_29__.createHTMLWindow),
/* harmony export */   "createSVGDocument": () => (/* reexport safe */ _src_factories_js__WEBPACK_IMPORTED_MODULE_29__.createSVGDocument),
/* harmony export */   "createSVGWindow": () => (/* reexport safe */ _src_factories_js__WEBPACK_IMPORTED_MODULE_29__.createSVGWindow),
/* harmony export */   "createWindow": () => (/* reexport safe */ _src_factories_js__WEBPACK_IMPORTED_MODULE_29__.createWindow),
/* harmony export */   "defaults": () => (/* reexport module object */ _src_utils_defaults_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _src_utils_defaults_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/utils/defaults.js */ "./src/utils/defaults.js");
/* harmony import */ var _src_dom_Attr_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/dom/Attr.js */ "./src/dom/Attr.js");
/* harmony import */ var _src_dom_CharacterData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/dom/CharacterData.js */ "./src/dom/CharacterData.js");
/* harmony import */ var _src_dom_Comment_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/dom/Comment.js */ "./src/dom/Comment.js");
/* harmony import */ var _src_dom_CustomEvent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/dom/CustomEvent.js */ "./src/dom/CustomEvent.js");
/* harmony import */ var _src_dom_Document_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/dom/Document.js */ "./src/dom/Document.js");
/* harmony import */ var _src_dom_DocumentFragment_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/dom/DocumentFragment.js */ "./src/dom/DocumentFragment.js");
/* harmony import */ var _src_dom_Element_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/dom/Element.js */ "./src/dom/Element.js");
/* harmony import */ var _src_dom_Event_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/dom/Event.js */ "./src/dom/Event.js");
/* harmony import */ var _src_dom_EventTarget_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/dom/EventTarget.js */ "./src/dom/EventTarget.js");
/* harmony import */ var _src_dom_Node_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/dom/Node.js */ "./src/dom/Node.js");
/* harmony import */ var _src_dom_NodeFilter_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/dom/NodeFilter.js */ "./src/dom/NodeFilter.js");
/* harmony import */ var _src_dom_Text_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./src/dom/Text.js */ "./src/dom/Text.js");
/* harmony import */ var _src_dom_Window_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./src/dom/Window.js */ "./src/dom/Window.js");
/* harmony import */ var _src_dom_html_HTMLElement_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./src/dom/html/HTMLElement.js */ "./src/dom/html/HTMLElement.js");
/* harmony import */ var _src_dom_html_HTMLImageElement_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./src/dom/html/HTMLImageElement.js */ "./src/dom/html/HTMLImageElement.js");
/* harmony import */ var _src_dom_html_HTMLLinkElement_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./src/dom/html/HTMLLinkElement.js */ "./src/dom/html/HTMLLinkElement.js");
/* harmony import */ var _src_dom_html_HTMLParser_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./src/dom/html/HTMLParser.js */ "./src/dom/html/HTMLParser.js");
/* harmony import */ var _src_dom_html_HTMLScriptElement_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./src/dom/html/HTMLScriptElement.js */ "./src/dom/html/HTMLScriptElement.js");
/* harmony import */ var _src_dom_mixins_elementAccess_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./src/dom/mixins/elementAccess.js */ "./src/dom/mixins/elementAccess.js");
/* harmony import */ var _src_dom_mixins_ParentNode_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./src/dom/mixins/ParentNode.js */ "./src/dom/mixins/ParentNode.js");
/* harmony import */ var _src_dom_svg_SVGElement_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./src/dom/svg/SVGElement.js */ "./src/dom/svg/SVGElement.js");
/* harmony import */ var _src_dom_svg_SVGGraphicsElement_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./src/dom/svg/SVGGraphicsElement.js */ "./src/dom/svg/SVGGraphicsElement.js");
/* harmony import */ var _src_dom_svg_SVGMatrix_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./src/dom/svg/SVGMatrix.js */ "./src/dom/svg/SVGMatrix.js");
/* harmony import */ var _src_dom_svg_SVGPathElement_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./src/dom/svg/SVGPathElement.js */ "./src/dom/svg/SVGPathElement.js");
/* harmony import */ var _src_dom_svg_SVGPoint_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./src/dom/svg/SVGPoint.js */ "./src/dom/svg/SVGPoint.js");
/* harmony import */ var _src_dom_svg_SVGSVGElement_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./src/dom/svg/SVGSVGElement.js */ "./src/dom/svg/SVGSVGElement.js");
/* harmony import */ var _src_dom_svg_SVGTextContentElement_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./src/dom/svg/SVGTextContentElement.js */ "./src/dom/svg/SVGTextContentElement.js");
/* harmony import */ var _src_config_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./src/config.js */ "./src/config.js");
/* harmony import */ var _src_factories_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./src/factories.js */ "./src/factories.js");


































})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNB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Q0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTm1EOztBQUVsQjtBQUNTO0FBQ047QUFDSTtBQUNIO0FBQ1E7QUFDVDtBQUNGO0FBQ007QUFDUDtBQUNNO0FBQ047QUFDRTtBQUNVO0FBQ0s7QUFDRDtBQUNMO0FBQ087QUFDRjtBQUNIO0FBQ0g7QUFDUTtBQUNUO0FBQ0s7QUFDTjtBQUNLO0FBQ1E7O0FBRXZCO0FBQ0c7QUFDZiIsInNvdXJjZXMiOlsid2VicGFjazovL3N2Z2RvbS9leHRlcm5hbCBjb21tb25qcyBcIi4vc3JjL3V0aWxzL2Rpcm5hbWUuY2pzXCIiLCJ3ZWJwYWNrOi8vc3ZnZG9tL2V4dGVybmFsIGNvbW1vbmpzIFwiZm9udGtpdFwiIiwid2VicGFjazovL3N2Z2RvbS9leHRlcm5hbCBjb21tb25qcyBcImltYWdlLXNpemVcIiIsIndlYnBhY2s6Ly9zdmdkb20vZXh0ZXJuYWwgY29tbW9uanMgXCJzYXhcIiIsIndlYnBhY2s6Ly9zdmdkb20vZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcInBhdGhcIiIsIndlYnBhY2s6Ly9zdmdkb20vLi9zcmMvY29uZmlnLmpzIiwid2VicGFjazovL3N2Z2RvbS8uL3NyYy9kb20vQXR0ci5qcyIsIndlYnBhY2s6Ly9zdmdkb20vLi9zcmMvZG9tL0NoYXJhY3RlckRhdGEuanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vc3JjL2RvbS9Db21tZW50LmpzIiwid2VicGFjazovL3N2Z2RvbS8uL3NyYy9kb20vQ3VzdG9tRXZlbnQuanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vc3JjL2RvbS9Eb2N1bWVudC5qcyIsIndlYnBhY2s6Ly9zdmdkb20vLi9zcmMvZG9tL0RvY3VtZW50RnJhZ21lbnQuanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vc3JjL2RvbS9Eb2N1bWVudFR5cGUuanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vc3JjL2RvbS9FbGVtZW50LmpzIiwid2VicGFjazovL3N2Z2RvbS8uL3NyYy9kb20vRXZlbnQuanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vc3JjL2RvbS9FdmVudFRhcmdldC5qcyIsIndlYnBhY2s6Ly9zdmdkb20vLi9zcmMvZG9tL05vZGUuanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vc3JjL2RvbS9Ob2RlRmlsdGVyLmpzIiwid2VicGFjazovL3N2Z2RvbS8uL3NyYy9kb20vVGV4dC5qcyIsIndlYnBhY2s6Ly9zdmdkb20vLi9zcmMvZG9tL1dpbmRvdy5qcyIsIndlYnBhY2s6Ly9zdmdkb20vLi9zcmMvZG9tL2h0bWwvSFRNTEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vc3JjL2RvbS9odG1sL0hUTUxJbWFnZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vc3JjL2RvbS9odG1sL0hUTUxMaW5rRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zdmdkb20vLi9zcmMvZG9tL2h0bWwvSFRNTFBhcnNlci5qcyIsIndlYnBhY2s6Ly9zdmdkb20vLi9zcmMvZG9tL2h0bWwvSFRNTFNjcmlwdEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vc3JjL2RvbS9taXhpbnMvQ2hpbGROb2RlLmpzIiwid2VicGFjazovL3N2Z2RvbS8uL3NyYy9kb20vbWl4aW5zL05vbkRvY3VtZW50VHlwZUNoaWxkTm9kZS5qcyIsIndlYnBhY2s6Ly9zdmdkb20vLi9zcmMvZG9tL21peGlucy9Ob25FbGVtZW50UGFyZW50Tm9kZS5qcyIsIndlYnBhY2s6Ly9zdmdkb20vLi9zcmMvZG9tL21peGlucy9QYXJlbnROb2RlLmpzIiwid2VicGFjazovL3N2Z2RvbS8uL3NyYy9kb20vbWl4aW5zL2VsZW1lbnRBY2Nlc3MuanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vc3JjL2RvbS9zdmcvU1ZHRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zdmdkb20vLi9zcmMvZG9tL3N2Zy9TVkdHcmFwaGljc0VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vc3JjL2RvbS9zdmcvU1ZHTWF0cml4LmpzIiwid2VicGFjazovL3N2Z2RvbS8uL3NyYy9kb20vc3ZnL1NWR1BhdGhFbGVtZW50LmpzIiwid2VicGFjazovL3N2Z2RvbS8uL3NyYy9kb20vc3ZnL1NWR1BvaW50LmpzIiwid2VicGFjazovL3N2Z2RvbS8uL3NyYy9kb20vc3ZnL1NWR1NWR0VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vc3JjL2RvbS9zdmcvU1ZHVGV4dENvbnRlbnRFbGVtZW50LmpzIiwid2VicGFjazovL3N2Z2RvbS8uL3NyYy9mYWN0b3JpZXMuanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vc3JjL290aGVyL0JveC5qcyIsIndlYnBhY2s6Ly9zdmdkb20vLi9zcmMvb3RoZXIvQ3NzUXVlcnkuanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vc3JjL290aGVyL1BvaW50LmpzIiwid2VicGFjazovL3N2Z2RvbS8uL3NyYy91dGlscy9Ob2RlSXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vc3JjL3V0aWxzL1BvaW50Q2xvdWQuanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vc3JjL3V0aWxzL2Jib3hVdGlscy5qcyIsIndlYnBhY2s6Ly9zdmdkb20vLi9zcmMvdXRpbHMvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vc3JjL3V0aWxzL21hcFV0aWxzLmpzIiwid2VicGFjazovL3N2Z2RvbS8uL3NyYy91dGlscy9uYW1lc3BhY2VzLmpzIiwid2VicGFjazovL3N2Z2RvbS8uL3NyYy91dGlscy9ub2Rlc1RvTm9kZS5qcyIsIndlYnBhY2s6Ly9zdmdkb20vLi9zcmMvdXRpbHMvb2JqZWN0Q3JlYXRpb25VdGlscy5qcyIsIndlYnBhY2s6Ly9zdmdkb20vLi9zcmMvdXRpbHMvcGF0aFV0aWxzLmpzIiwid2VicGFjazovL3N2Z2RvbS8uL3NyYy91dGlscy9yZWdleC5qcyIsIndlYnBhY2s6Ly9zdmdkb20vLi9zcmMvdXRpbHMvc3RyVXRpbHMuanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vc3JjL3V0aWxzL3RhZ1V0aWxzLmpzIiwid2VicGFjazovL3N2Z2RvbS8uL3NyYy91dGlscy90ZXh0VXRpbHMuanMiLCJ3ZWJwYWNrOi8vc3ZnZG9tL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3N2Z2RvbS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc3ZnZG9tL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc3ZnZG9tL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc3ZnZG9tLy4vbWFpbi1tb2R1bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9zcmMvdXRpbHMvZGlybmFtZS5janNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZm9udGtpdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbWFnZS1zaXplXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNheFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgZm9udGtpdCBmcm9tICdmb250a2l0J1xuXG5jb25zdCBfY29uZmlnID0ge31cbmNvbnN0IGZvbnRzID0ge31cblxuZXhwb3J0IGNvbnN0IHNldEZvbnREaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gIF9jb25maWcuZm9udERpciA9IGRpclxuICByZXR1cm4gdGhpc1xufVxuXG5leHBvcnQgY29uc3Qgc2V0Rm9udEZhbWlseU1hcHBpbmdzID0gZnVuY3Rpb24gKG1hcCkge1xuICBfY29uZmlnLmZvbnRGYW1pbHlNYXBwaW5ncyA9IG1hcFxuICByZXR1cm4gdGhpc1xufVxuXG4vLyBUT0RPOiBtYWtlIGFzeW5jXG5leHBvcnQgY29uc3QgcHJlbG9hZEZvbnRzID0gKCkgPT4ge1xuICB2YXIgbWFwID0gX2NvbmZpZy5mb250RmFtaWx5TWFwcGluZ3NcblxuICBmb3IgKGNvbnN0IFsgZm9udCwgZmlsZSBdIG9mIE9iamVjdC5lbnRyaWVzKG1hcCkpIHtcbiAgICBjb25zdCBmaWxlbmFtZSA9IHBhdGguam9pbihfY29uZmlnLmZvbnREaXIsIGZpbGUpXG5cbiAgICB0cnkge1xuICAgICAgZm9udHNbZm9udF0gPSBmb250a2l0Lm9wZW5TeW5jKGZpbGVuYW1lKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUud2FybihgQ291bGQgbm90IGxvYWQgZm9udCBmaWxlIGZvciAke2ZvbnR9YCwgZSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuZXhwb3J0IGNvbnN0IGdldENvbmZpZyA9ICgpID0+IF9jb25maWdcbmV4cG9ydCBjb25zdCBnZXRGb250cyA9ICgpID0+IGZvbnRzXG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIHNldEZvbnREaXIsXG4gIHNldEZvbnRGYW1pbHlNYXBwaW5ncyxcbiAgcHJlbG9hZEZvbnRzLFxuICBnZXRDb25maWcsXG4gIGdldEZvbnRzXG59XG4iLCJpbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi9Ob2RlLmpzJ1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gJy4uL3V0aWxzL25hbWVzcGFjZXMuanMnXG5cbmV4cG9ydCBjbGFzcyBBdHRyIGV4dGVuZHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yIChuYW1lLCBwcm9wcywgbnMpIHtcbiAgICBzdXBlcihuYW1lLCB7IG5vZGVWYWx1ZTogJycsIC4uLnByb3BzIH0sIG5zKVxuXG4gICAgLy8gRm9sbG93IHNwZWMgYW5kIGxvd2VyY2FzZSBub2RlTmFtZSBmb3IgaHRtbFxuICAgIHRoaXMubm9kZU5hbWUgPSBucyA9PT0gaHRtbCA/IG5hbWUudG9Mb3dlckNhc2UoKSA6IG5hbWVcbiAgICB0aGlzLm5vZGVUeXBlID0gTm9kZS5BVFRSSUJVVEVfTk9ERVxuICAgIHRoaXMub3duZXJFbGVtZW50ID0gbnVsbFxuICB9XG5cbiAgZ2V0IHZhbHVlICgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlVmFsdWVcbiAgfVxuXG4gIHNldCB2YWx1ZSAodmFsKSB7XG4gICAgdGhpcy5ub2RlVmFsdWUgPSB2YWxcbiAgfVxuXG4gIGdldCBuYW1lICgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlTmFtZVxuICB9XG59XG4iLCJpbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi9Ob2RlLmpzJ1xuaW1wb3J0IHsgbWl4aW4gfSBmcm9tICcuLi91dGlscy9vYmplY3RDcmVhdGlvblV0aWxzLmpzJ1xuaW1wb3J0IHsgTm9uRG9jdW1lbnRUeXBlQ2hpbGROb2RlIH0gZnJvbSAnLi9taXhpbnMvTm9uRG9jdW1lbnRUeXBlQ2hpbGROb2RlLmpzJ1xuaW1wb3J0IHsgQ2hpbGROb2RlIH0gZnJvbSAnLi9taXhpbnMvQ2hpbGROb2RlLmpzJ1xuXG5leHBvcnQgY2xhc3MgQ2hhcmFjdGVyRGF0YSBleHRlbmRzIE5vZGUge1xuICBjb25zdHJ1Y3RvciAobmFtZSwgcHJvcHMpIHtcbiAgICBzdXBlcihuYW1lLCBwcm9wcylcblxuICAgIHRoaXMuZGF0YSA9IHRoaXMubm9kZVZhbHVlXG4gIH1cblxuICBhcHBlbmREYXRhIChkYXRhKSB7XG4gICAgdGhpcy5kYXRhICs9IGRhdGFcbiAgfVxuXG4gIGRlbGV0ZURhdGEgKG9mZnNldCwgY291bnQpIHtcbiAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGEuc2xpY2UoMCwgb2Zmc2V0KSArIHRoaXMuZGF0YS5zbGljZSgwLCBvZmZzZXQgKyBjb3VudClcbiAgfVxuXG4gIGluc2VydERhdGEgKG9mZnNldCwgZGF0YSkge1xuICAgIHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5zbGljZSgwLCBvZmZzZXQpICsgZGF0YSArIHRoaXMuZGF0YS5zbGljZShvZmZzZXQpXG4gIH1cblxuICByZXBsYWNlRGF0YSAob2Zmc2V0LCBjb3VudCwgZGF0YSkge1xuICAgIHRoaXMuZGVsZXRlRGF0YShvZmZzZXQsIGNvdW50KVxuICAgIHRoaXMuaW5zZXJ0RGF0YShvZmZzZXQsIGRhdGEpXG4gIH1cblxuICBzdWJzdHJpbmdEYXRhIChvZmZzZXQsIGNvdW50KSB7XG4gICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhLnN1YnN0cihvZmZzZXQsIGNvdW50KVxuICB9XG5cbiAgZ2V0IGxlbmd0aCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5sZW5ndGhcbiAgfVxufVxuXG5taXhpbihOb25Eb2N1bWVudFR5cGVDaGlsZE5vZGUsIENoYXJhY3RlckRhdGEpXG5taXhpbihDaGlsZE5vZGUsIENoYXJhY3RlckRhdGEpXG4iLCJpbXBvcnQgeyBDaGFyYWN0ZXJEYXRhIH0gZnJvbSAnLi9DaGFyYWN0ZXJEYXRhLmpzJ1xuaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4vTm9kZS5qcydcbmV4cG9ydCBjbGFzcyBDb21tZW50IGV4dGVuZHMgQ2hhcmFjdGVyRGF0YSB7XG4gIGNvbnN0cnVjdG9yIChuYW1lLCBwcm9wcykge1xuICAgIHN1cGVyKG5hbWUsIHByb3BzKVxuICAgIHRoaXMubm9kZVR5cGUgPSBOb2RlLkNPTU1FTlRfTk9ERVxuICB9XG59XG4iLCJpbXBvcnQgeyBFdmVudCB9IGZyb20gJy4vRXZlbnQuanMnXG5leHBvcnQgY2xhc3MgQ3VzdG9tRXZlbnQgZXh0ZW5kcyBFdmVudCB7XG4gIGNvbnN0cnVjdG9yIChuYW1lLCBwcm9wcyA9IHt9KSB7XG4gICAgc3VwZXIobmFtZSlcbiAgICB0aGlzLmRldGFpbCA9IHByb3BzLmRldGFpbCB8fCBudWxsXG4gICAgdGhpcy5jYW5jZWxhYmxlID0gcHJvcHMuY2FuY2VsYWJsZSB8fCBmYWxzZVxuICB9XG59XG4iLCJpbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi9Ob2RlLmpzJ1xuaW1wb3J0IHsgQ29tbWVudCB9IGZyb20gJy4vQ29tbWVudC5qcydcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuL1RleHQuanMnXG5pbXBvcnQgeyBBdHRyIH0gZnJvbSAnLi9BdHRyLmpzJ1xuaW1wb3J0IHsgRG9jdW1lbnRGcmFnbWVudCB9IGZyb20gJy4vRG9jdW1lbnRGcmFnbWVudC5qcydcbmltcG9ydCB7IEhUTUxMaW5rRWxlbWVudCB9IGZyb20gJy4vaHRtbC9IVE1MTGlua0VsZW1lbnQuanMnXG5pbXBvcnQgeyBIVE1MU2NyaXB0RWxlbWVudCB9IGZyb20gJy4vaHRtbC9IVE1MU2NyaXB0RWxlbWVudC5qcydcbmltcG9ydCB7IEhUTUxJbWFnZUVsZW1lbnQgfSBmcm9tICcuL2h0bWwvSFRNTEltYWdlRWxlbWVudC5qcydcbmltcG9ydCB7IEhUTUxFbGVtZW50IH0gZnJvbSAnLi9odG1sL0hUTUxFbGVtZW50LmpzJ1xuaW1wb3J0IHsgZWxlbWVudEFjY2VzcyB9IGZyb20gJy4vbWl4aW5zL2VsZW1lbnRBY2Nlc3MuanMnXG5pbXBvcnQgeyBtaXhpbiB9IGZyb20gJy4uL3V0aWxzL29iamVjdENyZWF0aW9uVXRpbHMuanMnXG5pbXBvcnQgeyBTVkdTVkdFbGVtZW50IH0gZnJvbSAnLi9zdmcvU1ZHU1ZHRWxlbWVudC5qcydcbmltcG9ydCB7IFNWR1BhdGhFbGVtZW50IH0gZnJvbSAnLi9zdmcvU1ZHUGF0aEVsZW1lbnQuanMnXG5pbXBvcnQgeyBTVkdUZXh0Q29udGVudEVsZW1lbnQgfSBmcm9tICcuL3N2Zy9TVkdUZXh0Q29udGVudEVsZW1lbnQuanMnXG5pbXBvcnQgeyBTVkdHcmFwaGljc0VsZW1lbnQgfSBmcm9tICcuL3N2Zy9TVkdHcmFwaGljc0VsZW1lbnQuanMnXG5pbXBvcnQgeyBQYXJlbnROb2RlIH0gZnJvbSAnLi9taXhpbnMvUGFyZW50Tm9kZS5qcydcbmltcG9ydCB7IHN2ZywgaHRtbCB9IGZyb20gJy4uL3V0aWxzL25hbWVzcGFjZXMuanMnXG5pbXBvcnQgeyBEb2N1bWVudFR5cGUgfSBmcm9tICcuL0RvY3VtZW50VHlwZS5qcydcbmltcG9ydCB7IE5vbkVsZW1lbnRQYXJlbnROb2RlIH0gZnJvbSAnLi9taXhpbnMvTm9uRWxlbWVudFBhcmVudE5vZGUuanMnXG5cbmZ1bmN0aW9uIGdldENoaWxkQnlUYWdOYW1lIChwYXJlbnQsIG5hbWUpIHtcbiAgZm9yIChsZXQgY2hpbGQgPSBwYXJlbnQuZmlyc3RDaGlsZDsgY2hpbGQgIT0gbnVsbDsgY2hpbGQgPSBjaGlsZC5uZXh0U2libGluZykge1xuICAgIGlmIChjaGlsZC5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUgJiYgY2hpbGQubm9kZU5hbWUgPT09IG5hbWUpIHtcbiAgICAgIHJldHVybiBjaGlsZFxuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbFxufVxuXG5jb25zdCBnZXRTVkdFbGVtZW50Rm9yTmFtZSA9IChuYW1lKSA9PiB7XG4gIHN3aXRjaCAobmFtZS50b0xvd2VyQ2FzZSgpKSB7XG4gIGNhc2UgJ3N2Zyc6XG4gICAgcmV0dXJuIFNWR1NWR0VsZW1lbnRcbiAgY2FzZSAncGF0aCc6XG4gICAgcmV0dXJuIFNWR1BhdGhFbGVtZW50XG4gIGNhc2UgJ3RleHQnOlxuICBjYXNlICd0c3Bhbic6XG4gIGNhc2UgJ3RyZWYnOlxuICBjYXNlICdhbHRnbHlwaCc6XG4gIGNhc2UgJ3RleHRwYXRoJzpcbiAgICByZXR1cm4gU1ZHVGV4dENvbnRlbnRFbGVtZW50XG4gIGRlZmF1bHQ6XG4gICAgcmV0dXJuIFNWR0dyYXBoaWNzRWxlbWVudFxuICB9XG59XG5cbmNvbnN0IGdldEhUTUxFbGVtZW50Rm9yTmFtZSA9IChuYW1lKSA9PiB7XG4gIHN3aXRjaCAobmFtZS50b0xvd2VyQ2FzZSgpKSB7XG4gIGNhc2UgJ2ltZyc6XG4gICAgcmV0dXJuIEhUTUxJbWFnZUVsZW1lbnRcbiAgY2FzZSAnbGluayc6XG4gICAgcmV0dXJuIEhUTUxMaW5rRWxlbWVudFxuICBjYXNlICdzY3JpcHQnOlxuICAgIHJldHVybiBIVE1MU2NyaXB0RWxlbWVudFxuICBkZWZhdWx0OlxuICAgIHJldHVybiBIVE1MRWxlbWVudFxuICB9XG59XG5cbmNvbnN0IGdldEVsZW1lbnRGb3JOYW1lc3BhY2UgPSAobnMsIG5hbWUpID0+IHtcbiAgc3dpdGNoIChucykge1xuICBjYXNlIHN2ZzpcbiAgICByZXR1cm4gZ2V0U1ZHRWxlbWVudEZvck5hbWUobmFtZSlcbiAgY2FzZSBodG1sOlxuICBjYXNlIG51bGw6XG4gIGNhc2UgJyc6XG4gIGRlZmF1bHQ6XG4gICAgcmV0dXJuIGdldEhUTUxFbGVtZW50Rm9yTmFtZShuYW1lKVxuICB9XG59XG5cbi8vIEZlYXR1cmUvdmVyc2lvbiBwYWlycyB0aGF0IERPTUltcGxlbWVudGF0aW9uLmhhc0ZlYXR1cmUoKSByZXR1cm5zIHRydWUgZm9yLiAgSXQgcmV0dXJucyBmYWxzZSBmb3IgYW55dGhpbmcgZWxzZS5cbmNvbnN0IHN1cHBvcnRlZEZlYXR1cmVzID0ge1xuICB4bWw6IHsgJyc6IHRydWUsICcxLjAnOiB0cnVlLCAnMi4wJzogdHJ1ZSB9LFxuICBjb3JlOiB7ICcnOiB0cnVlLCAnMi4wJzogdHJ1ZSB9LFxuICBodG1sOiB7ICcnOiB0cnVlLCAnMS4wJzogdHJ1ZSwgJzIuMCc6IHRydWUgfSxcbiAgeGh0bWw6IHsgJyc6IHRydWUsICcxLjAnOiB0cnVlLCAnMi4wJzogdHJ1ZSB9IC8vIEhUTUxcbn1cblxuZXhwb3J0IGNvbnN0IERPTUltcGxlbWVudGF0aW9uID0ge1xuICBoYXNGZWF0dXJlIChmZWF0dXJlLCB2ZXJzaW9uKSB7XG4gICAgY29uc3QgZiA9IHN1cHBvcnRlZEZlYXR1cmVzWyhmZWF0dXJlIHx8ICcnKS50b0xvd2VyQ2FzZSgpXVxuICAgIHJldHVybiAoZiAmJiBmW3ZlcnNpb24gfHwgJyddKSB8fCBmYWxzZVxuICB9LFxuXG4gIGNyZWF0ZURvY3VtZW50VHlwZSAocXVhbGlmaWVkTmFtZSwgcHVibGljSWQsIHN5c3RlbUlkKSB7XG4gICAgcmV0dXJuIG5ldyBEb2N1bWVudFR5cGUocXVhbGlmaWVkTmFtZSwgeyBwdWJsaWNJZCwgc3lzdGVtSWQsIG93bmVyRG9jdW1lbnQ6IHRoaXMgfSlcbiAgfSxcblxuICBjcmVhdGVEb2N1bWVudCAobmFtZXNwYWNlLCBxdWFsaWZpZWROYW1lLCBkb2N0eXBlKSB7XG4gICAgY29uc3QgZG9jID0gbmV3IERvY3VtZW50KG5hbWVzcGFjZSlcbiAgICBpZiAoZG9jdHlwZSkge1xuICAgICAgaWYgKGRvY3R5cGUub3duZXJEb2N1bWVudCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3RoZSBvYmplY3QgaXMgaW4gdGhlIHdyb25nIERvY3VtZW50LCBhIGNhbGwgdG8gaW1wb3J0Tm9kZSBpcyByZXF1aXJlZCcpXG4gICAgICB9XG4gICAgICBkb2N0eXBlLm93bmVyRG9jdW1lbnQgPSBkb2NcbiAgICAgIGRvYy5hcHBlbmRDaGlsZChkb2N0eXBlKVxuICAgIH1cbiAgICBpZiAocXVhbGlmaWVkTmFtZSkge1xuICAgICAgZG9jLmFwcGVuZENoaWxkKGRvYy5jcmVhdGVFbGVtZW50TlMobmFtZXNwYWNlLCBxdWFsaWZpZWROYW1lKSlcbiAgICB9XG4gICAgcmV0dXJuIGRvY1xuICB9LFxuXG4gIGNyZWF0ZUhUTUxEb2N1bWVudCAodGl0bGVUZXh0ID0gJycpIHtcbiAgICBjb25zdCBkID0gbmV3IERvY3VtZW50KGh0bWwpXG4gICAgY29uc3Qgcm9vdCA9IGQuY3JlYXRlRWxlbWVudCgnaHRtbCcpXG4gICAgY29uc3QgaGVhZCA9IGQuY3JlYXRlRWxlbWVudCgnaGVhZCcpXG4gICAgY29uc3QgdGl0bGUgPSBkLmNyZWF0ZUVsZW1lbnQoJ3RpdGxlJylcbiAgICB0aXRsZS5hcHBlbmRDaGlsZChkLmNyZWF0ZVRleHROb2RlKHRpdGxlVGV4dCkpXG4gICAgaGVhZC5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgICByb290LmFwcGVuZENoaWxkKGhlYWQpXG4gICAgcm9vdC5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnQoJ2JvZHknKSlcblxuICAgIGQuYXBwZW5kQ2hpbGQocm9vdClcbiAgICByZXR1cm4gZFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudCBleHRlbmRzIE5vZGUge1xuICBjb25zdHJ1Y3RvciAobnMpIHtcbiAgICBzdXBlcignI2RvY3VtZW50Jywge30sIG5zKVxuICAgIHRoaXMubm9kZVR5cGUgPSBOb2RlLkRPQ1VNRU5UX05PREVcbiAgICB0aGlzLmltcGxlbWVudGF0aW9uID0gRE9NSW1wbGVtZW50YXRpb25cbiAgICB0aGlzLmRlZmF1bHRWaWV3ID0gbnVsbFxuICB9XG5cbiAgLy8gaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnLyNkb20tZG9jdW1lbnQtY3JlYXRlYXR0cmlidXRlXG4gIGNyZWF0ZUF0dHJpYnV0ZSAobG9jYWxOYW1lKSB7XG4gICAgaWYgKHRoaXMubmFtZXNwYWNlVVJJID09PSBodG1sKSB7XG4gICAgICBsb2NhbE5hbWUgPSBsb2NhbE5hbWUudG9Mb3dlckNhc2UoKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jcmVhdGVBdHRyaWJ1dGVOUyhudWxsLCBsb2NhbE5hbWUsIHRydWUpXG4gIH1cblxuICBjcmVhdGVBdHRyaWJ1dGVOUyAobnMsIHF1YWxpZmllZE5hbWUsIGxvY2FsID0gZmFsc2UpIHtcbiAgICByZXR1cm4gbmV3IEF0dHIocXVhbGlmaWVkTmFtZSwgeyBvd25lckRvY3VtZW50OiB0aGlzLCBsb2NhbCB9LCBucylcbiAgfVxuXG4gIGNyZWF0ZUNvbW1lbnQgKHRleHQpIHtcbiAgICByZXR1cm4gbmV3IENvbW1lbnQoJyNjb21tZW50JywgeyBub2RlVmFsdWU6IHRleHQsIG93bmVyRG9jdW1lbnQ6IHRoaXMgfSlcbiAgfVxuXG4gIGNyZWF0ZURvY3VtZW50RnJhZ21lbnQgKG5hbWUpIHtcbiAgICByZXR1cm4gbmV3IERvY3VtZW50RnJhZ21lbnQoJyNkb2N1bWVudC1mcmFnbWVudCcsIHsgb3duZXJEb2N1bWVudDogdGhpcyB9KVxuICB9XG5cbiAgY3JlYXRlRWxlbWVudCAobG9jYWxOYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlRWxlbWVudE5TKHRoaXMubmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUsIHRydWUpXG4gIH1cblxuICBjcmVhdGVFbGVtZW50TlMgKG5zLCBxdWFsaWZpZWROYW1lLCBsb2NhbCA9IGZhbHNlKSB7XG4gICAgY29uc3QgRWxlbWVudCA9IGdldEVsZW1lbnRGb3JOYW1lc3BhY2UobnMsIHF1YWxpZmllZE5hbWUpXG5cbiAgICByZXR1cm4gbmV3IEVsZW1lbnQocXVhbGlmaWVkTmFtZSwge1xuICAgICAgb3duZXJEb2N1bWVudDogdGhpcyxcbiAgICAgIGxvY2FsXG4gICAgfSwgbnMpXG4gIH1cblxuICBjcmVhdGVUZXh0Tm9kZSAodGV4dCkge1xuICAgIHJldHVybiBuZXcgVGV4dCgnI3RleHQnLCB7IG5vZGVWYWx1ZTogdGV4dCwgb3duZXJEb2N1bWVudDogdGhpcyB9KVxuICB9XG5cbiAgZ2V0IGNvbXBhdE1vZGUgKCkge1xuICAgIHJldHVybiAnQ1NTMUNvbXBhdCcgLy8gYWx3YXlzIGJlIGluIHN0YW5kYXJkcy1tb2RlXG4gIH1cblxuICBnZXQgYm9keSAoKSB7XG4gICAgcmV0dXJuIGdldENoaWxkQnlUYWdOYW1lKHRoaXMuZG9jdW1lbnRFbGVtZW50LCAnQk9EWScpXG4gIH1cblxuICBnZXQgaGVhZCAoKSB7XG4gICAgcmV0dXJuIGdldENoaWxkQnlUYWdOYW1lKHRoaXMuZG9jdW1lbnRFbGVtZW50LCAnSEVBRCcpXG4gIH1cblxuICBnZXQgZG9jdW1lbnRFbGVtZW50ICgpIHtcbiAgICByZXR1cm4gdGhpcy5sYXN0Q2hpbGRcbiAgfVxufVxuXG5taXhpbihlbGVtZW50QWNjZXNzLCBEb2N1bWVudClcbm1peGluKFBhcmVudE5vZGUsIERvY3VtZW50KVxubWl4aW4oTm9uRWxlbWVudFBhcmVudE5vZGUsIERvY3VtZW50KVxuIiwiaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4vTm9kZS5qcydcbmltcG9ydCB7IG1peGluIH0gZnJvbSAnLi4vdXRpbHMvb2JqZWN0Q3JlYXRpb25VdGlscy5qcydcbmltcG9ydCB7IGVsZW1lbnRBY2Nlc3MgfSBmcm9tICcuL21peGlucy9lbGVtZW50QWNjZXNzLmpzJ1xuaW1wb3J0IHsgUGFyZW50Tm9kZSB9IGZyb20gJy4vbWl4aW5zL1BhcmVudE5vZGUuanMnXG5pbXBvcnQgeyBOb25FbGVtZW50UGFyZW50Tm9kZSB9IGZyb20gJy4vbWl4aW5zL05vbkVsZW1lbnRQYXJlbnROb2RlLmpzJ1xuZXhwb3J0IGNsYXNzIERvY3VtZW50RnJhZ21lbnQgZXh0ZW5kcyBOb2RlIHtcbiAgY29uc3RydWN0b3IgKG5hbWUsIHByb3BzKSB7XG4gICAgc3VwZXIobmFtZSwgcHJvcHMpXG4gICAgdGhpcy5ub2RlVHlwZSA9IE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERVxuICB9XG59XG5cbm1peGluKGVsZW1lbnRBY2Nlc3MsIERvY3VtZW50RnJhZ21lbnQpXG5taXhpbihQYXJlbnROb2RlLCBEb2N1bWVudEZyYWdtZW50KVxubWl4aW4oTm9uRWxlbWVudFBhcmVudE5vZGUsIERvY3VtZW50RnJhZ21lbnQpXG4iLCJpbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi9Ob2RlLmpzJ1xuaW1wb3J0IHsgbWl4aW4gfSBmcm9tICcuLi91dGlscy9vYmplY3RDcmVhdGlvblV0aWxzLmpzJ1xuaW1wb3J0IHsgQ2hpbGROb2RlIH0gZnJvbSAnLi9taXhpbnMvQ2hpbGROb2RlLmpzJ1xuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRUeXBlIGV4dGVuZHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yIChuYW1lLCBwcm9wcykge1xuICAgIHN1cGVyKG5hbWUsIHByb3BzKVxuXG4gICAgdGhpcy5ub2RlVHlwZSA9IE5vZGUuRE9DVU1FTlRfVFlQRV9OT0RFXG4gICAgdGhpcy5uYW1lID0gbmFtZVxuXG4gICAgY29uc3QgeyBwdWJsaWNJZCwgc3lzdGVtSWQgfSA9IHByb3BzXG4gICAgdGhpcy5wdWJsaWNJZCA9IHB1YmxpY0lkIHx8ICcnXG4gICAgdGhpcy5zeXN0ZW1JZCA9IHN5c3RlbUlkIHx8ICcnXG4gIH1cbn1cblxubWl4aW4oQ2hpbGROb2RlLCBEb2N1bWVudFR5cGUpXG4iLCJpbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi9Ob2RlLmpzJ1xuXG5pbXBvcnQgeyBQYXJlbnROb2RlIH0gZnJvbSAnLi9taXhpbnMvUGFyZW50Tm9kZS5qcydcbmltcG9ydCB7IGVsZW1lbnRBY2Nlc3MgfSBmcm9tICcuL21peGlucy9lbGVtZW50QWNjZXNzLmpzJ1xuaW1wb3J0IHsgSFRNTFBhcnNlciB9IGZyb20gJy4vaHRtbC9IVE1MUGFyc2VyLmpzJ1xuaW1wb3J0IHsgRG9jdW1lbnRGcmFnbWVudCB9IGZyb20gJy4vRG9jdW1lbnRGcmFnbWVudC5qcydcbmltcG9ydCB7IG1peGluIH0gZnJvbSAnLi4vdXRpbHMvb2JqZWN0Q3JlYXRpb25VdGlscy5qcydcbmltcG9ydCB7IHRhZyB9IGZyb20gJy4uL3V0aWxzL3RhZ1V0aWxzLmpzJ1xuaW1wb3J0IHsgY3NzVG9NYXAsIG1hcFRvQ3NzIH0gZnJvbSAnLi4vdXRpbHMvbWFwVXRpbHMuanMnXG5pbXBvcnQgeyBoZXhUb1JHQiwgZGVjYW1lbGl6ZSwgaHRtbEVudGl0aWVzLCBjZGF0YSwgY29tbWVudCB9IGZyb20gJy4uL3V0aWxzL3N0clV0aWxzLmpzJ1xuaW1wb3J0IHsgTm9uRG9jdW1lbnRUeXBlQ2hpbGROb2RlIH0gZnJvbSAnLi9taXhpbnMvTm9uRG9jdW1lbnRUeXBlQ2hpbGROb2RlLmpzJ1xuaW1wb3J0IHsgQ2hpbGROb2RlIH0gZnJvbSAnLi9taXhpbnMvQ2hpbGROb2RlLmpzJ1xuaW1wb3J0IHsgaHRtbCwgeG1sLCB4bWxucyB9IGZyb20gJy4uL3V0aWxzL25hbWVzcGFjZXMuanMnXG5cbmNvbnN0IHZhbGlkYXRlQW5kRXh0cmFjdCA9IChucywgbmFtZSkgPT4ge1xuICBsZXQgcHJlZml4ID0gbnVsbFxuICBsZXQgbG9jYWxuYW1lID0gbmFtZVxuXG4gIGlmICghbnMpIG5zID0gbnVsbFxuXG4gIGlmIChuYW1lLmluY2x1ZGVzKCc6JykpIHtcbiAgICBbIHByZWZpeCwgbG9jYWxuYW1lIF0gPSBuYW1lLnNwbGl0KCc6JylcbiAgfVxuXG4gIGlmICghbnMgJiYgcHJlZml4KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdOYW1lc3BhY2UgRXJyb3InKVxuICB9XG5cbiAgaWYgKHByZWZpeCA9PT0gJ3htbCcgJiYgbnMgIT09IHhtbCkge1xuICAgIHRocm93IG5ldyBFcnJvcignTmFtZXNwYWNlIEVycm9yJylcbiAgfVxuXG4gIGlmICgocHJlZml4ID09PSAneG1sbnMnIHx8IG5hbWUgPT09ICd4bWxucycpICYmIG5zICE9PSB4bWxucykge1xuICAgIHRocm93IG5ldyBFcnJvcignTmFtZXNwYWNlIEVycm9yJylcbiAgfVxuXG4gIGlmIChwcmVmaXggIT09ICd4bWxucycgJiYgbmFtZSAhPT0gJ3htbG5zJyAmJiBucyA9PT0geG1sbnMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05hbWVzcGFjZSBFcnJvcicpXG4gIH1cblxuICByZXR1cm4gWyBucywgcHJlZml4LCBsb2NhbG5hbWUgXVxufVxuXG5jb25zdCBnZXRBdHRyaWJ1dGVCeU5zQW5kTG9jYWxOYW1lID0gKGVsLCBucywgbG9jYWxOYW1lKSA9PiB7XG4gIGlmICghbnMpIG5zID0gbnVsbFxuICByZXR1cm4gWyAuLi5lbC5hdHRycyBdLmZpbmQoKG5vZGUpID0+IG5vZGUubG9jYWxOYW1lID09PSBsb2NhbE5hbWUgJiYgbm9kZS5uYW1lc3BhY2VVUkkgPT09IG5zKVxufVxuXG5jb25zdCBnZXRBdHRyaWJ1dGVCeVF1YWxpZmllZE5hbWUgPSAoZWwsIHF1YWxpZmllZE5hbWUpID0+IHtcbiAgaWYgKGVsLm5hbWVzcGFjZVVSSSA9PT0gaHRtbCAmJiBlbC5vd25lckRvY3VtZW50Lm5hbWVzcGFjZVVSSSA9PT0gaHRtbCkge1xuICAgIHF1YWxpZmllZE5hbWUgPSBxdWFsaWZpZWROYW1lLnRvTG93ZXJDYXNlKClcbiAgfVxuXG4gIHJldHVybiBbIC4uLmVsLmF0dHJzIF0uZmluZCgobm9kZSkgPT4gbm9kZS5uYW1lID09PSBxdWFsaWZpZWROYW1lKVxufVxuXG4vLyBUaGlzIFByb3h5IHByb3hpZXMgYWxsIGFjY2VzcyB0byBub2RlLnN0eWxlIHRvIHRoZSBjc3Mgc2F2ZWQgaW4gdGhlIGF0dHJpYnV0ZVxuY29uc3QgZ2V0U3R5bGVQcm94eSA9IChub2RlKSA9PiB7XG5cbiAgcmV0dXJuIG5ldyBQcm94eShub2RlLCB7XG4gICAgZ2V0ICh0YXJnZXQsIGtleSkge1xuICAgICAgY29uc3Qgc3R5bGVzID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnc3R5bGUnKSB8fCAnJ1xuICAgICAgY29uc3Qgc3R5bGVNYXAgPSBjc3NUb01hcChzdHlsZXMpXG5cbiAgICAgIGlmIChrZXkgPT09ICdjc3NUZXh0Jykge1xuICAgICAgICByZXR1cm4gc3R5bGVzXG4gICAgICB9XG5cbiAgICAgIGlmIChrZXkgPT09ICdzZXRQcm9wZXJ0eScpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwcm9wZXJ0eU5hbWUsIHZhbHVlID0gJycsIHByaW9yaXR5ID0gJycpIHtcbiAgICAgICAgICBub2RlLnN0eWxlW3Byb3BlcnR5TmFtZV0gPSB2YWx1ZSArIChwcmlvcml0eSA/IGAgISR7cHJpb3JpdHl9YCA6ICcnKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGtleSA9IGRlY2FtZWxpemUoa2V5KVxuICAgICAgaWYgKCFzdHlsZU1hcC5oYXMoa2V5KSkgcmV0dXJuICcnXG5cbiAgICAgIHJldHVybiBzdHlsZU1hcC5nZXQoa2V5KVxuICAgIH0sXG4gICAgc2V0ICh0YXJnZXQsIGtleSwgdmFsdWUpIHtcbiAgICAgIGtleSA9IGRlY2FtZWxpemUoa2V5KVxuXG4gICAgICBpZiAoa2V5ID09PSAnY3NzLXRleHQnKSB7XG4gICAgICAgIC8vIGVuc3VyZSBjb3JyZWN0IHNwYWNpbmcgYW5kIHN5bnRheCBieSBjb252ZXJ0aW5nIGJhY2sgYW5kIGZvcnRoXG4gICAgICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgbWFwVG9Dc3MoY3NzVG9NYXAodmFsdWUpKSlcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gaGV4VG9SR0IodmFsdWUudG9TdHJpbmcoKSlcbiAgICAgICAgY29uc3Qgc3R5bGVzID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnc3R5bGUnKSB8fCAnJ1xuICAgICAgICBjb25zdCBzdHlsZU1hcCA9IGNzc1RvTWFwKHN0eWxlcylcbiAgICAgICAgc3R5bGVNYXAuc2V0KGtleSwgdmFsdWUpXG5cbiAgICAgICAgdGFyZ2V0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBtYXBUb0NzcyhzdHlsZU1hcCkpXG5cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59XG5cbi8vIGh0dHBzOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jZG9tLWVsZW1lbnQtc2V0YXR0cmlidXRlbnNcbmV4cG9ydCBjbGFzcyBFbGVtZW50IGV4dGVuZHMgTm9kZSB7XG4gIGNvbnN0cnVjdG9yIChuYW1lLCBwcm9wcywgbnMpIHtcbiAgICBzdXBlcihuYW1lLCBwcm9wcywgbnMpXG5cbiAgICB0aGlzLnN0eWxlID0gZ2V0U3R5bGVQcm94eSh0aGlzKVxuICAgIHRoaXMudGFnTmFtZSA9IHRoaXMubm9kZU5hbWVcbiAgfVxuXG4gIGdldEF0dHJpYnV0ZSAocXVhbGlmaWVkTmFtZSkge1xuICAgIGNvbnN0IGF0dHIgPSB0aGlzLmdldEF0dHJpYnV0ZU5vZGUocXVhbGlmaWVkTmFtZSlcbiAgICByZXR1cm4gYXR0ciA/IGF0dHIudmFsdWUgOiBudWxsXG4gIH1cblxuICBnZXRBdHRyaWJ1dGVOb2RlIChxdWFsaWZpZWROYW1lKSB7XG4gICAgcmV0dXJuIGdldEF0dHJpYnV0ZUJ5UXVhbGlmaWVkTmFtZSh0aGlzLCBxdWFsaWZpZWROYW1lKVxuICB9XG5cbiAgZ2V0QXR0cmlidXRlTm9kZU5TIChucywgbG9jYWxOYW1lKSB7XG4gICAgcmV0dXJuIGdldEF0dHJpYnV0ZUJ5TnNBbmRMb2NhbE5hbWUodGhpcywgbnMsIGxvY2FsTmFtZSlcbiAgfVxuXG4gIGdldEF0dHJpYnV0ZU5TIChucywgbG9jYWxOYW1lKSB7XG4gICAgY29uc3QgYXR0ciA9IHRoaXMuZ2V0QXR0cmlidXRlTm9kZU5TKG5zLCBsb2NhbE5hbWUpXG4gICAgcmV0dXJuIGF0dHIgPyBhdHRyLnZhbHVlIDogbnVsbFxuICB9XG5cbiAgZ2V0Qm91bmRpbmdDbGllbnRSZWN0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ09ubHkgaW1wbGVtZW50ZWQgZm9yIFNWRyBFbGVtZW50cycpXG4gIH1cblxuICBoYXNBdHRyaWJ1dGUgKHF1YWxpZmllZE5hbWUpIHtcbiAgICBjb25zdCBhdHRyID0gdGhpcy5nZXRBdHRyaWJ1dGVOb2RlKHF1YWxpZmllZE5hbWUpXG4gICAgcmV0dXJuICEhYXR0clxuICB9XG5cbiAgaGFzQXR0cmlidXRlTlMgKG5zLCBsb2NhbE5hbWUpIHtcbiAgICBjb25zdCBhdHRyID0gdGhpcy5nZXRBdHRyaWJ1dGVOb2RlTlMobnMsIGxvY2FsTmFtZSlcbiAgICByZXR1cm4gISFhdHRyXG4gIH1cblxuICBtYXRjaGVzIChxdWVyeSkge1xuICAgIHJldHVybiB0aGlzLm1hdGNoV2l0aFNjb3BlKHF1ZXJ5LCB0aGlzKVxuICB9XG5cbiAgcmVtb3ZlQXR0cmlidXRlIChxdWFsaWZpZWROYW1lKSB7XG4gICAgY29uc3QgYXR0ciA9IHRoaXMuZ2V0QXR0cmlidXRlTm9kZShxdWFsaWZpZWROYW1lKVxuICAgIGlmIChhdHRyKSB7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZU5vZGUoYXR0cilcbiAgICB9XG4gICAgcmV0dXJuIGF0dHJcbiAgfVxuXG4gIHJlbW92ZUF0dHJpYnV0ZU5vZGUgKG5vZGUpIHtcbiAgICBpZiAoIXRoaXMuYXR0cnMuZGVsZXRlKG5vZGUpKSB0aHJvdyBuZXcgRXJyb3IoJ0F0dHJpYnV0ZSBjYW5ub3QgYmUgcmVtb3ZlZCBiZWNhdXNlIGl0IHdhcyBub3QgZm91bmQgb24gdGhlIGVsZW1lbnQnKVxuICAgIHJldHVybiBub2RlXG4gIH1cblxuICAvLyBjYWxsIGlzOiBkLnJlbW92ZUF0dHJpYnV0ZU5TKCdodHRwOi8vd3d3Lm1vemlsbGEub3JnL25zL3NwZWNpYWxzcGFjZScsICdhbGlnbicsICdjZW50ZXInKTtcbiAgcmVtb3ZlQXR0cmlidXRlTlMgKG5zLCBsb2NhbE5hbWUpIHtcbiAgICBjb25zdCBhdHRyID0gdGhpcy5nZXRBdHRyaWJ1dGVOb2RlTlMobnMsIGxvY2FsTmFtZSlcbiAgICBpZiAoYXR0cikge1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGVOb2RlKGF0dHIpXG4gICAgfVxuICAgIHJldHVybiBhdHRyXG4gIH1cblxuICAvKiBUaGUgc2V0QXR0cmlidXRlKHF1YWxpZmllZE5hbWUsIHZhbHVlKSBtZXRob2QsIHdoZW4gaW52b2tlZCwgbXVzdCBydW4gdGhlc2Ugc3RlcHM6XG5cbiAgICBJZiBxdWFsaWZpZWROYW1lIGRvZXMgbm90IG1hdGNoIHRoZSBOYW1lIHByb2R1Y3Rpb24gaW4gWE1MLCB0aGVuIHRocm93IGFuIFwiSW52YWxpZENoYXJhY3RlckVycm9yXCIgRE9NRXhjZXB0aW9uLlxuXG4gICAgSWYgdGhpcyBpcyBpbiB0aGUgSFRNTCBuYW1lc3BhY2UgYW5kIGl0cyBub2RlIGRvY3VtZW50IGlzIGFuIEhUTUwgZG9jdW1lbnQsIHRoZW4gc2V0IHF1YWxpZmllZE5hbWUgdG8gcXVhbGlmaWVkTmFtZSBpbiBBU0NJSSBsb3dlcmNhc2UuXG5cbiAgICBMZXQgYXR0cmlidXRlIGJlIHRoZSBmaXJzdCBhdHRyaWJ1dGUgaW4gdGhpc+KAmXMgYXR0cmlidXRlIGxpc3Qgd2hvc2UgcXVhbGlmaWVkIG5hbWUgaXMgcXVhbGlmaWVkTmFtZSwgYW5kIG51bGwgb3RoZXJ3aXNlLlxuXG4gICAgSWYgYXR0cmlidXRlIGlzIG51bGwsIGNyZWF0ZSBhbiBhdHRyaWJ1dGUgd2hvc2UgbG9jYWwgbmFtZSBpcyBxdWFsaWZpZWROYW1lLCB2YWx1ZSBpcyB2YWx1ZSwgYW5kIG5vZGUgZG9jdW1lbnQgaXMgdGhpc+KAmXMgbm9kZSBkb2N1bWVudCwgdGhlbiBhcHBlbmQgdGhpcyBhdHRyaWJ1dGUgdG8gdGhpcywgYW5kIHRoZW4gcmV0dXJuLlxuXG4gICAgQ2hhbmdlIGF0dHJpYnV0ZSB0byB2YWx1ZS5cbiAgKi9cbiAgc2V0QXR0cmlidXRlIChxdWFsaWZpZWROYW1lLCB2YWx1ZSkge1xuICAgIC8vIFdlIGhhdmUgdG8gZG8gdGhhdCBoZXJlIGJlY2F1c2Ugd2UgY2Fubm90IGNoZWNrIGlmIGB0aGlzYCBpcyBpbiB0aGUgY29ycmVjdCBuYW1lc3BhY2VcbiAgICAvLyB3aGVuIGRvaW5nIGl0IGluIGNyZWF0ZUF0dHJpYnV0ZVxuICAgIGlmICh0aGlzLm5hbWVzcGFjZVVSSSA9PT0gaHRtbCAmJiB0aGlzLm93bmVyRG9jdW1lbnQubmFtZXNwYWNlVVJJID09PSBodG1sKSB7XG4gICAgICBxdWFsaWZpZWROYW1lID0gcXVhbGlmaWVkTmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgfVxuXG4gICAgbGV0IGF0dHIgPSB0aGlzLmdldEF0dHJpYnV0ZU5vZGUocXVhbGlmaWVkTmFtZSlcbiAgICBpZiAoIWF0dHIpIHtcbiAgICAgIC8vIEJlY2F1c2UgY3JlYXRlQXR0cmlidXRlIGxvd2VyY2FzZXMgdGhlIGF0dHJpYnV0ZSBpbiBhbiBodG1sIGRvYyB3ZSBoYXZlIHRvIHVzZSBjcmVhdGVBdHRyaWJ1dGVOU1xuICAgICAgYXR0ciA9IHRoaXMub3duZXJEb2N1bWVudC5jcmVhdGVBdHRyaWJ1dGVOUyhudWxsLCBxdWFsaWZpZWROYW1lLCB0cnVlKVxuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGVOb2RlKGF0dHIpXG4gICAgfVxuXG4gICAgYXR0ci52YWx1ZSA9IHZhbHVlXG4gIH1cblxuICAvKlxuICAgIExldCBuYW1lc3BhY2UsIHByZWZpeCwgYW5kIGxvY2FsTmFtZSBiZSB0aGUgcmVzdWx0IG9mIHBhc3NpbmcgbmFtZXNwYWNlIGFuZCBxdWFsaWZpZWROYW1lIHRvIHZhbGlkYXRlIGFuZCBleHRyYWN0LlxuXG4gICAgU2V0IGFuIGF0dHJpYnV0ZSB2YWx1ZSBmb3IgdGhpcyB1c2luZyBsb2NhbE5hbWUsIHZhbHVlLCBhbmQgYWxzbyBwcmVmaXggYW5kIG5hbWVzcGFjZS5cblxuICAgIElmIHByZWZpeCBpcyBub3QgZ2l2ZW4sIHNldCBpdCB0byBudWxsLlxuICAgIElmIG5hbWVzcGFjZSBpcyBub3QgZ2l2ZW4sIHNldCBpdCB0byBudWxsLlxuICAgIExldCBhdHRyaWJ1dGUgYmUgdGhlIHJlc3VsdCBvZiBnZXR0aW5nIGFuIGF0dHJpYnV0ZSBnaXZlbiBuYW1lc3BhY2UsIGxvY2FsTmFtZSwgYW5kIGVsZW1lbnQuXG4gICAgSWYgYXR0cmlidXRlIGlzIG51bGwsIGNyZWF0ZSBhbiBhdHRyaWJ1dGUgd2hvc2UgbmFtZXNwYWNlIGlzIG5hbWVzcGFjZSwgbmFtZXNwYWNlIHByZWZpeCBpcyBwcmVmaXgsIGxvY2FsIG5hbWUgaXMgbG9jYWxOYW1lLCB2YWx1ZSBpcyB2YWx1ZSwgYW5kIG5vZGUgZG9jdW1lbnQgaXMgZWxlbWVudOKAmXMgbm9kZSBkb2N1bWVudCwgdGhlbiBhcHBlbmQgdGhpcyBhdHRyaWJ1dGUgdG8gZWxlbWVudCwgYW5kIHRoZW4gcmV0dXJuLlxuXG4gICAgQ2hhbmdlIGF0dHJpYnV0ZSB0byB2YWx1ZS5cbiAgKi9cblxuICBzZXRBdHRyaWJ1dGVOb2RlIChub2RlKSB7XG4gICAgdGhpcy5hdHRycy5hZGQobm9kZSlcbiAgICBub2RlLm93bmVyRWxlbWVudCA9IHRoaXNcbiAgfVxuXG4gIC8vIGNhbGwgaXM6IGQuc2V0QXR0cmlidXRlTlMoJ2h0dHA6Ly93d3cubW96aWxsYS5vcmcvbnMvc3BlY2lhbHNwYWNlJywgJ3NwZWM6YWxpZ24nLCAnY2VudGVyJyk7XG4gIHNldEF0dHJpYnV0ZU5TIChuYW1lc3BhY2UsIG5hbWUsIHZhbHVlKSB7XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBjb25zdCBbIG5zLCBwcmVmaXgsIGxvY2FsTmFtZSBdID0gdmFsaWRhdGVBbmRFeHRyYWN0KG5hbWVzcGFjZSwgbmFtZSlcblxuICAgIGxldCBhdHRyID0gdGhpcy5nZXRBdHRyaWJ1dGVOb2RlTlMobnMsIGxvY2FsTmFtZSlcbiAgICBpZiAoIWF0dHIpIHtcbiAgICAgIGF0dHIgPSB0aGlzLm93bmVyRG9jdW1lbnQuY3JlYXRlQXR0cmlidXRlTlMobnMsIG5hbWUpXG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZU5vZGUoYXR0cikgLy8gc2V0QXR0cmlidXRlTm9kZU5TIGlzIGEgc3lub255bSBvZiBzZXRBdHRyaWJ1dGVOb2RlXG4gICAgfVxuXG4gICAgYXR0ci52YWx1ZSA9IHZhbHVlXG5cbiAgICB0aGlzLmF0dHJzLmFkZChhdHRyKVxuICB9XG5cbiAgZ2V0IGF0dHJpYnV0ZXMgKCkge1xuICAgIHJldHVybiBbIC4uLnRoaXMuYXR0cnMgXVxuICB9XG5cbiAgZ2V0IGNsYXNzTmFtZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdjbGFzcycpXG4gIH1cblxuICBzZXQgY2xhc3NOYW1lIChjKSB7XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYylcbiAgfVxuXG4gIGdldCBpZCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdpZCcpIHx8ICcnXG4gIH1cblxuICBzZXQgaWQgKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0QXR0cmlidXRlKCdpZCcsIGlkKVxuICB9XG5cbiAgZ2V0IGlubmVySFRNTCAoKSB7XG5cbiAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzLm1hcChub2RlID0+IHtcbiAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkgcmV0dXJuIGh0bWxFbnRpdGllcyhub2RlLmRhdGEpXG4gICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5DREFUQV9TRUNUSU9OX05PREUpIHJldHVybiBjZGF0YShub2RlLmRhdGEpXG4gICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5DT01NRU5UX05PREUpIHJldHVybiBjb21tZW50KG5vZGUuZGF0YSlcbiAgICAgIHJldHVybiBub2RlLm91dGVySFRNTFxuICAgIH0pLmpvaW4oJycpXG4gIH1cblxuICBzZXQgaW5uZXJIVE1MIChzdHIpIHtcbiAgICB3aGlsZSAodGhpcy5maXJzdENoaWxkKSB7XG4gICAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMuZmlyc3RDaGlsZClcbiAgICB9XG4gICAgLy8gVGhlIHBhcnNlciBhZGRzIHRoZSBodG1sIHRvIHRoaXNcbiAgICBIVE1MUGFyc2VyKHN0ciwgdGhpcylcbiAgfVxuXG4gIGdldCBvdXRlckhUTUwgKCkge1xuICAgIHJldHVybiB0YWcodGhpcylcbiAgfVxuXG4gIHNldCBvdXRlckhUTUwgKHN0cikge1xuICAgIHZhciB3ZWxsID0gbmV3IERvY3VtZW50RnJhZ21lbnQoKVxuICAgIEhUTUxQYXJzZXIoc3RyLCB3ZWxsKVxuICAgIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod2VsbCwgdGhpcylcbiAgICB0aGlzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcylcbiAgfVxuXG59XG5cbm1peGluKFBhcmVudE5vZGUsIEVsZW1lbnQpXG5taXhpbihlbGVtZW50QWNjZXNzLCBFbGVtZW50KVxubWl4aW4oTm9uRG9jdW1lbnRUeXBlQ2hpbGROb2RlLCBFbGVtZW50KVxubWl4aW4oQ2hpbGROb2RlLCBFbGVtZW50KVxuIiwiZXhwb3J0IGNsYXNzIEV2ZW50IHtcbiAgY29uc3RydWN0b3IgKHR5cGUpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlXG4gICAgdGhpcy5jYW5jZWxhYmxlID0gZmFsc2VcbiAgICB0aGlzLmRlZmF1bHRQcmV2ZW50ZWQgPSBmYWxzZVxuICAgIHRoaXMudGFyZ2V0ID0gbnVsbFxuICB9XG5cbiAgcHJldmVudERlZmF1bHQgKCkge1xuICAgIGlmICh0aGlzLmNhbmNlbGFibGUpIHtcbiAgICAgIHRoaXMuZGVmYXVsdFByZXZlbnRlZCA9IHRydWVcbiAgICB9XG4gIH1cbn1cbiIsImNvbnN0ICQgPSBTeW1ib2woJ3ByaXZhdGUgcHJvcGVydGllcycpXG5cbmV4cG9ydCBjbGFzcyBFdmVudFRhcmdldCB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzWyRdID0ge31cbiAgICB0aGlzWyRdLmxpc3RlbmVycyA9IHt9XG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVyICh0eXBlLCBjYWxsYmFjaykge1xuICAgIGlmICghKHR5cGUgaW4gdGhpc1skXS5saXN0ZW5lcnMpKSB7XG4gICAgICB0aGlzWyRdLmxpc3RlbmVyc1t0eXBlXSA9IFtdXG4gICAgfVxuICAgIHRoaXNbJF0ubGlzdGVuZXJzW3R5cGVdLnB1c2goY2FsbGJhY2spXG4gIH1cblxuICBkaXNwYXRjaEV2ZW50IChldmVudCkge1xuICAgIGlmICghKGV2ZW50LnR5cGUgaW4gdGhpc1skXS5saXN0ZW5lcnMpKSB7IHJldHVybiB0cnVlIH1cblxuICAgIHZhciBzdGFjayA9IHRoaXNbJF0ubGlzdGVuZXJzW2V2ZW50LnR5cGVdXG4gICAgZXZlbnQudGFyZ2V0ID0gdGhpc1xuXG4gICAgc3RhY2suZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgIGVsKGV2ZW50KVxuICAgIH0pXG5cbiAgICByZXR1cm4gIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWRcbiAgfVxuXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXIgKHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCEodHlwZSBpbiB0aGlzWyRdLmxpc3RlbmVycykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHZhciBzdGFjayA9IHRoaXNbJF0ubGlzdGVuZXJzW3R5cGVdXG4gICAgZm9yICh2YXIgaSA9IDAsIGlsID0gc3RhY2subGVuZ3RoOyBpIDwgaWw7IGkrKykge1xuICAgICAgaWYgKHN0YWNrW2ldID09PSBjYWxsYmFjaykge1xuICAgICAgICBzdGFjay5zcGxpY2UoaSwgMSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cbiIsImltcG9ydCB7IGV4dGVuZCwgZXh0ZW5kU3RhdGljIH0gZnJvbSAnLi4vdXRpbHMvb2JqZWN0Q3JlYXRpb25VdGlscy5qcydcblxuaW1wb3J0IHsgRXZlbnRUYXJnZXQgfSBmcm9tICcuL0V2ZW50VGFyZ2V0LmpzJ1xuaW1wb3J0IHsgY2xvbmVOb2RlIH0gZnJvbSAnLi4vdXRpbHMvdGFnVXRpbHMuanMnXG5pbXBvcnQgeyBodG1sIH0gZnJvbSAnLi4vdXRpbHMvbmFtZXNwYWNlcy5qcydcblxuY29uc3Qgbm9kZVR5cGVzID0ge1xuICBFTEVNRU5UX05PREU6IDEsXG4gIEFUVFJJQlVURV9OT0RFOiAyLFxuICBURVhUX05PREU6IDMsXG4gIENEQVRBX1NFQ1RJT05fTk9ERTogNCxcbiAgRU5USVRZX1JFRkVSRU5DRV9OT0RFOiA1LFxuICBFTlRJVFlfTk9ERTogNixcbiAgUFJPQ0VTU0lOR19JTlNUUlVDVElPTl9OT0RFOiA3LFxuICBDT01NRU5UX05PREU6IDgsXG4gIERPQ1VNRU5UX05PREU6IDksXG4gIERPQ1VNRU5UX1RZUEVfTk9ERTogMTAsXG4gIERPQ1VNRU5UX0ZSQUdNRU5UX05PREU6IDExLFxuICBOT1RBVElPTl9OT0RFOiAxMlxufVxuXG5leHBvcnQgY2xhc3MgTm9kZSBleHRlbmRzIEV2ZW50VGFyZ2V0IHtcbiAgY29uc3RydWN0b3IgKG5hbWUgPSAnJywgcHJvcHMgPSB7fSwgbnMgPSBudWxsKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgLy8gSWYgcHJvcHMubG9jYWwgaXMgdHJ1ZSwgdGhlIGVsZW1lbnQgd2FzIE5vZGUgd2FzIGNyZWF0ZWQgd2l0aCB0aGUgbm9uLW5hbWVzcGFjZSBmdW5jdGlvblxuICAgIC8vIHRoYXQgbWVhbnMgd2hhdGV2ZXIgd2FzIHBhc3NlZCBhcyBuYW1lIGlzIHRoZSBsb2NhbCBuYW1lIGV2ZW4gdGhvdWdoIGl0IG1pZ2h0IGxvb2sgbGlrZSBhIHByZWZpeFxuICAgIGlmIChuYW1lLmluY2x1ZGVzKCc6JykgJiYgIXByb3BzLmxvY2FsKSB7XG4gICAgICA7WyB0aGlzLnByZWZpeCwgdGhpcy5sb2NhbE5hbWUgXSA9IG5hbWUuc3BsaXQoJzonKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvY2FsTmFtZSA9IG5hbWVcbiAgICAgIHRoaXMucHJlZml4ID0gbnVsbFxuICAgIH1cblxuICAgIC8vIEZvbGxvdyBzcGVjIGFuZCB1cHBlcmNhc2Ugbm9kZU5hbWUgZm9yIGh0bWxcbiAgICB0aGlzLm5vZGVOYW1lID0gbnMgPT09IGh0bWwgPyBuYW1lLnRvVXBwZXJDYXNlKCkgOiBuYW1lXG5cbiAgICB0aGlzLm5hbWVzcGFjZVVSSSA9IG5zXG4gICAgdGhpcy5ub2RlVHlwZSA9IE5vZGUuRUxFTUVOVF9OT0RFXG4gICAgdGhpcy5ub2RlVmFsdWUgPSBwcm9wcy5ub2RlVmFsdWUgIT0gbnVsbCA/IHByb3BzLm5vZGVWYWx1ZSA6IG51bGxcbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBbXVxuXG4gICAgdGhpcy5hdHRycyA9IHByb3BzLmF0dHJzIHx8IG5ldyBTZXQoKVxuXG4gICAgdGhpcy5vd25lckRvY3VtZW50ID0gcHJvcHMub3duZXJEb2N1bWVudCB8fCBudWxsXG4gICAgdGhpcy5wYXJlbnROb2RlID0gbnVsbFxuXG4gICAgLy8gdGhpcy5uYW1lc3BhY2VzID0ge31cbiAgICAvLyBpZiAodGhpcy5wcmVmaXgpIHtcbiAgICAvLyAgIHRoaXMubmFtZXNwYWNlc1t0aGlzLnByZWZpeF0gPSBuc1xuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICB0aGlzLm5hbWVzcGFjZXMuZGVmYXVsdCA9IG5zXG4gICAgLy8gfVxuXG4gICAgaWYgKHByb3BzLmNoaWxkTm9kZXMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBpbCA9IHByb3BzLmNoaWxkTm9kZXMubGVuZ3RoOyBpIDwgaWw7ICsraSkge1xuICAgICAgICB0aGlzLmFwcGVuZENoaWxkKHByb3BzLmNoaWxkTm9kZXNbaV0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXBwZW5kQ2hpbGQgKG5vZGUpIHtcbiAgICByZXR1cm4gdGhpcy5pbnNlcnRCZWZvcmUobm9kZSlcbiAgfVxuXG4gIGNsb25lTm9kZSAoZGVlcCA9IGZhbHNlKSB7XG4gICAgY29uc3QgY2xvbmUgPSBjbG9uZU5vZGUodGhpcylcblxuICAgIGlmIChkZWVwKSB7XG4gICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGVsLmNsb25lTm9kZShkZWVwKVxuICAgICAgICBjbG9uZS5hcHBlbmRDaGlsZChub2RlKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gY2xvbmVcbiAgfVxuXG4gIGNvbnRhaW5zIChub2RlKSB7XG4gICAgaWYgKG5vZGUgPT09IHRoaXMpIHJldHVybiBmYWxzZVxuXG4gICAgd2hpbGUgKG5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgaWYgKG5vZGUgPT09IHRoaXMpIHJldHVybiB0cnVlXG4gICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgZ2V0Um9vdE5vZGUgKCkge1xuICAgIGlmICghdGhpcy5wYXJlbnROb2RlIHx8IHRoaXMubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfTk9ERSkgcmV0dXJuIHRoaXNcbiAgICByZXR1cm4gdGhpcy5wYXJlbnROb2RlLmdldFJvb3ROb2RlKClcbiAgfVxuXG4gIGhhc0NoaWxkTm9kZXMgKCkge1xuICAgIHJldHVybiAhIXRoaXMuY2hpbGROb2Rlcy5sZW5ndGhcbiAgfVxuXG4gIGluc2VydEJlZm9yZSAobm9kZSwgYmVmb3JlKSB7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5jaGlsZE5vZGVzLmluZGV4T2YoYmVmb3JlKVxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIGluZGV4ID0gdGhpcy5jaGlsZE5vZGVzLmxlbmd0aFxuICAgIH1cblxuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUpIHtcbiAgICAgIGxldCBjaGlsZFxuICAgICAgbGV0IG9sZENoaWxkID0gYmVmb3JlXG4gICAgICB3aGlsZSAoKGNoaWxkID0gbm9kZS5jaGlsZE5vZGVzLnBvcCgpKSkge1xuICAgICAgICB0aGlzLmluc2VydEJlZm9yZShjaGlsZCwgb2xkQ2hpbGQpXG4gICAgICAgIG9sZENoaWxkID0gY2hpbGRcbiAgICAgIH1cbiAgICAgIHJldHVybiBub2RlXG4gICAgfVxuXG4gICAgaWYgKG5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpXG4gICAgfVxuXG4gICAgbm9kZS5wYXJlbnROb2RlID0gdGhpc1xuICAgIC8vIE9iamVjdC5zZXRQcm90b3R5cGVPZihub2RlLm5hbWVzcGFjZXMucHJvdG90eXBlLCB0aGlzLm5hbWVzcGFjZXMucHJvdG90eXBlKVxuXG4gICAgdGhpcy5jaGlsZE5vZGVzLnNwbGljZShpbmRleCwgMCwgbm9kZSlcbiAgICByZXR1cm4gbm9kZVxuICB9XG5cbiAgaXNEZWZhdWx0TmFtZXNwYWNlIChuYW1lc3BhY2VVUkkpIHtcbiAgICBzd2l0Y2ggKHRoaXMubm9kZVR5cGUpIHtcbiAgICBjYXNlIE5vZGUuRUxFTUVOVF9OT0RFOlxuICAgICAgaWYgKCF0aGlzLnByZWZpeCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lc3BhY2VVUkkgPT09IG5hbWVzcGFjZVVSSVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5oYXNBdHRyaWJ1dGUoJ3htbG5zJykpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCd4bWxucycpXG4gICAgICB9XG5cbiAgICAgIC8vIEVudGl0eVJlZmVyZW5jZXMgbWF5IGhhdmUgdG8gYmUgc2tpcHBlZCB0byBnZXQgdG8gaXRcbiAgICAgIGlmICh0aGlzLnBhcmVudE5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Tm9kZS5pc0RlZmF1bHROYW1lc3BhY2UobmFtZXNwYWNlVVJJKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICBjYXNlIE5vZGUuRE9DVU1FTlRfTk9ERTpcbiAgICAgIHJldHVybiB0aGlzLmRvY3VtZW50RWxlbWVudC5pc0RlZmF1bHROYW1lc3BhY2UobmFtZXNwYWNlVVJJKVxuICAgIGNhc2UgTm9kZS5FTlRJVFlfTk9ERTpcbiAgICBjYXNlIE5vZGUuTk9UQVRJT05fTk9ERTpcbiAgICBjYXNlIE5vZGUuRE9DVU1FTlRfVFlQRV9OT0RFOlxuICAgIGNhc2UgTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFOlxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgY2FzZSBOb2RlLkFUVFJJQlVURV9OT0RFOlxuICAgICAgaWYgKHRoaXMub3duZXJFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm93bmVyRWxlbWVudC5pc0RlZmF1bHROYW1lc3BhY2UobmFtZXNwYWNlVVJJKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgZGVmYXVsdDpcbiAgICAgIC8vIEVudGl0eVJlZmVyZW5jZXMgbWF5IGhhdmUgdG8gYmUgc2tpcHBlZCB0byBnZXQgdG8gaXRcbiAgICAgIGlmICh0aGlzLnBhcmVudE5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Tm9kZS5pc0RlZmF1bHROYW1lc3BhY2UobmFtZXNwYWNlVVJJKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG5cbiAgaXNFcXVhbE5vZGUgKG5vZGUpIHtcbiAgICB0aGlzLm5vcm1hbGl6ZSgpXG4gICAgbm9kZS5ub3JtYWxpemUoKVxuXG4gICAgbGV0IGJvb2wgPSB0aGlzLm5vZGVOYW1lID09PSBub2RlLm5vZGVOYW1lXG4gICAgYm9vbCA9IGJvb2wgJiYgdGhpcy5sb2NhbE5hbWUgPT09IG5vZGUubG9jYWxOYW1lXG4gICAgYm9vbCA9IGJvb2wgJiYgdGhpcy5uYW1lc3BhY2VVUkkgPT09IG5vZGUubmFtZXNwYWNlVVJJXG4gICAgYm9vbCA9IGJvb2wgJiYgdGhpcy5wcmVmaXggPT09IG5vZGUucHJlZml4XG4gICAgYm9vbCA9IGJvb2wgJiYgdGhpcy5ub2RlVmFsdWUgPT09IG5vZGUubm9kZVZhbHVlXG5cbiAgICBib29sID0gYm9vbCAmJiB0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID09PSBub2RlLmNoaWxkTm9kZXMubGVuZ3RoXG5cbiAgICAvLyBkb250IGNoZWNrIGNoaWxkcmVuIHJlY3Vyc2l2ZWx5IHdoZW4gdGhlIGNvdW50IGRvZXNudCBldmVudCBhZGQgdXBcbiAgICBpZiAoIWJvb2wpIHJldHVybiBmYWxzZVxuXG4gICAgYm9vbCA9IGJvb2wgJiYgIXRoaXMuY2hpbGROb2Rlcy5yZWR1Y2UoKGxhc3QsIGN1cnIsIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gbGFzdCAmJiBjdXJyLmlzRXF1YWxOb2RlKG5vZGUuY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgfSwgdHJ1ZSlcblxuICAgIC8vIEZJWE1FOiBVc2UgYXR0ciBub2Rlc1xuICAgIC8qIGJvb2wgPSBib29sICYmICFbIC4uLnRoaXMuYXR0cnMuZW50cmllcygpIF0ucmVkdWNlKChsYXN0LCBjdXJyLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgWyBrZXksIHZhbCBdID0gbm9kZS5hdHRycy5lbnRyaWVzKClcbiAgICAgIHJldHVybiBsYXN0ICYmIGN1cnJbMF0gPT09IGtleSAmJiBjdXJyWzFdID09PSB2YWxcbiAgICB9LCB0cnVlKSAqL1xuXG4gICAgLypcbiAgICBUT0RPOlxuICAgIEZvciB0d28gRG9jdW1lbnRUeXBlIG5vZGVzIHRvIGJlIGVxdWFsLCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgbXVzdCBhbHNvIGJlIHNhdGlzZmllZDpcblxuICAgIFRoZSBmb2xsb3dpbmcgc3RyaW5nIGF0dHJpYnV0ZXMgYXJlIGVxdWFsOiBwdWJsaWNJZCwgc3lzdGVtSWQsIGludGVybmFsU3Vic2V0LlxuICAgIFRoZSBlbnRpdGllcyBOYW1lZE5vZGVNYXBzIGFyZSBlcXVhbC5cbiAgICBUaGUgbm90YXRpb25zIE5hbWVkTm9kZU1hcHMgYXJlIGVxdWFsLlxuICAgICovXG5cbiAgICBpZiAodGhpcy5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9UWVBFX05PREUgJiYgbm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9UWVBFX05PREUpIHtcbiAgICAgIGJvb2wgPSBib29sICYmIHRoaXMucHVibGljSWQgPT09IG5vZGUucHVibGljSWRcbiAgICAgIGJvb2wgPSBib29sICYmIHRoaXMuc3lzdGVtSWQgPT09IG5vZGUuc3lzdGVtSWRcbiAgICAgIGJvb2wgPSBib29sICYmIHRoaXMuaW50ZXJuYWxTdWJzZXQgPT09IG5vZGUuaW50ZXJuYWxTdWJzZXRcbiAgICB9XG5cbiAgICByZXR1cm4gYm9vbFxuICB9XG5cbiAgaXNTYW1lTm9kZSAobm9kZSkge1xuICAgIHJldHVybiB0aGlzID09PSBub2RlXG4gIH1cblxuICBsb29rdXBOYW1lc3BhY2VQcmVmaXggKG5hbWVzcGFjZVVSSSwgb3JpZ2luYWxFbGVtZW50KSB7XG4gICAgaWYgKHRoaXMubmFtZXNwYWNlVVJJICYmIHRoaXMubmFtZXNwYWNlVVJJID09PSBuYW1lc3BhY2VVUkkgJiYgdGhpcy5wcmVmaXhcbiAgICAgICAgICYmIG9yaWdpbmFsRWxlbWVudC5sb29rdXBOYW1lc3BhY2VVUkkodGhpcy5wcmVmaXgpID09PSBuYW1lc3BhY2VVUkkpIHtcbiAgICAgIHJldHVybiB0aGlzLnByZWZpeFxuICAgIH1cblxuICAgIGZvciAoY29uc3QgWyBrZXksIHZhbCBdIG9mIHRoaXMuYXR0cnMuZW50cmllcygpKSB7XG4gICAgICBpZiAoIWtleS5pbmNsdWRlcygnOicpKSBjb250aW51ZVxuXG4gICAgICBjb25zdCBbIGF0dHJQcmVmaXgsIG5hbWUgXSA9IGtleS5zcGxpdCgnOicpXG4gICAgICBpZiAoYXR0clByZWZpeCA9PT0gJ3htbG5zJyAmJiB2YWwgPT09IG5hbWVzcGFjZVVSSSAmJiBvcmlnaW5hbEVsZW1lbnQubG9va3VwTmFtZXNwYWNlVVJJKG5hbWUpID09PSBuYW1lc3BhY2VVUkkpIHtcbiAgICAgICAgcmV0dXJuIG5hbWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBFbnRpdHlSZWZlcmVuY2VzIG1heSBoYXZlIHRvIGJlIHNraXBwZWQgdG8gZ2V0IHRvIGl0XG4gICAgaWYgKHRoaXMucGFyZW50Tm9kZSkge1xuICAgICAgcmV0dXJuIHRoaXMucGFyZW50Tm9kZS5sb29rdXBOYW1lc3BhY2VQcmVmaXgobmFtZXNwYWNlVVJJLCBvcmlnaW5hbEVsZW1lbnQpXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBsb29rdXBOYW1lc3BhY2VVUkkgKHByZWZpeCkge1xuICAgIHN3aXRjaCAodGhpcy5ub2RlVHlwZSkge1xuICAgIGNhc2UgTm9kZS5FTEVNRU5UX05PREU6XG4gICAgICBpZiAodGhpcy5uYW1lc3BhY2VVUkkgIT0gbnVsbCAmJiB0aGlzLnByZWZpeCA9PT0gcHJlZml4KSB7XG4gICAgICAgIC8vIE5vdGU6IHByZWZpeCBjb3VsZCBiZSBcIm51bGxcIiBpbiB0aGlzIGNhc2Ugd2UgYXJlIGxvb2tpbmcgZm9yIGRlZmF1bHQgbmFtZXNwYWNlXG4gICAgICAgIHJldHVybiB0aGlzLm5hbWVzcGFjZVVSSVxuICAgICAgfVxuXG4gICAgICBmb3IgKGNvbnN0IFsga2V5LCB2YWwgXSBvZiB0aGlzLmF0dHJzLmVudHJpZXMoKSkge1xuICAgICAgICBpZiAoIWtleS5pbmNsdWRlcygnOicpKSBjb250aW51ZVxuXG4gICAgICAgIGNvbnN0IFsgYXR0clByZWZpeCwgbmFtZSBdID0ga2V5LnNwbGl0KCc6JylcbiAgICAgICAgaWYgKGF0dHJQcmVmaXggPT09ICd4bWxucycgJiYgbmFtZSA9PT0gcHJlZml4KSB7XG4gICAgICAgICAgaWYgKHZhbCAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgLy8gRklYTUU6IExvb2sgdXAgaWYgcHJlZml4IG9yIGF0dHJQcmVmaXhcbiAgICAgICAgfSBlbHNlIGlmIChuYW1lID09PSAneG1sbnMnICYmIHByZWZpeCA9PSBudWxsKSB7XG4gICAgICAgICAgaWYgKHZhbCAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gRW50aXR5UmVmZXJlbmNlcyBtYXkgaGF2ZSB0byBiZSBza2lwcGVkIHRvIGdldCB0byBpdFxuICAgICAgaWYgKHRoaXMucGFyZW50Tm9kZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnROb2RlLmxvb2t1cE5hbWVzcGFjZVVSSShwcmVmaXgpXG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbFxuICAgIGNhc2UgTm9kZS5ET0NVTUVOVF9OT0RFOlxuICAgICAgcmV0dXJuIHRoaXMuZG9jdW1lbnRFbGVtZW50Lmxvb2t1cE5hbWVzcGFjZVVSSShwcmVmaXgpXG4gICAgY2FzZSBOb2RlLkVOVElUWV9OT0RFOlxuICAgIGNhc2UgTm9kZS5OT1RBVElPTl9OT0RFOlxuICAgIGNhc2UgTm9kZS5ET0NVTUVOVF9UWVBFX05PREU6XG4gICAgY2FzZSBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREU6XG4gICAgICByZXR1cm4gbnVsbFxuICAgIGNhc2UgTm9kZS5BVFRSSUJVVEVfTk9ERTpcbiAgICAgIGlmICh0aGlzLm93bmVyRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vd25lckVsZW1lbnQubG9va3VwTmFtZXNwYWNlVVJJKHByZWZpeClcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsXG4gICAgZGVmYXVsdDpcbiAgICAgIC8vIEVudGl0eVJlZmVyZW5jZXMgbWF5IGhhdmUgdG8gYmUgc2tpcHBlZCB0byBnZXQgdG8gaXRcbiAgICAgIGlmICh0aGlzLnBhcmVudE5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Tm9kZS5sb29rdXBOYW1lc3BhY2VVUkkocHJlZml4KVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH1cblxuICBsb29rdXBQcmVmaXggKG5hbWVzcGFjZVVSSSkge1xuICAgIGlmICghbmFtZXNwYWNlVVJJKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLm5vZGVUeXBlXG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIE5vZGUuRUxFTUVOVF9OT0RFOlxuICAgICAgcmV0dXJuIHRoaXMubG9va3VwTmFtZXNwYWNlUHJlZml4KG5hbWVzcGFjZVVSSSwgdGhpcylcbiAgICBjYXNlIE5vZGUuRE9DVU1FTlRfTk9ERTpcbiAgICAgIHJldHVybiB0aGlzLmRvY3VtZW50RWxlbWVudC5sb29rdXBOYW1lc3BhY2VQcmVmaXgobmFtZXNwYWNlVVJJKVxuICAgIGNhc2UgTm9kZS5FTlRJVFlfTk9ERSA6XG4gICAgY2FzZSBOb2RlLk5PVEFUSU9OX05PREU6XG4gICAgY2FzZSBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREU6XG4gICAgY2FzZSBOb2RlLkRPQ1VNRU5UX1RZUEVfTk9ERTpcbiAgICAgIHJldHVybiBudWxsIC8vIHR5cGUgaXMgdW5rbm93blxuICAgIGNhc2UgTm9kZS5BVFRSSUJVVEVfTk9ERTpcbiAgICAgIGlmICh0aGlzLm93bmVyRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vd25lckVsZW1lbnQubG9va3VwTmFtZXNwYWNlUHJlZml4KG5hbWVzcGFjZVVSSSlcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsXG4gICAgZGVmYXVsdDpcbiAgICAgIC8vIEVudGl0eVJlZmVyZW5jZXMgbWF5IGhhdmUgdG8gYmUgc2tpcHBlZCB0byBnZXQgdG8gaXRcbiAgICAgIGlmICh0aGlzLnBhcmVudE5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Tm9kZS5sb29rdXBOYW1lc3BhY2VQcmVmaXgobmFtZXNwYWNlVVJJKVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH1cblxuICBub3JtYWxpemUgKCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBbXVxuICAgIGZvciAoY29uc3Qgbm9kZSBvZiB0aGlzLmNoaWxkTm9kZXMpIHtcbiAgICAgIGNvbnN0IGxhc3QgPSBjaGlsZE5vZGVzLnNoaWZ0KClcbiAgICAgIGlmICghbGFzdCkge1xuICAgICAgICBpZiAobm9kZS5kYXRhKSB7XG4gICAgICAgICAgY2hpbGROb2Rlcy51bnNoaWZ0KG5vZGUpXG4gICAgICAgIH1cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICAgIGlmICghbm9kZS5kYXRhKSB7XG4gICAgICAgICAgY2hpbGROb2Rlcy51bnNoaWZ0KGxhc3QpXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsYXN0Lm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgICAgIGNvbnN0IG1lcmdlZCA9IHRoaXMub3duZXJEb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShsYXN0LmRhdGEgKyBub2RlLmRhdGEpXG4gICAgICAgICAgY2hpbGROb2Rlcy5wdXNoKG1lcmdlZClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgY2hpbGROb2Rlcy5wdXNoKGxhc3QsIG5vZGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY2hpbGROb2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgbm9kZS5wYXJlbnROb2RlID0gdGhpc1xuICAgIH0pXG4gICAgdGhpcy5jaGlsZE5vZGVzID0gY2hpbGROb2Rlc1xuICAgIC8vIHRoaXMuY2hpbGROb2RlcyA9IHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKCh0ZXh0Tm9kZXMsIG5vZGUpID0+IHtcbiAgICAvLyAgIC8vIEZJWE1FOiBJZiBmaXJzdCBub2RlIGlzIGFuIGVtcHR5IHRleHRub2RlLCB3aGF0IGRvIHdlIGRvPyAtPiBzcGVjXG4gICAgLy8gICBpZiAoIXRleHROb2RlcykgcmV0dXJuIFsgbm9kZSBdXG4gICAgLy8gICB2YXIgbGFzdCA9IHRleHROb2Rlcy5wb3AoKVxuXG4gICAgLy8gICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAvLyAgICAgaWYgKCFub2RlLmRhdGEpIHJldHVybiB0ZXh0Tm9kZXNcblxuICAgIC8vICAgICBpZiAobGFzdC5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAvLyAgICAgICBjb25zdCBtZXJnZWQgPSB0aGlzLm93bmVyRG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobGFzdC5kYXRhICsgJyAnICsgbm9kZS5kYXRhKVxuICAgIC8vICAgICAgIHRleHROb2Rlcy5wdXNoKG1lcmdlZClcbiAgICAvLyAgICAgICByZXR1cm4gdGV4dE5vZGVzLmNvbmNhdChtZXJnZWQpXG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH0gZWxzZSB7XG4gICAgLy8gICAgIHRleHROb2Rlcy5wdXNoKGxhc3QsIG5vZGUpXG4gICAgLy8gICB9XG5cbiAgICAvLyAgIHJldHVybiB0ZXh0Tm9kZXNcbiAgICAvLyB9LCBudWxsKVxuICB9XG5cbiAgcmVtb3ZlQ2hpbGQgKG5vZGUpIHtcblxuICAgIG5vZGUucGFyZW50Tm9kZSA9IG51bGxcbiAgICAvLyBPYmplY3Quc2V0UHJvdG90eXBlT2Yobm9kZSwgbnVsbClcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKG5vZGUpXG4gICAgaWYgKGluZGV4ID09PSAtMSkgcmV0dXJuIG5vZGVcbiAgICB0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKGluZGV4LCAxKVxuICAgIHJldHVybiBub2RlXG4gIH1cblxuICByZXBsYWNlQ2hpbGQgKG5ld0NoaWxkLCBvbGRDaGlsZCkge1xuICAgIGNvbnN0IGJlZm9yZSA9IG9sZENoaWxkLm5leHRTaWJsaW5nXG4gICAgdGhpcy5yZW1vdmVDaGlsZChvbGRDaGlsZClcbiAgICB0aGlzLmluc2VydEJlZm9yZShuZXdDaGlsZCwgYmVmb3JlKVxuICAgIHJldHVybiBvbGRDaGlsZFxuICB9XG5cbiAgZ2V0IG5leHRTaWJsaW5nICgpIHtcbiAgICBjb25zdCBjaGlsZCA9IHRoaXMucGFyZW50Tm9kZSAmJiB0aGlzLnBhcmVudE5vZGUuY2hpbGROb2Rlc1t0aGlzLnBhcmVudE5vZGUuY2hpbGROb2Rlcy5pbmRleE9mKHRoaXMpICsgMV1cbiAgICByZXR1cm4gY2hpbGQgfHwgbnVsbFxuICB9XG5cbiAgZ2V0IHByZXZpb3VzU2libGluZyAoKSB7XG4gICAgY29uc3QgY2hpbGQgPSB0aGlzLnBhcmVudE5vZGUgJiYgdGhpcy5wYXJlbnROb2RlLmNoaWxkTm9kZXNbdGhpcy5wYXJlbnROb2RlLmNoaWxkTm9kZXMuaW5kZXhPZih0aGlzKSAtIDFdXG4gICAgcmV0dXJuIGNoaWxkIHx8IG51bGxcbiAgfVxuXG4gIGdldCB0ZXh0Q29udGVudCAoKSB7XG4gICAgaWYgKHRoaXMubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSByZXR1cm4gdGhpcy5kYXRhXG4gICAgaWYgKHRoaXMubm9kZVR5cGUgPT09IE5vZGUuQ0RBVEFfU0VDVElPTl9OT0RFKSByZXR1cm4gdGhpcy5kYXRhXG4gICAgaWYgKHRoaXMubm9kZVR5cGUgPT09IE5vZGUuQ09NTUVOVF9OT0RFKSByZXR1cm4gdGhpcy5kYXRhXG5cbiAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzLnJlZHVjZShmdW5jdGlvbiAobGFzdCwgY3VycmVudCkge1xuICAgICAgcmV0dXJuIGxhc3QgKyBjdXJyZW50LnRleHRDb250ZW50XG4gICAgfSwgJycpXG4gIH1cblxuICBzZXQgdGV4dENvbnRlbnQgKHRleHQpIHtcbiAgICBpZiAodGhpcy5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUgfHwgdGhpcy5ub2RlVHlwZSA9PT0gTm9kZS5DREFUQV9TRUNUSU9OX05PREUgfHwgdGhpcy5ub2RlVHlwZSA9PT0gTm9kZS5DT01NRU5UX05PREUpIHtcbiAgICAgIHRoaXMuZGF0YSA9IHRleHRcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0aGlzLmNoaWxkTm9kZXMgPSBbXVxuICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5vd25lckRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpKVxuICB9XG5cbiAgZ2V0IGxhc3RDaGlsZCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGROb2Rlc1t0aGlzLmNoaWxkTm9kZXMubGVuZ3RoIC0gMV0gfHwgbnVsbFxuICB9XG5cbiAgZ2V0IGZpcnN0Q2hpbGQgKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXNbMF0gfHwgbnVsbFxuICB9XG59XG5cbmV4dGVuZFN0YXRpYyhOb2RlLCBub2RlVHlwZXMpXG5leHRlbmQoTm9kZSwgbm9kZVR5cGVzKVxuIiwiaW1wb3J0IHsgZXh0ZW5kU3RhdGljIH0gZnJvbSAnLi4vdXRpbHMvb2JqZWN0Q3JlYXRpb25VdGlscy5qcydcblxuZXhwb3J0IGNsYXNzIE5vZGVGaWx0ZXIge1xuICBhY2NlcHROb2RlICgpIHtcbiAgICByZXR1cm4gTm9kZUZpbHRlci5GSUxURVJfQUNDRVBUXG4gIH1cbn1cblxuZXh0ZW5kU3RhdGljKE5vZGVGaWx0ZXIsIHtcbiAgRklMVEVSX0FDQ0VQVDogMSxcbiAgRklMVEVSX1JFSkVDVDogMixcbiAgRklMVEVSX0lHTk9SRTogNCxcbiAgU0hPV19BTEw6IC0xLFxuICBTSE9XX0VMRU1FTlQ6IDEsXG4gIFNIT1dfVEVYVDogNCxcbiAgU0hPV19FTlRJVFlfUkVGRVJFTkNFOiAxNixcbiAgU0hPV19FTlRJVFk6IDMyLFxuICBTSE9XX1BST0NFU1NJTkdfSU5TVFJVQ1RJT046IDY0LFxuICBTSE9XX0NPTU1FTlQ6IDEyOCxcbiAgU0hPV19ET0NVTUVOVDogMjU2LFxuICBTSE9XX0RPQ1VNRU5UX1RZUEU6IDUxMixcbiAgU0hPV19ET0NVTUVOVF9GUkFHTUVOVDogMTAyNCxcbiAgU0hPV19OT1RBVElPTjogMjA0OFxufSlcbiIsImltcG9ydCB7IENoYXJhY3RlckRhdGEgfSBmcm9tICcuL0NoYXJhY3RlckRhdGEuanMnXG5pbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi9Ob2RlLmpzJ1xuXG5leHBvcnQgY2xhc3MgVGV4dCBleHRlbmRzIENoYXJhY3RlckRhdGEge1xuICBjb25zdHJ1Y3RvciAobmFtZSwgcHJvcHMpIHtcbiAgICBzdXBlcihuYW1lLCBwcm9wcylcbiAgICB0aGlzLm5vZGVUeXBlID0gTm9kZS5URVhUX05PREVcbiAgfVxufVxuIiwiaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnLi4vdXRpbHMvb2JqZWN0Q3JlYXRpb25VdGlscy5qcydcbmltcG9ydCB7IEV2ZW50VGFyZ2V0IH0gZnJvbSAnLi9FdmVudFRhcmdldC5qcydcbmltcG9ydCB7IE5vZGUgfSBmcm9tICcuL05vZGUuanMnXG5pbXBvcnQgeyBEb2N1bWVudCB9IGZyb20gJy4vRG9jdW1lbnQuanMnXG5pbXBvcnQgeyBEb2N1bWVudEZyYWdtZW50IH0gZnJvbSAnLi9Eb2N1bWVudEZyYWdtZW50LmpzJ1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4vVGV4dC5qcydcbmltcG9ydCB7IEN1c3RvbUV2ZW50IH0gZnJvbSAnLi9DdXN0b21FdmVudC5qcydcbmltcG9ydCB7IEV2ZW50IH0gZnJvbSAnLi9FdmVudC5qcydcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tICcuL0VsZW1lbnQuanMnXG5pbXBvcnQgeyBBdHRyIH0gZnJvbSAnLi9BdHRyLmpzJ1xuaW1wb3J0IHsgSFRNTEltYWdlRWxlbWVudCB9IGZyb20gJy4vaHRtbC9IVE1MSW1hZ2VFbGVtZW50LmpzJ1xuaW1wb3J0IHsgSFRNTExpbmtFbGVtZW50IH0gZnJvbSAnLi9odG1sL0hUTUxMaW5rRWxlbWVudC5qcydcbmltcG9ydCB7IEhUTUxTY3JpcHRFbGVtZW50IH0gZnJvbSAnLi9odG1sL0hUTUxTY3JpcHRFbGVtZW50LmpzJ1xuaW1wb3J0IHsgSFRNTEVsZW1lbnQgfSBmcm9tICcuL2h0bWwvSFRNTEVsZW1lbnQuanMnXG5pbXBvcnQgeyBTVkdQb2ludCB9IGZyb20gJy4vc3ZnL1NWR1BvaW50LmpzJ1xuaW1wb3J0IHsgU1ZHTWF0cml4IH0gZnJvbSAnLi9zdmcvU1ZHTWF0cml4LmpzJ1xuaW1wb3J0IHsgU1ZHRWxlbWVudCB9IGZyb20gJy4vc3ZnL1NWR0VsZW1lbnQuanMnXG5pbXBvcnQgeyBTVkdTVkdFbGVtZW50IH0gZnJvbSAnLi9zdmcvU1ZHU1ZHRWxlbWVudC5qcydcbmltcG9ydCB7IFNWR1BhdGhFbGVtZW50IH0gZnJvbSAnLi9zdmcvU1ZHUGF0aEVsZW1lbnQuanMnXG5pbXBvcnQgeyBTVkdHcmFwaGljc0VsZW1lbnQgfSBmcm9tICcuL3N2Zy9TVkdHcmFwaGljc0VsZW1lbnQuanMnXG5pbXBvcnQgeyBTVkdUZXh0Q29udGVudEVsZW1lbnQgfSBmcm9tICcuL3N2Zy9TVkdUZXh0Q29udGVudEVsZW1lbnQuanMnXG5pbXBvcnQgeyBjYW1lbENhc2UgfSBmcm9tICcuLi91dGlscy9zdHJVdGlscy5qcydcbmltcG9ydCAqIGFzIGRlZmF1bHRzIGZyb20gJy4uL3V0aWxzL2RlZmF1bHRzLmpzJ1xuXG5leHBvcnQgY2xhc3MgV2luZG93IGV4dGVuZHMgRXZlbnRUYXJnZXQge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuZG9jdW1lbnQgPSBuZXcgRG9jdW1lbnQoKVxuICAgIHRoaXMuZG9jdW1lbnQuZGVmYXVsdFZpZXcgPSB0aGlzXG4gICAgdGhpcy5zZWxmID0gdGhpc1xuICAgIGNvbnN0IGRvYyA9IHRoaXMuZG9jdW1lbnRcbiAgICB0aGlzLkltYWdlID0gY2xhc3Mge1xuICAgICAgY29uc3RydWN0b3IgKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgY29uc3QgaW1nID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgICAgIGlmICh3aWR0aCAhPSBudWxsKSBpbWcuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHdpZHRoKVxuICAgICAgICBpZiAoaGVpZ2h0ICE9IG51bGwpIGltZy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGhlaWdodClcbiAgICAgICAgcmV0dXJuIGltZ1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldENvbXB1dGVkU3R5bGUgKG5vZGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLy8gRklYTUU6IEN1cnJlbnRseSB0aGlzIGZ1bmN0aW9uIHRyZWF0cyBldmVyeSBnaXZlbiBhdHRyXG4gICAgICAvLyBhcyBpbmhlcml0YWJsZSBmcm9tIGl0cyBwYXJlbnRzIHdoaWNoIGlzIG9mYyBub3QgYWx3YXlzIHRydWVcbiAgICAgIC8vIGJ1dCBnb29kIGVub3VnaCBmb3Igc3ZnLmpzXG4gICAgICBnZXRQcm9wZXJ0eVZhbHVlIChhdHRyKSB7XG4gICAgICAgIGxldCB2YWx1ZVxuICAgICAgICBsZXQgY3VyID0gbm9kZVxuXG4gICAgICAgIGRvIHtcbiAgICAgICAgICB2YWx1ZSA9IGN1ci5zdHlsZVthdHRyXSB8fCBjdXIuZ2V0QXR0cmlidXRlKGF0dHIpXG4gICAgICAgIH0gd2hpbGUgKFxuICAgICAgICAgIHZhbHVlID09IG51bGxcbiAgICAgICAgICAmJiAoY3VyID0gY3VyLnBhcmVudE5vZGUpXG4gICAgICAgICAgJiYgY3VyLm5vZGVUeXBlID09PSAxXG4gICAgICAgIClcblxuICAgICAgICByZXR1cm4gdmFsdWUgfHwgZGVmYXVsdHNbY2FtZWxDYXNlKGF0dHIpXSB8fCBudWxsXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmxldCBsYXN0VGltZSA9IDBcbmNvbnN0IHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGNhbGxiYWNrID0+IHtcbiAgY29uc3Qgbm93ID0gbmV3IGdsb2JhbC5EYXRlKCkuZ2V0VGltZSgpXG4gIGNvbnN0IHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChub3cgLSBsYXN0VGltZSkpXG4gIHJldHVybiBnbG9iYWwuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgbGFzdFRpbWUgPSBub3cgKyB0aW1lVG9DYWxsXG4gICAgY2FsbGJhY2sobGFzdFRpbWUpXG4gIH0sIHRpbWVUb0NhbGwpXG59XG5cbmNvbnN0IG5vd09mZnNldCA9IGdsb2JhbC5EYXRlLm5vdygpXG5jb25zdCBwZXJmb3JtYW5jZSA9IHtcbiAgbm93OiAoKSA9PiBEYXRlLm5vdygpIC0gbm93T2Zmc2V0XG59XG5cbmNvbnN0IHdpblByb3BzID0ge1xuICBXaW5kb3csXG4gIERvY3VtZW50LFxuICBEb2N1bWVudEZyYWdtZW50LFxuICBOb2RlLFxuICBFdmVudFRhcmdldCxcbiAgVGV4dCxcbiAgQXR0cixcbiAgRWxlbWVudCxcbiAgQ3VzdG9tRXZlbnQsXG4gIEV2ZW50LFxuICBIVE1MRWxlbWVudCxcbiAgSFRNTExpbmtFbGVtZW50LFxuICBIVE1MU2NyaXB0RWxlbWVudCxcbiAgSFRNTEltYWdlRWxlbWVudCxcbiAgLy8gSW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQsIC8vIGlzIHNldCBvbiBjb25zdHJ1Y3Rpb25cbiAgU1ZHTWF0cml4LFxuICBTVkdQb2ludCxcbiAgU1ZHRWxlbWVudCxcbiAgU1ZHU1ZHRWxlbWVudCxcbiAgU1ZHUGF0aEVsZW1lbnQsXG4gIFNWR0dyYXBoaWNzRWxlbWVudCxcbiAgU1ZHVGV4dENvbnRlbnRFbGVtZW50LFxuICBzZXRUaW1lb3V0OiBnbG9iYWwuc2V0VGltZW91dCxcbiAgY2xlYXJUaW1lb3V0OiBnbG9iYWwuY2xlYXJUaW1lb3V0LFxuICBwYWdlWE9mZnNldDogMCxcbiAgcGFnZVlPZmZzZXQ6IDAsXG4gIERhdGU6IGdsb2JhbC5EYXRlLFxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUsXG4gIGNhbmNlbEFuaW1hdGlvbkZyYW1lOiBnbG9iYWwuY2xlYXJUaW1lb3V0LFxuICBwZXJmb3JtYW5jZVxufVxuXG5leHRlbmQoV2luZG93LCB3aW5Qcm9wcylcbiIsImltcG9ydCB7IEVsZW1lbnQgfSBmcm9tICcuLi9FbGVtZW50LmpzJ1xuXG5leHBvcnQgY2xhc3MgSFRNTEVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHt9XG4iLCJpbXBvcnQgc2l6ZU9mIGZyb20gJ2ltYWdlLXNpemUnXG5pbXBvcnQgeyBFdmVudCB9IGZyb20gJy4uL0V2ZW50LmpzJ1xuaW1wb3J0IHsgSFRNTEVsZW1lbnQgfSBmcm9tICcuL0hUTUxFbGVtZW50LmpzJ1xuLy8gaW1wb3J0IHsgZ2V0RmlsZUJ1ZmZlckZyb21VUkwgfSBmcm9tICcuLi8uLi91dGlscy9maWxlVXJsVG9CdWZmZXIuanMnXG4vLyBpbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuXG5leHBvcnQgY2xhc3MgSFRNTEltYWdlRWxlbWVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IgKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKVxuICAgIHRoaXMubmF0dXJhbFdpZHRoID0gMFxuICAgIHRoaXMubmF0dXJhbEhlaWdodCA9IDBcbiAgICB0aGlzLmNvbXBsZXRlID0gZmFsc2VcbiAgfVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhIVE1MSW1hZ2VFbGVtZW50LnByb3RvdHlwZSwge1xuICBzcmM6IHtcbiAgICBnZXQgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdzcmMnKVxuICAgIH0sXG4gICAgc2V0ICh2YWwpIHtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdzcmMnLCB2YWwpXG4gICAgICAvLyBjb25zdCB1cmwgPSBwYXRoLnJlc29sdmUodGhpcy5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LmxvY2F0aW9uLCB2YWwpXG4gICAgICAvLyBnZXRGaWxlQnVmZmVyRnJvbVVSTCh1cmwsIChidWZmZXIpID0+IHtcbiAgICAgIHNpemVPZih2YWwsIChlcnIsIHNpemUpID0+IHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2Vycm9yJykpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5uYXR1cmFsV2lkdGggPSBzaXplLndpZHRoXG4gICAgICAgIHRoaXMubmF0dXJhbEhlaWdodCA9IHNpemUuaGVpZ2h0XG4gICAgICAgIHRoaXMuY29tcGxldGUgPSB0cnVlXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2xvYWQnKSlcbiAgICAgIH0pXG4gICAgICAvLyB9KVxuICAgIH1cbiAgfSxcbiAgaGVpZ2h0OiB7XG4gICAgZ2V0ICgpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnaGVpZ2h0JykgfHwgdGhpcy5uYXR1cmFsSGVpZ2h0XG4gICAgfSxcbiAgICBzZXQgKHZhbCkge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIHZhbClcbiAgICB9XG4gIH0sXG4gIHdpZHRoOiB7XG4gICAgZ2V0ICgpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnd2lkdGgnKSB8fCB0aGlzLm5hdHVyYWxXaWR0aFxuICAgIH0sXG4gICAgc2V0ICh2YWwpIHtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHZhbClcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBIVE1MRWxlbWVudCB9IGZyb20gJy4vSFRNTEVsZW1lbnQuanMnXG5cbmV4cG9ydCBjbGFzcyBIVE1MTGlua0VsZW1lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7fVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhIVE1MTGlua0VsZW1lbnQucHJvdG90eXBlLCB7XG4gIGhyZWY6IHtcbiAgICBnZXQgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICB9LFxuICAgIHNldCAodmFsKSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnaHJlZicsIHZhbClcbiAgICB9XG4gIH0sXG4gIHJlbDoge1xuICAgIGdldCAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3JlbCcpXG4gICAgfSxcbiAgICBzZXQgKHZhbCkge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3JlbCcsIHZhbClcbiAgICB9XG4gIH0sXG4gIHR5cGU6IHtcbiAgICBnZXQgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCd0eXBlJylcbiAgICB9LFxuICAgIHNldCAodmFsKSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgndHlwZScsIHZhbClcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgc2F4IGZyb20gJ3NheCdcblxuLy8gVE9ETzogSXRzIGFuIFhNTFBhcnNlciBub3QgSFRNTFBhcnNlciEhXG5leHBvcnQgY29uc3QgSFRNTFBhcnNlciA9IGZ1bmN0aW9uIChzdHIsIGVsKSB7XG4gIGxldCBjdXJyZW50VGFnID0gZWxcbiAgLy8gY29uc3QgbmFtZXNwYWNlcyA9IHsgeG1sbnM6IGVsLmdldEF0dHJpYnV0ZSgneG1sbnMnKSB9XG4gIGxldCBkb2N1bWVudCA9IGVsLm93bmVyRG9jdW1lbnRcbiAgbGV0IGNkYXRhID0gbnVsbFxuXG4gIC8vIHNheCBleHBlY3RzIGEgcm9vdCBlbGVtZW50IGJ1dCB3ZSBhbHNvIG1pc3N1c2UgaXQgdG8gcGFyc2UgZnJhZ21lbnRzXG4gIGlmIChlbC5ub2RlVHlwZSAhPT0gZWwuRE9DVU1FTlRfTk9ERSkge1xuICAgIHN0ciA9ICc8c3ZnZG9tOndyYXBwZXIgeG1sbnM6c3ZnZG9tPVwic3ZnZG9tOnJvY2tzXCI+JyArIHN0ciArICc8L3N2Z2RvbTp3cmFwcGVyPidcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudCA9IGVsXG4gIH1cblxuICBjb25zdCBwYXJzZXIgPSBzYXgucGFyc2VyKHRydWUsIHtcbiAgICAvLyBsb3dlcmNhc2U6IHRydWUsXG4gICAgeG1sbnM6IHRydWUsXG4gICAgc3RyaWN0RW50aXRpZXM6IHRydWVcbiAgfSlcblxuICBwYXJzZXIub25lcnJvciA9IChlKSA9PiB7XG4gICAgdGhyb3cgZVxuICB9XG5cbiAgcGFyc2VyLm9uZG9jdHlwZSA9IChzdHIpID0+IHtcbiAgICBpZiAoY3VycmVudFRhZyAhPT0gZG9jdW1lbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRG9jdHlwZSBjYW4gb25seSBiZSBhcHBlbmRlZCB0byBkb2N1bWVudCcpXG4gICAgfVxuICAgIGN1cnJlbnRUYWcuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlRG9jdW1lbnRUeXBlKCkpXG4gIH1cblxuICBwYXJzZXIub250ZXh0ID0gKHN0cikgPT4gY3VycmVudFRhZy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShzdHIpKVxuICBwYXJzZXIub25jb21tZW50ID0gKHN0cikgPT4gY3VycmVudFRhZy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVDb21tZW50KHN0cikpXG5cbiAgLy8gcGFyc2VyLm9ub3Blbm5hbWVzcGFjZSA9IG5zID0+IHtcbiAgLy8gICBuYW1lc3BhY2VzW25zLnByZWZpeF0gPSBucy51cmlcbiAgLy8gfVxuICAvLyBwYXJzZXIub25jbG9zZW5hbWVzcGFjZSA9IG5zID0+IHtcbiAgLy8gICBkZWxldGUgbmFtZXNwYWNlc1tucy5wcmVmaXhdXG4gIC8vIH1cblxuICBwYXJzZXIub25vcGVudGFnID0gbm9kZSA9PiB7XG4gICAgaWYgKG5vZGUubmFtZSA9PT0gJ3N2Z2RvbTp3cmFwcGVyJykgcmV0dXJuXG5cbiAgICBjb25zdCBhdHRycyA9IG5vZGUuYXR0cmlidXRlc1xuXG4gICAgY29uc3QgdXJpID0gbm9kZS51cmkgfHwgY3VycmVudFRhZy5sb29rdXBOYW1lc3BhY2VVUkkobm9kZS5wcmVmaXggfHwgbnVsbClcblxuICAgIHZhciBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHVyaSwgbm9kZS5uYW1lKVxuXG4gICAgZm9yIChjb25zdCBbIG5hbWUsIG5vZGUgXSBvZiBPYmplY3QuZW50cmllcyhhdHRycykpIHtcbiAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlTlMobm9kZS51cmksIG5hbWUsIG5vZGUudmFsdWUpXG4gICAgfVxuXG4gICAgY3VycmVudFRhZy5hcHBlbmRDaGlsZChuZXdFbGVtZW50KVxuICAgIGN1cnJlbnRUYWcgPSBuZXdFbGVtZW50XG4gIH1cblxuICBwYXJzZXIub25jbG9zZXRhZyA9IHRhZ05hbWUgPT4ge1xuICAgIGlmICh0YWdOYW1lID09PSAnc3ZnZG9tOndyYXBwZXInKSByZXR1cm5cblxuICAgIGN1cnJlbnRUYWcgPSBjdXJyZW50VGFnLnBhcmVudE5vZGVcbiAgfVxuXG4gIHBhcnNlci5vbm9wZW5jZGF0YSA9ICgpID0+IHtcbiAgICBjZGF0YSA9IGRvY3VtZW50LmNyZWF0ZUNEQVRBU2VjdGlvbignJylcbiAgfVxuXG4gIHBhcnNlci5vbmNkYXRhID0gKHN0cikgPT4ge1xuICAgIGNkYXRhLmFwcGVuZERhdGEoc3RyKVxuICB9XG5cbiAgcGFyc2VyLm9uY2xvc2VjZGF0YSA9ICgpID0+IHtcbiAgICBjdXJyZW50VGFnLmFwcGVuZENoaWxkKGNkYXRhKVxuICB9XG5cbiAgcGFyc2VyLndyaXRlKHN0cilcbn1cbiIsIlxuaW1wb3J0IHsgSFRNTEVsZW1lbnQgfSBmcm9tICcuL0hUTUxFbGVtZW50LmpzJ1xuZXhwb3J0IGNsYXNzIEhUTUxTY3JpcHRFbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge31cblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoSFRNTFNjcmlwdEVsZW1lbnQucHJvdG90eXBlLCB7XG4gIHNyYzoge1xuICAgIGdldCAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3NyYycpXG4gICAgfSxcbiAgICBzZXQgKHZhbCkge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHZhbClcbiAgICB9XG4gIH0sXG4gIHR5cGU6IHtcbiAgICBnZXQgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCd0eXBlJylcbiAgICB9LFxuICAgIHNldCAodmFsKSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgndHlwZScsIHZhbClcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBub2Rlc1RvTm9kZSB9IGZyb20gJy4uLy4uL3V0aWxzL25vZGVzVG9Ob2RlLmpzJ1xuXG4vLyBodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI2ludGVyZmFjZS1jaGlsZG5vZGVcbi8vIFRvZG86IGNoZWNrIGlmIHRoaXMgaXMgY29udGFpbmVkIGluIG5vZGVzIG9yIHNpYmxpbmdzIGFyZSBjb250YWluZWQgKHZpYWJsZVByZXZpb3VzU2libGluZywgdmlhYmxlTmV4dFNpYmxpbmcpXG5leHBvcnQgY29uc3QgQ2hpbGROb2RlID0ge1xuICBiZWZvcmUgKG5vZGVzKSB7XG4gICAgaWYgKCF0aGlzLnBhcmVudE5vZGUpIHJldHVyblxuICAgIGNvbnN0IG5vZGUgPSBub2Rlc1RvTm9kZShub2RlcywgdGhpcy5vd25lckRvY3VtZW50KVxuICAgIHRoaXMucGFyZW50Lmluc2VydEJlZm9yZShub2RlLCB0aGlzKVxuICB9LFxuICBhZnRlciAobm9kZXMpIHtcbiAgICBpZiAoIXRoaXMucGFyZW50Tm9kZSkgcmV0dXJuXG4gICAgY29uc3Qgbm9kZSA9IG5vZGVzVG9Ob2RlKG5vZGVzLCB0aGlzLm93bmVyRG9jdW1lbnQpXG4gICAgdGhpcy5wYXJlbnQuaW5zZXJ0QmVmb3JlKG5vZGUsIHRoaXMubmV4dFNpYmxpbmcpXG4gIH0sXG4gIHJlcGxhY2VXaXRoIChub2Rlcykge1xuICAgIGlmICghdGhpcy5wYXJlbnROb2RlKSByZXR1cm5cbiAgICBjb25zdCBuZXh0ID0gdGhpcy5uZXh0U2libGluZ1xuICAgIHRoaXMuZGVsZXRlKClcbiAgICBjb25zdCBub2RlID0gbm9kZXNUb05vZGUobm9kZXMpXG4gICAgdGhpcy5wYXJlbnQuaW5zZXJ0QmVmb3JlKG5vZGUsIG5leHQpXG4gIH0sXG4gIHJlbW92ZSAoKSB7XG4gICAgaWYgKCF0aGlzLnBhcmVudE5vZGUpIHJldHVyblxuICAgIHRoaXMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzKVxuICB9XG59XG4iLCJleHBvcnQgY29uc3QgTm9uRG9jdW1lbnRUeXBlQ2hpbGROb2RlID0ge1xuXG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE5vbkRvY3VtZW50VHlwZUNoaWxkTm9kZSwge1xuICBwcmV2aW91c0VsZW1lbnRTaWJsaW5nOiB7XG4gICAgZ2V0ICgpIHtcbiAgICAgIGxldCBub2RlXG4gICAgICB3aGlsZSAoKG5vZGUgPSB0aGlzLnByZXZpb3VzU2libGluZykpIHtcbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IG5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgcmV0dXJuIG5vZGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH0sXG5cbiAgbmV4dEVsZW1lbnRTaWJsaW5nOiB7XG4gICAgZ2V0ICgpIHtcbiAgICAgIGxldCBub2RlXG4gICAgICB3aGlsZSAoKG5vZGUgPSB0aGlzLm5leHRTaWJsaW5nKSkge1xuICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gbm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICByZXR1cm4gbm9kZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxufSlcbiIsImltcG9ydCB7IE5vZGVJdGVyYXRvciB9IGZyb20gJy4uLy4uL3V0aWxzL05vZGVJdGVyYXRvci5qcydcbmltcG9ydCB7IE5vZGVGaWx0ZXIgfSBmcm9tICcuLi9Ob2RlRmlsdGVyLmpzJ1xuXG4vLyBodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI2ludGVyZmFjZS1ub25lbGVtZW50cGFyZW50bm9kZVxuZXhwb3J0IGNvbnN0IE5vbkVsZW1lbnRQYXJlbnROb2RlID0ge1xuICBnZXRFbGVtZW50QnlJZCAoaWQpIHtcbiAgICBjb25zdCBpdGVyID0gbmV3IE5vZGVJdGVyYXRvcih0aGlzLCBOb2RlRmlsdGVyLlNIT1dfRUxFTUVOVCwgKG5vZGUpID0+IGlkID09PSBub2RlLmlkID8gTm9kZUZpbHRlci5GSUxURVJfQUNDRVBUIDogTm9kZUZpbHRlci5GSUxURVJfSUdOT1JFLCBmYWxzZSlcbiAgICBmb3IgKGNvbnN0IG5vZGUgb2YgaXRlcikge1xuICAgICAgcmV0dXJuIG5vZGVcbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ3NzUXVlcnkgfSBmcm9tICcuLi8uLi9vdGhlci9Dc3NRdWVyeS5qcydcbmltcG9ydCB7IE5vZGVJdGVyYXRvciB9IGZyb20gJy4uLy4uL3V0aWxzL05vZGVJdGVyYXRvci5qcydcbmltcG9ydCB7IE5vZGVGaWx0ZXIgfSBmcm9tICcuLi9Ob2RlRmlsdGVyLmpzJ1xuaW1wb3J0IHsgbm9kZXNUb05vZGUgfSBmcm9tICcuLi8uLi91dGlscy9ub2Rlc1RvTm9kZS5qcydcblxuLy8gaHR0cHM6Ly9kb20uc3BlYy53aGF0d2cub3JnLyNwYXJlbnRub2RlXG5jb25zdCBQYXJlbnROb2RlID0ge1xuICBtYXRjaFdpdGhTY29wZSAocXVlcnksIHNjb3BlKSB7XG4gICAgcmV0dXJuIG5ldyBDc3NRdWVyeShxdWVyeSkubWF0Y2hlcyh0aGlzLCBzY29wZSlcbiAgfSxcblxuICBxdWVyeSAocXVlcnksIHNjb3BlLCBzaW5nbGUgPSBmYWxzZSkge1xuXG4gICAgY29uc3QgaXRlciA9IG5ldyBOb2RlSXRlcmF0b3Ioc2NvcGUsIE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5ULCAobm9kZSkgPT4gbm9kZS5tYXRjaFdpdGhTY29wZShxdWVyeSwgc2NvcGUpID8gTm9kZUZpbHRlci5GSUxURVJfQUNDRVBUIDogTm9kZUZpbHRlci5GSUxURVJfSUdOT1JFLCBmYWxzZSlcblxuICAgIGNvbnN0IG5vZGVzID0gW11cbiAgICBmb3IgKGNvbnN0IG5vZGUgb2YgaXRlcikge1xuICAgICAgbm9kZXMucHVzaChub2RlKVxuICAgICAgaWYgKHNpbmdsZSkgcmV0dXJuIG5vZGVzXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzXG4gIH0sXG5cbiAgcXVlcnlTZWxlY3RvckFsbCAocXVlcnkpIHtcbiAgICByZXR1cm4gdGhpcy5xdWVyeShxdWVyeSwgdGhpcylcbiAgfSxcblxuICBxdWVyeVNlbGVjdG9yIChxdWVyeSkge1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5KHF1ZXJ5LCB0aGlzLCB0cnVlKVswXSB8fCBudWxsXG4gIH0sXG5cbiAgcHJlcGVuZCAobm9kZXMpIHtcbiAgICBjb25zdCBub2RlID0gbm9kZXNUb05vZGUobm9kZXMsIHRoaXMub3duZXJEb2N1bWVudClcblxuICAgIHRoaXMuaW5zZXJ0QmVmb3JlKG5vZGUsIHRoaXMuZmlyc3RDaGlsZClcbiAgfSxcblxuICBhcHBlbmQgKG5vZGVzKSB7XG4gICAgY29uc3Qgbm9kZSA9IG5vZGVzVG9Ob2RlKG5vZGVzLCB0aGlzLm93bmVyRG9jdW1lbnQpXG4gICAgdGhpcy5hcHBlbmRDaGlsZChub2RlKVxuICB9LFxuXG4gIHJlcGxhY2VDaGlsZHJlbiAobm9kZXMpIHtcbiAgICB3aGlsZSAodGhpcy5maXJzdENoaWxkKSB7XG4gICAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMuZmlyc3RDaGlsZClcbiAgICB9XG4gICAgdGhpcy5hcHBlbmQobm9kZXMpXG4gIH1cbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoUGFyZW50Tm9kZSwge1xuICBjaGlsZHJlbjoge1xuICAgIGdldCAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzLmZpbHRlcihmdW5jdGlvbiAobm9kZSkgeyByZXR1cm4gbm9kZS5ub2RlVHlwZSA9PT0gbm9kZS5FTEVNRU5UX05PREUgfSlcbiAgICB9XG4gIH0sXG4gIGZpcnN0RWxlbWVudENoaWxkOiB7XG4gICAgZ2V0ICgpIHtcbiAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiB0aGlzLmNoaWxkTm9kZXMpIHtcbiAgICAgICAgaWYgKG5vZGUgJiYgbm9kZS5ub2RlVHlwZSA9PT0gbm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICByZXR1cm4gbm9kZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfSxcbiAgbGFzdEVsZW1lbnRDaGlsZDoge1xuICAgIGdldCAoKSB7XG4gICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgdGhpcy5jaGlsZE5vZGVzLnNsaWNlKCkucmV2ZXJzZSgpKSB7XG4gICAgICAgIGlmIChub2RlICYmIG5vZGUubm9kZVR5cGUgPT09IG5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgcmV0dXJuIG5vZGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH0sXG4gIGNoaWxkRWxlbWVudENvdW50OiB7XG4gICAgZ2V0ICgpIHtcbiAgICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLmxlbmd0aFxuICAgIH1cbiAgfVxufSlcblxuZXhwb3J0IHsgUGFyZW50Tm9kZSB9XG4iLCJpbXBvcnQgeyBOb2RlRmlsdGVyIH0gZnJvbSAnLi4vTm9kZUZpbHRlci5qcydcbmltcG9ydCB7IE5vZGVJdGVyYXRvciB9IGZyb20gJy4uLy4uL3V0aWxzL05vZGVJdGVyYXRvci5qcydcblxuY29uc3QgaGFzQ2xhc3MgPSAobm9kZSwgbmFtZSkgPT4ge1xuICBjb25zdCBjbGFzc0xpc3QgPSBub2RlLmNsYXNzTmFtZS5zcGxpdCgvXFxzKy8pXG4gIHJldHVybiBjbGFzc0xpc3QuaW5jbHVkZXMobmFtZSlcbn1cblxuY29uc3QgZWxlbWVudEFjY2VzcyA9IHtcbiAgZ2V0RWxlbWVudHNCeVRhZ05hbWUgKG5hbWUpIHtcbiAgICAvLyBjb25zdCBkb2N1bWVudCA9IHRoaXMub3duZXJEb2N1bWVudFxuICAgIGNvbnN0IGl0ZXIgPSBuZXcgTm9kZUl0ZXJhdG9yKHRoaXMsIE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5ULCAobm9kZSkgPT4gbm9kZS5ub2RlTmFtZSA9PT0gbmFtZSA/IE5vZGVGaWx0ZXIuRklMVEVSX0FDQ0VQVCA6IE5vZGVGaWx0ZXIuRklMVEVSX0lHTk9SRSwgZmFsc2UpXG4gICAgLy8gY29uc3QgaXRlciA9IGRvY3VtZW50LmNyZWF0ZU5vZGVJdGVyYXRvcih0aGlzLCAxLCAobm9kZSkgPT4gbm9kZS5ub2RlTmFtZSA9PT0gbmFtZSA/IE5vZGVGaWx0ZXIuRklMVEVSX0FDQ0VQVCA6IE5vZGVGaWx0ZXIuRklMVEVSX0lHTk9SRSlcbiAgICByZXR1cm4gWyAuLi5pdGVyIF1cbiAgfSxcblxuICBnZXRFbGVtZW50c0J5VGFnTmFtZU5TIChucywgbmFtZSkge1xuICAgIC8vIGNvbnN0IGRvY3VtZW50ID0gdGhpcy5vd25lckRvY3VtZW50XG4gICAgY29uc3QgaXRlciA9IG5ldyBOb2RlSXRlcmF0b3IodGhpcywgTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQsIChub2RlKSA9PiBub2RlLmlzTmFtZXNwYWNlKG5zKSAmJiBub2RlLm5vZGVOYW1lID09PSBuYW1lID8gTm9kZUZpbHRlci5GSUxURVJfQUNDRVBUIDogTm9kZUZpbHRlci5GSUxURVJfSUdOT1JFLCBmYWxzZSlcbiAgICAvLyBjb25zdCBpdGVyID0gZG9jdW1lbnQuY3JlYXRlTm9kZUl0ZXJhdG9yKHRoaXMsIDEsIChub2RlKSA9PiBub2RlLmlzTmFtZXNwYWNlKG5zKSAmJiBub2RlLm5vZGVOYW1lID09PSBuYW1lID8gTm9kZUZpbHRlci5GSUxURVJfQUNDRVBUIDogTm9kZUZpbHRlci5GSUxURVJfSUdOT1JFKVxuICAgIHJldHVybiBbIC4uLml0ZXIgXVxuICB9LFxuXG4gIGdldEVsZW1lbnRzQnlDbGFzc05hbWUgKG5hbWUpIHtcbiAgICAvLyBjb25zdCBkb2N1bWVudCA9IHRoaXMub3duZXJEb2N1bWVudFxuICAgIGNvbnN0IGl0ZXIgPSBuZXcgTm9kZUl0ZXJhdG9yKHRoaXMsIE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5ULCAobm9kZSkgPT4gaGFzQ2xhc3Mobm9kZSwgbmFtZSkgPyBOb2RlRmlsdGVyLkZJTFRFUl9BQ0NFUFQgOiBOb2RlRmlsdGVyLkZJTFRFUl9JR05PUkUsIGZhbHNlKVxuICAgIC8vIGNvbnN0IGl0ZXIgPSBkb2N1bWVudC5jcmVhdGVOb2RlSXRlcmF0b3IodGhpcywgMSwgKG5vZGUpID0+IGhhc0NsYXNzKG5vZGUsIG5hbWUpID8gTm9kZUZpbHRlci5GSUxURVJfQUNDRVBUIDogTm9kZUZpbHRlci5GSUxURVJfSUdOT1JFKVxuICAgIHJldHVybiBbIC4uLml0ZXIgXVxuICB9XG59XG5cbmV4cG9ydCB7IGVsZW1lbnRBY2Nlc3MgfVxuIiwiaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gJy4uL0VsZW1lbnQuanMnXG5leHBvcnQgY2xhc3MgU1ZHRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBnZXQgb3duZXJTVkdFbGVtZW50ICgpIHtcbiAgICBsZXQgcGFyZW50ID0gdGhpc1xuICAgIHdoaWxlICgocGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGUpKSB7XG4gICAgICBpZiAoJ3N2ZycgPT0gcGFyZW50Lm5vZGVOYW1lKSB7XG4gICAgICAgIHJldHVybiBwYXJlbnRcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGdldCB2aWV3cG9ydEVsZW1lbnQgKCkge1xuICAgIGxldCBwYXJlbnQgPSB0aGlzXG4gICAgd2hpbGUgKChwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZSkpIHtcbiAgICAgIC8vIFRPRE86IGFuZCBvdGhlcnNcbiAgICAgIGlmIChbICdzdmcnLCAnc3ltYm9sJyBdLmluY2x1ZGVzKHBhcmVudC5ub2RlTmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG4iLCJpbXBvcnQgeyBTVkdFbGVtZW50IH0gZnJvbSAnLi9TVkdFbGVtZW50LmpzJ1xuaW1wb3J0IHsgZ2V0U2VnbWVudHMgfSBmcm9tICcuLi8uLi91dGlscy9iYm94VXRpbHMuanMnXG5pbXBvcnQgKiBhcyByZWdleCBmcm9tICcuLi8uLi91dGlscy9yZWdleC5qcydcbmltcG9ydCB7IFNWR01hdHJpeCB9IGZyb20gJy4vU1ZHTWF0cml4LmpzJ1xuXG4vLyBNYXAgbWF0cml4IGFycmF5IHRvIG9iamVjdFxuZnVuY3Rpb24gYXJyYXlUb01hdHJpeCAoYSkge1xuICByZXR1cm4geyBhOiBhWzBdLCBiOiBhWzFdLCBjOiBhWzJdLCBkOiBhWzNdLCBlOiBhWzRdLCBmOiBhWzVdIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNWR0dyYXBoaWNzRWxlbWVudCBleHRlbmRzIFNWR0VsZW1lbnQge1xuICAvLyBUT0RPOiBodHRwczovL3d3dy53My5vcmcvVFIvU1ZHMi9jb29yZHMuaHRtbCNDb21wdXRpbmdBVmlld3BvcnRzVHJhbnNmb3JtXG4gIGdlbmVyYXRlVmlld0JveE1hdHJpeCAoKSB7XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvU1ZHL0F0dHJpYnV0ZS92aWV3Qm94XG4gICAgaWYgKCFbICdtYXJrZXInLCAnc3ltYm9sJywgJ3BhdHRlcm4nLCAnc3ZnJywgJ3ZpZXcnIF0uaW5jbHVkZXModGhpcy5ub2RlTmFtZSkpIHtcbiAgICAgIHJldHVybiBuZXcgU1ZHTWF0cml4KClcbiAgICB9XG5cbiAgICBsZXQgdmlldyA9ICh0aGlzLmdldEF0dHJpYnV0ZSgndmlld0JveCcpIHx8ICcnKS5zcGxpdChyZWdleC5kZWxpbWl0ZXIpLm1hcChwYXJzZUZsb2F0KS5maWx0ZXIoZWwgPT4gIWlzTmFOKGVsKSlcbiAgICBjb25zdCB3aWR0aCA9IHBhcnNlRmxvYXQodGhpcy5nZXRBdHRyaWJ1dGUoJ3dpZHRoJykpIHx8IDBcbiAgICBjb25zdCBoZWlnaHQgPSBwYXJzZUZsb2F0KHRoaXMuZ2V0QXR0cmlidXRlKCdoZWlnaHQnKSkgfHwgMFxuICAgIGNvbnN0IHggPSBwYXJzZUZsb2F0KHRoaXMuZ2V0QXR0cmlidXRlKCd4JykpIHx8IDBcbiAgICBjb25zdCB5ID0gcGFyc2VGbG9hdCh0aGlzLmdldEF0dHJpYnV0ZSgneScpKSB8fCAwXG5cbiAgICAvLyBUT0RPOiBJZiBubyB3aWR0aCBhbmQgaGVpZ2h0IGlzIGdpdmVuLCB3aWR0aCBhbmQgaGVpZ2h0IG9mIHRoZSBvdXRlciBzdmcgZWxlbWVudCBpcyB1c2VkXG4gICAgaWYgKCF3aWR0aCB8fCAhaGVpZ2h0KSB7XG4gICAgICByZXR1cm4gbmV3IFNWR01hdHJpeCgpLnRyYW5zbGF0ZSh4LCB5KVxuICAgIH1cblxuICAgIGlmICh2aWV3Lmxlbmd0aCAhPT0gNCkge1xuICAgICAgdmlldyA9IFsgMCwgMCwgd2lkdGgsIGhlaWdodCBdXG4gICAgfVxuXG4gICAgLy8gZmlyc3QgYXBwbHkgeCBhbmQgeSBpZiBuZXN0ZWQsIHRoZW4gdmlld2JveCBzY2FsZSwgdGhlbiB2aWV3Qm94IG1vdmVcbiAgICByZXR1cm4gbmV3IFNWR01hdHJpeCgpLnRyYW5zbGF0ZSh4LCB5KS5zY2FsZSh3aWR0aCAvIHZpZXdbMl0sIGhlaWdodCAvIHZpZXdbM10pLnRyYW5zbGF0ZSgtdmlld1swXSwgLXZpZXdbMV0pXG4gIH1cblxuICBnZXRCQm94ICgpIHtcbiAgICByZXR1cm4gZ2V0U2VnbWVudHModGhpcykuYmJveCgpXG4gIH1cblxuICAvLyBUT0RPOiBUaGlzIG1ldGhvZCBhY3R1YWxseSBleGlzdHMgb24gYWxsIEVsZW1lbnRzXG4gIGdldEJvdW5kaW5nQ2xpZW50UmVjdCAoKSB7XG4gICAgLy8gVGhlIGJvdW5kaW5nIGNsaWVudCByZWN0IHRha2VzIHRoZSBzY3JlZW4gY3RtIG9mIHRoZSBlbGVtZW50XG4gICAgLy8gYW5kIGNvbnZlcnRzIHRoZSBib3VuZGluZyBib3ggd2l0aCBpdFxuXG4gICAgLy8gaG93ZXZlciwgbm9ybWFsIGJvdW5kaW5nIGNvbnNpc3RzIG9mOlxuICAgIC8vIC0gYWxsIGNoaWxkcmVuIHRyYW5zZm9ybWVkXG4gICAgLy8gLSB0aGUgdmlld2JveCBvZiB0aGUgZWxlbWVudCBpZiBhdmFpbGFibGVcblxuICAgIC8vIFRoZSBib3VuZGluZ0NsaWVudFJlY3QgaXMgbm90IGFmZmVjdGVkIGJ5IGl0cyBvd24gdmlld2JveFxuICAgIC8vIFNvIHdlIGFwcGx5IG9ubHkgb3VyIG93biB0cmFuc2Zvcm1hdGlvbnMgYW5kIHBhcmVudHMgc2NyZWVuQ1RNXG5cbiAgICBsZXQgbSA9IHRoaXMubWF0cml4aWZ5KClcblxuICAgIGlmICh0aGlzLnBhcmVudE5vZGUgJiYgdGhpcy5wYXJlbnROb2RlLm5vZGVOYW1lICE9PSAnI2RvY3VtZW50Jykge1xuICAgICAgbSA9IHRoaXMucGFyZW50Tm9kZS5nZXRTY3JlZW5DVE0oKS5tdWx0aXBseShtKVxuICAgIH1cblxuICAgIC8vIGxldCBtID0gdGhpcy5nZXRTY3JlZW5DVE0oKVxuXG4gICAgLy8gVGhlcmUgYXJlIGEgZmV3IGV4dHJhIHJ1bGVzIHJlZ2FyZGluZyByYm94IGFuZCB0aGUgPHN2Zz4gZWxlbWVudFxuICAgIC8vIE5hbWVseSB0aGlzIGlzOlxuICAgIC8vIEJCb3ggaXMgY2FsY3VsYXRlZCBhcyBub3JtYWwgZm9yIGNvbnRhaW5lciBlbGVtZW50c1xuICAgIC8vIFJib3ggaXMgY2FsY3VsYXRlZCB3aXRoIHRoZSB3aWR0aCBhbmQgaGVpZ2h0IG9mIHRoZSA8c3ZnPlxuICAgIC8vIFRoaXMgY291bGQgYmUgYWxzbyB0cnVlIGZvciBzeW1ib2xzIHNvIHRoaXMgaXMgYTpcbiAgICAvLyBUb2RvOiAuLi5cbiAgICByZXR1cm4gZ2V0U2VnbWVudHModGhpcywgZmFsc2UsIHRydWUpLnRyYW5zZm9ybShtKS5iYm94KClcbiAgfVxuXG4gIGdldENUTSAoKSB7XG4gICAgbGV0IG0gPSB0aGlzLm1hdHJpeGlmeSgpXG5cbiAgICBsZXQgbm9kZSA9IHRoaXNcbiAgICB3aGlsZSAoKG5vZGUgPSBub2RlLnBhcmVudE5vZGUpKSB7XG4gICAgICBpZiAoWyAnc3ZnJywgJ3N5bWJvbCcsICdpbWFnZScsICdwYXR0ZXJuJywgJ21hcmtlcicgXS5pbmRleE9mKG5vZGUubm9kZU5hbWUpID4gLTEpIGJyZWFrXG4gICAgICBtID0gbS5tdWx0aXBseShub2RlLm1hdHJpeGlmeSgpKVxuICAgICAgaWYgKG5vZGUubm9kZU5hbWUgPT09ICcjZG9jdW1lbnQnKSByZXR1cm4gdGhpcy5nZXRTY3JlZW5DVE0oKVxuICAgIH1cblxuICAgIHJldHVybiBub2RlLmdlbmVyYXRlVmlld0JveE1hdHJpeCgpLm11bHRpcGx5KG0pXG4gIH1cblxuICBnZXRJbm5lck1hdHJpeCAoKSB7XG4gICAgbGV0IG0gPSB0aGlzLm1hdHJpeGlmeSgpXG5cbiAgICBpZiAoWyAnc3ZnJywgJ3N5bWJvbCcsICdpbWFnZScsICdwYXR0ZXJuJywgJ21hcmtlcicgXS5pbmRleE9mKHRoaXMubm9kZU5hbWUpID4gLTEpIHtcbiAgICAgIG0gPSB0aGlzLmdlbmVyYXRlVmlld0JveE1hdHJpeCgpLm11bHRpcGx5KG0pXG4gICAgfVxuICAgIHJldHVybiBtXG4gIH1cblxuICBnZXRTY3JlZW5DVE0gKCkge1xuICAgIC8vIHJlZjogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTM0NDUzN1xuICAgIC8vIFdlIGZvbGxvdyBDaHJvbWVzIGJlaGF2aW9yIGFuZCBpbmNsdWRlIHRoZSB2aWV3Ym94IGluIHRoZSBzY3JlZW5DVE1cbiAgICBjb25zdCBtID0gdGhpcy5nZXRJbm5lck1hdHJpeCgpXG5cbiAgICAvLyBUT0RPOiBXZSBoYXZlIHRvIGxvb3AgdW50aWwgZG9jdW1lbnQsIGhvd2V2ZXIgaHRtbCBlbGVtZW50cyBkb250IGhhdmUgZ2V0U2NyZWVuQ1RNIGltcGxlbWVudGVkXG4gICAgLy8gdGhleSBhbHNvIGRvbnQgaGF2ZSBhIHRyYW5zZm9ybSBhdHRyaWJ1dGUuIFRoZXJlZm9yZSB3ZSBuZWVkIGEgZGlmZmVyZW50IHdheSBvZiBmaWd1cmluZyBvdXQgdGhlaXIgKGNzcykgdHJhbnNmb3JtXG4gICAgaWYgKHRoaXMucGFyZW50Tm9kZSAmJiB0aGlzLnBhcmVudE5vZGUgaW5zdGFuY2VvZiBTVkdHcmFwaGljc0VsZW1lbnQpIHtcbiAgICAgIHJldHVybiB0aGlzLnBhcmVudE5vZGUuZ2V0U2NyZWVuQ1RNKCkubXVsdGlwbHkobSlcbiAgICB9XG5cbiAgICByZXR1cm4gbVxuICB9XG5cbiAgbWF0cml4aWZ5ICgpIHtcbiAgICBjb25zdCBtYXRyaXggPSAodGhpcy5nZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScpIHx8ICcnKS50cmltKClcbiAgICAgIC8vIHNwbGl0IHRyYW5zZm9ybWF0aW9uc1xuICAgICAgLnNwbGl0KHJlZ2V4LnRyYW5zZm9ybXMpLnNsaWNlKDAsIC0xKS5tYXAoZnVuY3Rpb24gKHN0cikge1xuICAgICAgICAvLyBnZW5lcmF0ZSBrZXkgPT4gdmFsdWUgcGFpcnNcbiAgICAgICAgY29uc3Qga3YgPSBzdHIudHJpbSgpLnNwbGl0KCcoJylcbiAgICAgICAgcmV0dXJuIFsga3ZbMF0udHJpbSgpLCBrdlsxXS5zcGxpdChyZWdleC5kZWxpbWl0ZXIpLm1hcChmdW5jdGlvbiAoc3RyKSB7IHJldHVybiBwYXJzZUZsb2F0KHN0ci50cmltKCkpIH0pIF1cbiAgICAgIH0pXG4gICAgICAvLyBtZXJnZSBldmVyeSB0cmFuc2Zvcm1hdGlvbiBpbnRvIG9uZSBtYXRyaXhcbiAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKG1hdHJpeCwgdHJhbnNmb3JtKSB7XG5cbiAgICAgICAgaWYgKHRyYW5zZm9ybVswXSA9PT0gJ21hdHJpeCcpIHJldHVybiBtYXRyaXgubXVsdGlwbHkoYXJyYXlUb01hdHJpeCh0cmFuc2Zvcm1bMV0pKVxuICAgICAgICByZXR1cm4gbWF0cml4W3RyYW5zZm9ybVswXV0uYXBwbHkobWF0cml4LCB0cmFuc2Zvcm1bMV0pXG5cbiAgICAgIH0sIG5ldyBTVkdNYXRyaXgoKSlcblxuICAgIHJldHVybiBtYXRyaXhcbiAgfVxuXG4gIGdldCB0cmFuc2Zvcm0gKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignTm90IGltcGxlbWVudGVkJylcbiAgfVxuXG59XG4iLCJjb25zdCByYWRpYW5zID0gZnVuY3Rpb24gKGQpIHtcbiAgcmV0dXJuIGQgJSAzNjAgKiBNYXRoLlBJIC8gMTgwXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXRyaXhGYWN0b3J5IChhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIHZhciByID0gbmV3IFNWR01hdHJpeCgpXG4gIHIuYSA9IGFcbiAgci5iID0gYlxuICByLmMgPSBjXG4gIHIuZCA9IGRcbiAgci5lID0gZVxuICByLmYgPSBmXG4gIHJldHVybiByXG59XG5cbmV4cG9ydCBjbGFzcyBTVkdNYXRyaXgge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5hID0gdGhpcy5kID0gMVxuICAgIHRoaXMuYiA9IHRoaXMuYyA9IHRoaXMuZSA9IHRoaXMuZiA9IDBcbiAgfVxuXG4gIGludmVyc2UgKCkge1xuICAgIC8vIEdldCB0aGUgY3VycmVudCBwYXJhbWV0ZXJzIG91dCBvZiB0aGUgbWF0cml4XG4gICAgdmFyIGEgPSB0aGlzLmFcbiAgICB2YXIgYiA9IHRoaXMuYlxuICAgIHZhciBjID0gdGhpcy5jXG4gICAgdmFyIGQgPSB0aGlzLmRcbiAgICB2YXIgZSA9IHRoaXMuZVxuICAgIHZhciBmID0gdGhpcy5mXG5cbiAgICAvLyBJbnZlcnQgdGhlIDJ4MiBtYXRyaXggaW4gdGhlIHRvcCBsZWZ0XG4gICAgdmFyIGRldCA9IGEgKiBkIC0gYiAqIGNcbiAgICBpZiAoIWRldCkgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgaW52ZXJ0ICcgKyB0aGlzKVxuXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSB0b3AgMngyIG1hdHJpeFxuICAgIHZhciBuYSA9IGQgLyBkZXRcbiAgICB2YXIgbmIgPSAtYiAvIGRldFxuICAgIHZhciBuYyA9IC1jIC8gZGV0XG4gICAgdmFyIG5kID0gYSAvIGRldFxuXG4gICAgLy8gQXBwbHkgdGhlIGludmVydGVkIG1hdHJpeCB0byB0aGUgdG9wIHJpZ2h0XG4gICAgdmFyIG5lID0gLShuYSAqIGUgKyBuYyAqIGYpXG4gICAgdmFyIG5mID0gLShuYiAqIGUgKyBuZCAqIGYpXG5cbiAgICAvLyBDb25zdHJ1Y3QgdGhlIGludmVydGVkIG1hdHJpeFxuICAgIHRoaXMuYSA9IG5hXG4gICAgdGhpcy5iID0gbmJcbiAgICB0aGlzLmMgPSBuY1xuICAgIHRoaXMuZCA9IG5kXG4gICAgdGhpcy5lID0gbmVcbiAgICB0aGlzLmYgPSBuZlxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIG11bHRpcGx5IChtKSB7XG4gICAgdmFyIHIgPSBuZXcgU1ZHTWF0cml4KClcbiAgICByLmEgPSB0aGlzLmEgKiBtLmEgKyB0aGlzLmMgKiBtLmIgKyB0aGlzLmUgKiAwXG4gICAgci5iID0gdGhpcy5iICogbS5hICsgdGhpcy5kICogbS5iICsgdGhpcy5mICogMFxuICAgIHIuYyA9IHRoaXMuYSAqIG0uYyArIHRoaXMuYyAqIG0uZCArIHRoaXMuZSAqIDBcbiAgICByLmQgPSB0aGlzLmIgKiBtLmMgKyB0aGlzLmQgKiBtLmQgKyB0aGlzLmYgKiAwXG4gICAgci5lID0gdGhpcy5hICogbS5lICsgdGhpcy5jICogbS5mICsgdGhpcy5lICogMVxuICAgIHIuZiA9IHRoaXMuYiAqIG0uZSArIHRoaXMuZCAqIG0uZiArIHRoaXMuZiAqIDFcbiAgICByZXR1cm4gclxuICB9XG5cbiAgcm90YXRlIChyLCB4LCB5KSB7XG4gICAgciA9IHIgJSAzNjAgKiBNYXRoLlBJIC8gMTgwXG4gICAgcmV0dXJuIHRoaXMubXVsdGlwbHkobWF0cml4RmFjdG9yeShcbiAgICAgIE1hdGguY29zKHIpLFxuICAgICAgTWF0aC5zaW4ociksXG4gICAgICAtTWF0aC5zaW4ociksXG4gICAgICBNYXRoLmNvcyhyKSxcbiAgICAgIHggPyAtTWF0aC5jb3MocikgKiB4ICsgTWF0aC5zaW4ocikgKiB5ICsgeCA6IDAsXG4gICAgICB5ID8gLU1hdGguc2luKHIpICogeCAtIE1hdGguY29zKHIpICogeSArIHkgOiAwXG4gICAgKSlcbiAgfVxuXG4gIHNjYWxlIChzY2FsZVgsIHNjYWxlWSA9IHNjYWxlWCkge1xuICAgIHJldHVybiB0aGlzLm11bHRpcGx5KG1hdHJpeEZhY3Rvcnkoc2NhbGVYLCAwLCAwLCBzY2FsZVksIDAsIDApKVxuICB9XG5cbiAgc2tldyAoeCwgeSkge1xuICAgIHJldHVybiB0aGlzLm11bHRpcGx5KG1hdHJpeEZhY3RvcnkoMSwgTWF0aC50YW4ocmFkaWFucyh5KSksIE1hdGgudGFuKHJhZGlhbnMoeCkpLCAxLCAwLCAwKSlcbiAgfVxuXG4gIHNrZXdYICh4KSB7XG4gICAgcmV0dXJuIHRoaXMuc2tldyh4LCAwKVxuICB9XG5cbiAgc2tld1kgKHkpIHtcbiAgICByZXR1cm4gdGhpcy5za2V3KDAsIHkpXG4gIH1cblxuICB0b1N0cmluZyAoKSB7XG4gICAgcmV0dXJuICdTVkdNYXRyaXgnXG4gIH1cblxuICB0cmFuc2xhdGUgKHggPSAwLCB5ID0gMCkge1xuICAgIHJldHVybiB0aGlzLm11bHRpcGx5KG1hdHJpeEZhY3RvcnkoMSwgMCwgMCwgMSwgeCwgeSkpXG4gIH1cblxufVxuIiwiaW1wb3J0IHsgU1ZHR3JhcGhpY3NFbGVtZW50IH0gZnJvbSAnLi9TVkdHcmFwaGljc0VsZW1lbnQuanMnXG5pbXBvcnQgKiBhcyBwYXRoVXRpbHMgZnJvbSAnLi4vLi4vdXRpbHMvcGF0aFV0aWxzLmpzJ1xuXG5leHBvcnQgY2xhc3MgU1ZHUGF0aEVsZW1lbnQgZXh0ZW5kcyBTVkdHcmFwaGljc0VsZW1lbnQge1xuICBnZXRQb2ludEF0TGVuZ3RoIChsZW4pIHtcbiAgICByZXR1cm4gcGF0aFV0aWxzLnBvaW50QXRMZW5ndGgodGhpcy5nZXRBdHRyaWJ1dGUoJ2QnKSwgbGVuKVxuICB9XG5cbiAgZ2V0VG90YWxMZW5ndGggKCkge1xuICAgIHJldHVybiBwYXRoVXRpbHMubGVuZ3RoKHRoaXMuZ2V0QXR0cmlidXRlKCdkJykpXG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBTVkdQb2ludCB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLnggPSAwXG4gICAgdGhpcy55ID0gMFxuICB9XG5cbiAgbWF0cml4VHJhbnNmb3JtIChtKSB7XG4gICAgdmFyIHIgPSBuZXcgU1ZHUG9pbnQoKVxuICAgIHIueCA9IG0uYSAqIHRoaXMueCArIG0uYyAqIHRoaXMueSArIG0uZSAqIDFcbiAgICByLnkgPSBtLmIgKiB0aGlzLnggKyBtLmQgKiB0aGlzLnkgKyBtLmYgKiAxXG4gICAgcmV0dXJuIHJcbiAgfVxufVxuIiwiaW1wb3J0IHsgU1ZHR3JhcGhpY3NFbGVtZW50IH0gZnJvbSAnLi9TVkdHcmFwaGljc0VsZW1lbnQuanMnXG5pbXBvcnQgeyBCb3ggfSBmcm9tICcuLi8uLi9vdGhlci9Cb3guanMnXG5pbXBvcnQgeyBTVkdNYXRyaXggfSBmcm9tICcuL1NWR01hdHJpeC5qcydcbmltcG9ydCB7IFNWR1BvaW50IH0gZnJvbSAnLi9TVkdQb2ludC5qcydcblxuZXhwb3J0IGNsYXNzIFNWR1NWR0VsZW1lbnQgZXh0ZW5kcyBTVkdHcmFwaGljc0VsZW1lbnQge1xuICBjcmVhdGVTVkdNYXRyaXggKCkge1xuICAgIHJldHVybiBuZXcgU1ZHTWF0cml4KClcbiAgfVxuXG4gIGNyZWF0ZVNWR1BvaW50ICgpIHtcbiAgICByZXR1cm4gbmV3IFNWR1BvaW50KClcbiAgfVxuXG4gIGNyZWF0ZVNWR1JlY3QgKCkge1xuICAgIHJldHVybiBuZXcgQm94KClcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBTVkdHcmFwaGljc0VsZW1lbnQgfSBmcm9tICcuL1NWR0dyYXBoaWNzRWxlbWVudC5qcydcblxuZXhwb3J0IGNsYXNzIFNWR1RleHRDb250ZW50RWxlbWVudCBleHRlbmRzIFNWR0dyYXBoaWNzRWxlbWVudCB7XG4gIGdldENvbXB1dGVkVGV4dExlbmd0aCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QkJveCgpLndpZHRoXG4gIH1cbn1cbiIsImltcG9ydCB7IFdpbmRvdyB9IGZyb20gJy4vZG9tL1dpbmRvdy5qcydcbmltcG9ydCB7IERPTUltcGxlbWVudGF0aW9uIH0gZnJvbSAnLi9kb20vRG9jdW1lbnQuanMnXG5pbXBvcnQgKiBhcyBuYW1lc3BhY2VzIGZyb20gJy4vdXRpbHMvbmFtZXNwYWNlcy5qcydcblxuY29uc3QgeyBjcmVhdGVEb2N1bWVudCwgY3JlYXRlSFRNTERvY3VtZW50IH0gPSBET01JbXBsZW1lbnRhdGlvblxuXG5jb25zdCBjcmVhdGVXaW5kb3cgPSAoLi4uYXJncykgPT4ge1xuICBjb25zdCB3aW5kb3cgPSBuZXcgV2luZG93KClcbiAgY29uc3QgZG9jdW1lbnQgPSBjcmVhdGVEb2N1bWVudCguLi5hcmdzKVxuICB3aW5kb3cuZG9jdW1lbnQgPSBkb2N1bWVudFxuICBkb2N1bWVudC5kZWZhdWx0VmlldyA9IHdpbmRvd1xuICByZXR1cm4gd2luZG93XG59XG5cbmNvbnN0IGNyZWF0ZUhUTUxXaW5kb3cgPSAodGl0bGUpID0+IHtcbiAgY29uc3Qgd2luZG93ID0gbmV3IFdpbmRvdygpXG4gIGNvbnN0IGRvY3VtZW50ID0gRE9NSW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KHRpdGxlKVxuICB3aW5kb3cuZG9jdW1lbnQgPSBkb2N1bWVudFxuICBkb2N1bWVudC5kZWZhdWx0VmlldyA9IHdpbmRvd1xuICByZXR1cm4gd2luZG93XG59XG5cbmNvbnN0IGNyZWF0ZVNWR1dpbmRvdyA9ICgpID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVdpbmRvdyhuYW1lc3BhY2VzLnN2ZywgJ3N2ZycpXG59XG5cbmNvbnN0IGNyZWF0ZVNWR0RvY3VtZW50ID0gKCkgPT4ge1xuICByZXR1cm4gY3JlYXRlRG9jdW1lbnQobmFtZXNwYWNlcy5zdmcsICdzdmcnKVxufVxuXG5leHBvcnQge1xuICBjcmVhdGVEb2N1bWVudCxcbiAgY3JlYXRlSFRNTERvY3VtZW50LFxuICBjcmVhdGVTVkdEb2N1bWVudCxcbiAgY3JlYXRlV2luZG93LFxuICBjcmVhdGVIVE1MV2luZG93LFxuICBjcmVhdGVTVkdXaW5kb3dcbn1cbiIsImltcG9ydCAqIGFzIHJlZ2V4IGZyb20gJy4uL3V0aWxzL3JlZ2V4LmpzJ1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuL1BvaW50LmpzJ1xuXG5leHBvcnQgY2xhc3MgQm94IHtcbiAgY29uc3RydWN0b3IgKHNvdXJjZSkge1xuICAgIHZhciBiYXNlID0gWyAwLCAwLCAwLCAwIF1cbiAgICBzb3VyY2UgPSB0eXBlb2Ygc291cmNlID09PSAnc3RyaW5nJyA/IHNvdXJjZS5zcGxpdChyZWdleC5kZWxpbWl0ZXIpLm1hcChwYXJzZUZsb2F0KVxuICAgICAgOiBBcnJheS5pc0FycmF5KHNvdXJjZSkgPyBzb3VyY2VcbiAgICAgIDogdHlwZW9mIHNvdXJjZSA9PT0gJ29iamVjdCcgPyBbXG4gICAgICAgIHNvdXJjZS5sZWZ0ICE9IG51bGwgPyBzb3VyY2UubGVmdCA6IHNvdXJjZS54LFxuICAgICAgICBzb3VyY2UudG9wICE9IG51bGwgPyBzb3VyY2UudG9wIDogc291cmNlLnksXG4gICAgICAgIHNvdXJjZS53aWR0aCxcbiAgICAgICAgc291cmNlLmhlaWdodFxuICAgICAgXVxuICAgICAgOiBhcmd1bWVudHMubGVuZ3RoID09PSA0ID8gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpXG4gICAgICA6IGJhc2VcblxuICAgIHRoaXMueCA9IHRoaXMubGVmdCA9IHNvdXJjZVswXVxuICAgIHRoaXMueSA9IHRoaXMudG9wID0gc291cmNlWzFdXG4gICAgdGhpcy53aWR0aCA9IHNvdXJjZVsyXVxuICAgIHRoaXMuaGVpZ2h0ID0gc291cmNlWzNdXG4gICAgdGhpcy5yaWdodCA9IHRoaXMubGVmdCArIHRoaXMud2lkdGhcbiAgICB0aGlzLmJvdHRvbSA9IHRoaXMudG9wICsgdGhpcy5oZWlnaHRcbiAgfVxuXG4gIC8vIE1lcmdlIHJlY3QgYm94IHdpdGggYW5vdGhlciwgcmV0dXJuIGEgbmV3IGluc3RhbmNlXG4gIG1lcmdlIChib3gpIHtcbiAgICBpZiAoYm94IGluc3RhbmNlb2YgTm9Cb3gpIHJldHVybiBuZXcgQm94KHRoaXMpXG5cbiAgICB2YXIgeCA9IE1hdGgubWluKHRoaXMueCwgYm94LngpXG4gICAgdmFyIHkgPSBNYXRoLm1pbih0aGlzLnksIGJveC55KVxuXG4gICAgcmV0dXJuIG5ldyBCb3goXG4gICAgICB4LCB5LFxuICAgICAgTWF0aC5tYXgodGhpcy54ICsgdGhpcy53aWR0aCwgYm94LnggKyBib3gud2lkdGgpIC0geCxcbiAgICAgIE1hdGgubWF4KHRoaXMueSArIHRoaXMuaGVpZ2h0LCBib3gueSArIGJveC5oZWlnaHQpIC0geVxuICAgIClcbiAgfVxuXG4gIHRyYW5zZm9ybSAobSkge1xuICAgIHZhciB4TWluID0gSW5maW5pdHlcbiAgICB2YXIgeE1heCA9IC1JbmZpbml0eVxuICAgIHZhciB5TWluID0gSW5maW5pdHlcbiAgICB2YXIgeU1heCA9IC1JbmZpbml0eVxuXG4gICAgdmFyIHB0cyA9IFtcbiAgICAgIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueSksXG4gICAgICBuZXcgUG9pbnQodGhpcy54ICsgdGhpcy53aWR0aCwgdGhpcy55KSxcbiAgICAgIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueSArIHRoaXMuaGVpZ2h0KSxcbiAgICAgIG5ldyBQb2ludCh0aGlzLnggKyB0aGlzLndpZHRoLCB0aGlzLnkgKyB0aGlzLmhlaWdodClcbiAgICBdXG5cbiAgICBwdHMuZm9yRWFjaChmdW5jdGlvbiAocCkge1xuICAgICAgcCA9IHAudHJhbnNmb3JtKG0pXG4gICAgICB4TWluID0gTWF0aC5taW4oeE1pbiwgcC54KVxuICAgICAgeE1heCA9IE1hdGgubWF4KHhNYXgsIHAueClcbiAgICAgIHlNaW4gPSBNYXRoLm1pbih5TWluLCBwLnkpXG4gICAgICB5TWF4ID0gTWF0aC5tYXgoeU1heCwgcC55KVxuICAgIH0pXG5cbiAgICByZXR1cm4gbmV3IEJveChcbiAgICAgIHhNaW4sIHlNaW4sXG4gICAgICB4TWF4IC0geE1pbixcbiAgICAgIHlNYXggLSB5TWluXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBOb0JveCBleHRlbmRzIEJveCB7XG4gIC8vIE5vQm94IGhhcyBubyB2YWxpZCB2YWx1ZXMgc28gaXQgY2FudCBiZSBtZXJnZWRcbiAgbWVyZ2UgKGJveCkge1xuICAgIHJldHVybiBib3ggaW5zdGFuY2VvZiBOb0JveCA/IG5ldyBOb0JveCgpIDogbmV3IEJveChib3gpXG4gIH1cblxuICB0cmFuc2Zvcm0gKG0pIHtcbiAgICByZXR1cm4gbmV3IE5vQm94KClcbiAgfVxufVxuIiwiaW1wb3J0IHsgcmVtb3ZlUXVvdGVzLCBzcGxpdE5vdEluQnJhY2tldHMgfSBmcm9tICcuLi91dGlscy9zdHJVdGlscy5qcydcbmltcG9ydCAqIGFzIHJlZ2V4IGZyb20gJy4uL3V0aWxzL3JlZ2V4LmpzJ1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gJy4uL3V0aWxzL25hbWVzcGFjZXMuanMnXG5cbmV4cG9ydCBjbGFzcyBDc3NRdWVyeSB7XG4gIGNvbnN0cnVjdG9yIChxdWVyeSkge1xuICAgIGlmIChDc3NRdWVyeS5jYWNoZS5oYXMocXVlcnkpKSB7XG4gICAgICB0aGlzLnF1ZXJpZXMgPSBDc3NRdWVyeS5jYWNoZS5nZXQocXVlcnkpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB2YXIgcXVlcmllcyA9IHNwbGl0Tm90SW5CcmFja2V0cyhxdWVyeSwgJywnKVxuXG4gICAgcXVlcmllcyA9IHF1ZXJpZXMubWFwKHF1ZXJ5ID0+IHtcblxuICAgICAgdmFyIHJvdW5kQnJhY2tldHMgPSAwXG4gICAgICB2YXIgc3F1YXJlQnJhY2tldHMgPSAwXG5cbiAgICAgIC8vIHRoaXMgaXMgdGhlIHNhbWUgYXMgYWJvdmUgYnV0IGVhc2llclxuICAgICAgcXVlcnkgPSBxdWVyeS5yZXBsYWNlKC9bKClbXFxdPn4rXS9nLCBmdW5jdGlvbiAoY2gpIHtcbiAgICAgICAgaWYgKGNoID09PSAnKCcpICsrcm91bmRCcmFja2V0c1xuICAgICAgICBlbHNlIGlmIChjaCA9PT0gJyknKSAtLXJvdW5kQnJhY2tldHNcbiAgICAgICAgZWxzZSBpZiAoY2ggPT09ICdbJykgKytzcXVhcmVCcmFja2V0c1xuICAgICAgICBlbHNlIGlmIChjaCA9PT0gJ10nKSAtLXNxdWFyZUJyYWNrZXRzXG5cbiAgICAgICAgaWYgKCcoKVtdJy5pbmRleE9mKGNoKSA+IC0xKSByZXR1cm4gY2hcbiAgICAgICAgaWYgKHNxdWFyZUJyYWNrZXRzIHx8IHJvdW5kQnJhY2tldHMpIHJldHVybiBjaFxuXG4gICAgICAgIHJldHVybiAnICcgKyBjaCArICcgJ1xuICAgICAgfSlcblxuICAgICAgLy8gc3BsaXQgYXQgc3BhY2UgYW5kIHJlbW92ZSBlbXB0eSByZXN1bHRzXG4gICAgICBxdWVyeSA9IHNwbGl0Tm90SW5CcmFja2V0cyhxdWVyeSwgJyAnKS5maWx0ZXIoZWwgPT4gISFlbC5sZW5ndGgpXG5cbiAgICAgIHZhciBwYWlycyA9IFtdXG5cbiAgICAgIHZhciByZWxhdGlvbiA9ICclJ1xuXG4gICAgICAvLyBnZW5lcmF0ZSBxdWVyeW5vZGUgcmVsYXRpb24gdHVwbGVzXG4gICAgICBmb3IgKHZhciBpID0gMCwgaWwgPSBxdWVyeS5sZW5ndGg7IGkgPCBpbDsgKytpKSB7XG5cbiAgICAgICAgaWYgKCc+fislJy5pbmRleE9mKHF1ZXJ5W2ldKSA+IC0xKSB7XG4gICAgICAgICAgcmVsYXRpb24gPSBxdWVyeVtpXVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBwYWlycy5wdXNoKFsgcmVsYXRpb24sIHF1ZXJ5W2ldIF0pXG4gICAgICAgIHJlbGF0aW9uID0gJyUnXG5cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhaXJzXG5cbiAgICB9KVxuXG4gICAgdGhpcy5xdWVyaWVzID0gcXVlcmllc1xuXG4gICAgLy8gdG8gcHJldmVudCBtZW1vcnkgbGVha3Mgd2UgaGF2ZSB0byBtYW5hZ2Ugb3VyIGNhY2hlLlxuICAgIC8vIHdlIGRlbGV0ZSBldmVyeXRoaW5nIHdoaWNoIGlzIG9sZGVyIHRoYW4gNTAgZW50cmllc1xuICAgIGlmIChDc3NRdWVyeS5jYWNoZUtleXMubGVuZ3RoID4gNTApIHtcbiAgICAgIENzc1F1ZXJ5LmNhY2hlLmRlbGV0ZShDc3NRdWVyeS5jYWNoZUtleXMuc2hpZnQoKSlcbiAgICB9XG4gICAgQ3NzUXVlcnkuY2FjaGUuc2V0KHF1ZXJ5LCBxdWVyaWVzKVxuICAgIENzc1F1ZXJ5LmNhY2hlS2V5cy5wdXNoKHF1ZXJ5KVxuXG4gIH1cblxuICBtYXRjaGVzIChub2RlLCBzY29wZSkge1xuICAgIGZvciAodmFyIGkgPSB0aGlzLnF1ZXJpZXMubGVuZ3RoOyBpLS07KSB7XG4gICAgICBpZiAodGhpcy5tYXRjaEhlbHBlcih0aGlzLnF1ZXJpZXNbaV0sIG5vZGUsIHNjb3BlKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIG1hdGNoSGVscGVyIChxdWVyeSwgbm9kZSwgc2NvcGUpIHtcbiAgICBxdWVyeSA9IHF1ZXJ5LnNsaWNlKClcbiAgICB2YXIgbGFzdCA9IHF1ZXJ5LnBvcCgpXG5cbiAgICBpZiAoIW5ldyBDc3NRdWVyeU5vZGUobGFzdFsxXSkubWF0Y2hlcyhub2RlLCBzY29wZSkpIHsgcmV0dXJuIGZhbHNlIH1cblxuICAgIGlmICghcXVlcnkubGVuZ3RoKSByZXR1cm4gdHJ1ZVxuXG4gICAgaWYgKGxhc3RbMF0gPT09ICcsJykgcmV0dXJuIHRydWVcblxuICAgIGlmIChsYXN0WzBdID09PSAnKycpIHtcbiAgICAgIHJldHVybiAhIW5vZGUucHJldmlvdXNTaWJsaW5nICYmIHRoaXMubWF0Y2hIZWxwZXIocXVlcnksIG5vZGUucHJldmlvdXNTaWJsaW5nLCBzY29wZSlcbiAgICB9XG5cbiAgICBpZiAobGFzdFswXSA9PT0gJz4nKSB7XG4gICAgICByZXR1cm4gISFub2RlLnBhcmVudE5vZGUgJiYgdGhpcy5tYXRjaEhlbHBlcihxdWVyeSwgbm9kZS5wYXJlbnROb2RlLCBzY29wZSlcbiAgICB9XG5cbiAgICBpZiAobGFzdFswXSA9PT0gJ34nKSB7XG4gICAgICB3aGlsZSAoKG5vZGUgPSBub2RlLnByZXZpb3VzU2libGluZykpIHtcbiAgICAgICAgaWYgKHRoaXMubWF0Y2hIZWxwZXIocXVlcnksIG5vZGUsIHNjb3BlKSkgeyByZXR1cm4gdHJ1ZSB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAobGFzdFswXSA9PT0gJyUnKSB7XG4gICAgICB3aGlsZSAoKG5vZGUgPSBub2RlLnBhcmVudE5vZGUpKSB7XG4gICAgICAgIGlmICh0aGlzLm1hdGNoSGVscGVyKHF1ZXJ5LCBub2RlLCBzY29wZSkpIHsgcmV0dXJuIHRydWUgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gIH1cbn1cblxuQ3NzUXVlcnkuY2FjaGUgPSBuZXcgTWFwKClcbkNzc1F1ZXJ5LmNhY2hlS2V5cyA9IFtdXG5cbi8vIGNoZWNrIGlmIFtub2RlXSBpcyB0aGUgW250aF0gY2hpbGQgb2YgW2Fycl0gd2hlcmUgbnRoIGNhbiBhbHNvIGJlIGEgZm9ybXVsYVxuY29uc3QgbnRoID0gKG5vZGUsIGFyciwgbnRoKSA9PiB7XG5cbiAgaWYgKG50aCA9PT0gJ2V2ZW4nKSBudGggPSAnMm4nXG4gIGVsc2UgaWYgKG50aCA9PT0gJ29kZCcpIG50aCA9ICcybisxJ1xuXG4gIC8vIGNoZWNrIGZvciBldmFsIGNoYXJzXG4gIGlmICgvW15cXGRcXC1uKyovXSsvLnRlc3QobnRoKSkgcmV0dXJuIGZhbHNlXG5cbiAgbnRoID0gbnRoLnJlcGxhY2UoJ24nLCAnKm4nKVxuXG4gIC8vIGV2YWwgbnRoIHRvIGdldCB0aGUgaW5kZXhcbiAgZm9yICh2YXIgaSwgbiA9IDAsIG5sID0gYXJyLmxlbmd0aDsgbiA8IG5sOyArK24pIHtcbiAgICAvKiBlc2xpbnQgbm8tZXZhbDogb2ZmICovXG4gICAgaSA9IGV2YWwobnRoKVxuXG4gICAgaWYgKGkgPiBubCkgYnJlYWtcbiAgICBpZiAoYXJyW2kgLSAxXSA9PT0gbm9kZSkgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG5jb25zdCBsb3dlciA9IGEgPT4gYS50b0xvd2VyQ2FzZSgpXG5cbi8vIGNoZWNrcyBpZiBhIGFuZCBiIGFyZSBlcXVhbC4gSXMgaW5zZW5zaXRpdmUgd2hlbiBpIGlzIHRydWVcbmNvbnN0IGVxID0gKGEsIGIsIGkpID0+IGkgPyBsb3dlcihhKSA9PT0gbG93ZXIoYikgOiBhID09PSBiXG5cbi8vIFtpXSAocHJlYm91bmQpIGlzIHRydWUgaWYgaW5zZW5zaXRpdmUgbWF0Y2hpbmcgaXMgcmVxdWlyZWRcbi8vIFthXSAocHJlYm91bmQpIGlzIHRoZSB2YWx1ZSB0aGUgYXR0ciBpcyBjb21wYXJlZCB0b1xuLy8gW2JdIChwYXNzZWQpICAgaXMgdGhlIHZhbHVlIG9mIHRoZSBhdHRyaWJ1dGVcbmNvbnN0IGF0dHJpYnV0ZU1hdGNoZXIgPSB7XG4gICc9JzogKGksIGEsIGIpID0+IGVxKGEsIGIsIGkpLFxuICAnfj0nOiAoaSwgYSwgYikgPT4gYi5zcGxpdChyZWdleC5kZWxpbWl0ZXIpLmZpbHRlcihlbCA9PiBlcShlbCwgYSwgaSkpLmxlbmd0aCA+IDAsXG4gICd8PSc6IChpLCBhLCBiKSA9PiBlcShiLnNwbGl0KHJlZ2V4LmRlbGltaXRlcilbMF0sIGEsIGkpLFxuICAnXj0nOiAoaSwgYSwgYikgPT4gaSA/IGxvd2VyKGIpLnN0YXJ0c1dpdGgobG93ZXIoYSkpIDogYi5zdGFydHNXaXRoKGEpLFxuICAnJD0nOiAoaSwgYSwgYikgPT4gaSA/IGxvd2VyKGIpLmVuZHNXaXRoKGxvd2VyKGEpKSA6IGIuZW5kc1dpdGgoYSksXG4gICcqPSc6IChpLCBhLCBiKSA9PiBpID8gbG93ZXIoYikuaW5jbHVkZXMobG93ZXIoYSkpIDogYi5pbmNsdWRlcyhhKSxcbiAgJyonOiAoaSwgYSwgYikgPT4gYiAhPSBudWxsXG59XG5cbmNvbnN0IGdldEF0dHJpYnV0ZVZhbHVlID0gKHByZWZpeCwgbmFtZSwgbm9kZSkgPT4ge1xuICBpZiAoIXByZWZpeCB8fCBwcmVmaXggPT09ICcqJykge1xuICAgIHJldHVybiBub2RlLmdldEF0dHJpYnV0ZShuYW1lKVxuICB9XG4gIHJldHVybiBub2RlLmdldEF0dHJpYnV0ZShwcmVmaXggKyAnOicgKyBuYW1lKVxufVxuXG4vLyBbYV0gKHByZWJvdW5kKSBbYV1yZ3VtZW50IG9mIHRoZSBwc2V1ZG8gc2VsZWN0b3Jcbi8vIFtuXSAocGFzc2VkKSAgIFtuXW9kZVxuLy8gW3NdIChwYXNzZWQpICAgW3NdY29wZSAtIHRoZSBlbGVtZW50IHRoaXMgcXVlcnkgaXMgc2NvcGVkIHRvXG5jb25zdCBwc2V1ZG9NYXRjaGVyID0ge1xuICAnZmlyc3QtY2hpbGQnOiAoYSwgbikgPT4gbi5wYXJlbnROb2RlICYmIG4ucGFyZW50Tm9kZS5maXJzdENoaWxkID09PSBuLFxuICAnbGFzdC1jaGlsZCc6IChhLCBuKSA9PiBuLnBhcmVudE5vZGUgJiYgbi5wYXJlbnROb2RlLmxhc3RDaGlsZCA9PT0gbixcbiAgJ250aC1jaGlsZCc6IChhLCBuKSA9PiBuLnBhcmVudE5vZGUgJiYgbnRoKG4sIG4ucGFyZW50Tm9kZS5jaGlsZE5vZGVzLCBhKSxcbiAgJ250aC1sYXN0LWNoaWxkJzogKGEsIG4pID0+IG4ucGFyZW50Tm9kZSAmJiBudGgobiwgbi5wYXJlbnROb2RlLmNoaWxkTm9kZXMuc2xpY2UoKS5yZXZlcnNlKCksIGEpLFxuICAnZmlyc3Qtb2YtdHlwZSc6IChhLCBuKSA9PiBuLnBhcmVudE5vZGUgJiYgbi5wYXJlbnROb2RlLmNoaWxkTm9kZXMuZmlsdGVyKGVsID0+IGVsLm5vZGVOYW1lID09PSBuLm5vZGVOYW1lKVswXSA9PT0gbixcbiAgJ2xhc3Qtb2YtdHlwZSc6IChhLCBuKSA9PiBuLnBhcmVudE5vZGUgJiYgbi5wYXJlbnROb2RlLmNoaWxkTm9kZXMuZmlsdGVyKGVsID0+IGVsLm5vZGVOYW1lID09PSBuLm5vZGVOYW1lKS5wb3AoKSA9PT0gbixcbiAgJ250aC1vZi10eXBlJzogKGEsIG4pID0+IG4ucGFyZW50Tm9kZSAmJiBudGgobiwgbi5wYXJlbnROb2RlLmNoaWxkTm9kZXMuZmlsdGVyKGVsID0+IGVsLm5vZGVOYW1lID09PSBuLm5vZGVOYW1lKSwgYSksXG4gICdudGgtbGFzdC1vZi10eXBlJzogKGEsIG4pID0+IG4ucGFyZW50Tm9kZSAmJiBudGgobiwgbi5wYXJlbnROb2RlLmNoaWxkTm9kZXMuZmlsdGVyKGVsID0+IGVsLm5vZGVOYW1lID09PSBuLm5vZGVOYW1lKS5yZXZlcnNlKCksIGEpLFxuICAnb25seS1jaGlsZCc6IChhLCBuKSA9PiBuLnBhcmVudE5vZGUgJiYgbi5wYXJlbnROb2RlLmNoaWxkTm9kZXMubGVuZ3RoID09PSAxLFxuICAnb25seS1vZi10eXBlJzogKGEsIG4pID0+IG4ucGFyZW50Tm9kZSAmJiBuLnBhcmVudE5vZGUuY2hpbGROb2Rlcy5maWx0ZXIoZWwgPT4gZWwubm9kZU5hbWUgPT09IG4ubm9kZU5hbWUpLmxlbmd0aCA9PT0gMSxcbiAgcm9vdDogKGEsIG4pID0+IG4ub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgPT09IG4sXG4gIG5vdDogKGEsIG4sIHMpID0+ICEobmV3IENzc1F1ZXJ5KGEpKS5tYXRjaGVzKG4sIHMpLFxuICBtYXRjaGVzOiAoYSwgbiwgcykgPT4gKG5ldyBDc3NRdWVyeShhKSkubWF0Y2hlcyhuLCBzKSxcbiAgc2NvcGU6IChhLCBuLCBzKSA9PiBuID09PSBzXG59XG5cbmNsYXNzIENzc1F1ZXJ5Tm9kZSB7XG4gIGNvbnN0cnVjdG9yIChub2RlKSB7XG4gICAgdGhpcy50YWcgPSAnJ1xuICAgIHRoaXMuaWQgPSAnJ1xuICAgIHRoaXMuY2xhc3NMaXN0ID0gW11cbiAgICB0aGlzLmF0dHJzID0gW11cbiAgICB0aGlzLnBzZXVkbyA9IFtdXG5cbiAgICAvLyBtYXRjaCB0aGUgdGFnIG5hbWVcbiAgICB2YXIgbWF0Y2hlcyA9IG5vZGUubWF0Y2goL15bXFx3LV0rfF5cXCovKVxuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICB0aGlzLnRhZyA9IG1hdGNoZXNbMF1cbiAgICAgIG5vZGUgPSBub2RlLnNsaWNlKHRoaXMudGFnLmxlbmd0aClcbiAgICB9XG5cbiAgICAvLyBtYXRjaCBwc2V1ZG8gY2xhc3Nlc1xuICAgIHdoaWxlICgobWF0Y2hlcyA9IC86KFtcXHctXSspKD86XFwoKC4rKVxcKSk/L2cuZXhlYyhub2RlKSkpIHtcbiAgICAgIHRoaXMucHNldWRvLnB1c2gocHNldWRvTWF0Y2hlclttYXRjaGVzWzFdXS5iaW5kKHRoaXMsIHJlbW92ZVF1b3RlcyhtYXRjaGVzWzJdIHx8ICcnKSkpXG4gICAgICBub2RlID0gbm9kZS5zbGljZSgwLCBtYXRjaGVzLmluZGV4KSArIG5vZGUuc2xpY2UobWF0Y2hlcy5pbmRleCArIG1hdGNoZXNbMF0ubGVuZ3RoKVxuICAgIH1cblxuICAgIC8vIG1hdGNoIHRoZSBpZFxuICAgIG1hdGNoZXMgPSBub2RlLm1hdGNoKC8jKFtcXHctXSspLylcbiAgICBpZiAobWF0Y2hlcykge1xuICAgICAgdGhpcy5pZCA9IG1hdGNoZXNbMV1cbiAgICAgIG5vZGUgPSBub2RlLnNsaWNlKDAsIG1hdGNoZXMuaW5kZXgpICsgbm9kZS5zbGljZShtYXRjaGVzLmluZGV4ICsgbWF0Y2hlc1swXS5sZW5ndGgpXG4gICAgfVxuXG4gICAgLy8gbWF0Y2ggY2xhc3Nlc1xuICAgIHdoaWxlICgobWF0Y2hlcyA9IC9cXC4oW1xcdy1dKykvZy5leGVjKG5vZGUpKSkge1xuICAgICAgdGhpcy5jbGFzc0xpc3QucHVzaChtYXRjaGVzWzFdKVxuICAgICAgbm9kZSA9IG5vZGUuc2xpY2UoMCwgbWF0Y2hlcy5pbmRleCkgKyBub2RlLnNsaWNlKG1hdGNoZXMuaW5kZXggKyBtYXRjaGVzWzBdLmxlbmd0aClcbiAgICB9XG5cbiAgICAvLyBtYXRjaCBhdHRyaWJ1dGVzXG4gICAgd2hpbGUgKChtYXRjaGVzID0gL1xcWyhbXFx3LSpdK1xcfCk/KFtcXHctXSspKChbPV5+JHwqXSspKC4rPykoICtbaUldKT8pP1xcXS9nLmV4ZWMobm9kZSkpKSB7XG4gICAgICBjb25zdCBwcmVmaXggPSBtYXRjaGVzWzFdID8gbWF0Y2hlc1sxXS5zcGxpdCgnfCcpWzBdIDogbnVsbFxuICAgICAgdGhpcy5hdHRycy5wdXNoKHtcbiAgICAgICAgbmFtZTogbWF0Y2hlc1syXSxcbiAgICAgICAgZ2V0VmFsdWU6IGdldEF0dHJpYnV0ZVZhbHVlLmJpbmQodGhpcywgcHJlZml4LCBtYXRjaGVzWzJdKSxcbiAgICAgICAgbWF0Y2hlcjogYXR0cmlidXRlTWF0Y2hlclttYXRjaGVzWzRdIHx8ICcqJ10uYmluZChcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgICEhbWF0Y2hlc1s2XSwgLy8gY2FzZSBpbnNlbnNpdGl2ZSB5ZXMvbm9cbiAgICAgICAgICByZW1vdmVRdW90ZXMoKG1hdGNoZXNbNV0gfHwgJycpLnRyaW0oKSkgLy8gYXR0cmlidXRlIHZhbHVlXG4gICAgICAgIClcbiAgICAgIH0pXG4gICAgICBub2RlID0gbm9kZS5zbGljZSgwLCBtYXRjaGVzLmluZGV4KSArIG5vZGUuc2xpY2UobWF0Y2hlcy5pbmRleCArIG1hdGNoZXNbMF0ubGVuZ3RoKVxuICAgIH1cbiAgfVxuXG4gIG1hdGNoZXMgKG5vZGUsIHNjb3BlKSB7XG4gICAgdmFyIGlcblxuICAgIGlmIChub2RlLm5vZGVUeXBlICE9PSAxKSByZXR1cm4gZmFsc2VcblxuICAgIC8vIEFsd2F5cyB0aGlzIGV4dHJhIGNvZGUgZm9yIGh0bWwgLS4tXG4gICAgaWYgKG5vZGUubmFtZXNwYWNlVVJJID09PSBodG1sKSB7XG4gICAgICB0aGlzLnRhZyA9IHRoaXMudGFnLnRvVXBwZXJDYXNlKClcbiAgICB9XG5cbiAgICBpZiAodGhpcy50YWcgJiYgdGhpcy50YWcgIT09IG5vZGUubm9kZU5hbWUgJiYgdGhpcy50YWcgIT09ICcqJykgeyByZXR1cm4gZmFsc2UgfVxuXG4gICAgaWYgKHRoaXMuaWQgJiYgdGhpcy5pZCAhPT0gbm9kZS5pZCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgdmFyIGNsYXNzTGlzdCA9IChub2RlLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSB8fCAnJykuc3BsaXQocmVnZXguZGVsaW1pdGVyKS5maWx0ZXIoZWwgPT4gISFlbC5sZW5ndGgpXG4gICAgaWYgKHRoaXMuY2xhc3NMaXN0LmZpbHRlcihjbGFzc05hbWUgPT4gY2xhc3NMaXN0LmluZGV4T2YoY2xhc3NOYW1lKSA8IDApLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgZm9yIChpID0gdGhpcy5hdHRycy5sZW5ndGg7IGktLTspIHtcbiAgICAgIHZhciBhdHRyVmFsdWUgPSB0aGlzLmF0dHJzW2ldLmdldFZhbHVlKG5vZGUpXG4gICAgICBpZiAoYXR0clZhbHVlID09PSBudWxsIHx8ICF0aGlzLmF0dHJzW2ldLm1hdGNoZXIoYXR0clZhbHVlKSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGkgPSB0aGlzLnBzZXVkby5sZW5ndGg7IGktLTspIHtcbiAgICAgIGlmICghdGhpcy5wc2V1ZG9baV0obm9kZSwgc2NvcGUpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlXG4gIH1cblxufVxuIiwiaW1wb3J0IHsgU1ZHUG9pbnQgfSBmcm9tICcuLi9kb20vc3ZnL1NWR1BvaW50LmpzJ1xuXG5leHBvcnQgY2xhc3MgUG9pbnQge1xuICAvLyBJbml0aWFsaXplXG4gIGNvbnN0cnVjdG9yICh4LCB5KSB7XG4gICAgY29uc3QgYmFzZSA9IHsgeDogMCwgeTogMCB9XG5cbiAgICAvLyBlbnN1cmUgc291cmNlIGFzIG9iamVjdFxuICAgIGNvbnN0IHNvdXJjZSA9IEFycmF5LmlzQXJyYXkoeClcbiAgICAgID8geyB4OiB4WzBdLCB5OiB4WzFdIH1cbiAgICAgIDogdHlwZW9mIHggPT09ICdvYmplY3QnXG4gICAgICAgID8geyB4OiB4LngsIHk6IHgueSB9XG4gICAgICAgIDogeCAhPSBudWxsXG4gICAgICAgICAgPyB7IHg6IHgsIHk6ICh5ICE9IG51bGwgPyB5IDogeCkgfVxuICAgICAgICAgIDogYmFzZSAvLyBJZiB5IGhhcyBubyB2YWx1ZSwgdGhlbiB4IGlzIHVzZWQgaGFzIGl0cyB2YWx1ZVxuXG4gICAgLy8gbWVyZ2Ugc291cmNlXG4gICAgdGhpcy54ID0gc291cmNlLnhcbiAgICB0aGlzLnkgPSBzb3VyY2UueVxuICB9XG5cbiAgYWJzICgpIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMuYWJzUXVhZCgpKVxuICB9XG5cbiAgYWJzUXVhZCAoKSB7XG4gICAgcmV0dXJuIHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueVxuICB9XG5cbiAgYWRkICh4LCB5KSB7XG4gICAgY29uc3QgcCA9IG5ldyBQb2ludCh4LCB5KVxuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54ICsgcC54LCB0aGlzLnkgKyBwLnkpXG4gIH1cblxuICBhbmdsZVRvIChwKSB7XG4gICAgbGV0IHNpZ24gPSBNYXRoLnNpZ24odGhpcy54ICogcC55IC0gdGhpcy55ICogcC54KVxuICAgIHNpZ24gPSBzaWduIHx8IDFcbiAgICByZXR1cm4gc2lnbiAqIE1hdGguYWNvcyhNYXRoLnJvdW5kKCh0aGlzLmRvdChwKSAvICh0aGlzLmFicygpICogcC5hYnMoKSkpICogMTAwMDAwMCkgLyAxMDAwMDAwKVxuICB9XG5cbiAgLy8gQ2xvbmUgcG9pbnRcbiAgY2xvbmUgKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcylcbiAgfVxuXG4gIGNsb3NlVG8gKHAsIGV0YSA9IDAuMDAwMDEpIHtcbiAgICByZXR1cm4gdGhpcy5lcXVhbHMocCkgfHwgKE1hdGguYWJzKHRoaXMueCAtIHAueCkgPCBldGEgJiYgTWF0aC5hYnModGhpcy55IC0gcC55KSA8IGV0YSlcbiAgfVxuXG4gIGRpdiAoZmFjdG9yKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggLyBmYWN0b3IsIHRoaXMueSAvIGZhY3RvcilcbiAgfVxuXG4gIGRvdCAocCkge1xuICAgIHJldHVybiB0aGlzLnggKiBwLnggKyB0aGlzLnkgKiBwLnlcbiAgfVxuXG4gIGVxdWFscyAocCkge1xuICAgIHJldHVybiB0aGlzLnggPT09IHAueCAmJiB0aGlzLnkgPT09IHAueVxuICB9XG5cbiAgbXVsIChmYWN0b3IpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCAqIGZhY3RvciwgdGhpcy55ICogZmFjdG9yKVxuICB9XG5cbiAgLy8gQ29udmVydCB0byBuYXRpdmUgU1ZHUG9pbnRcbiAgbmF0aXZlICgpIHtcbiAgICAvLyBjcmVhdGUgbmV3IHBvaW50XG4gICAgY29uc3QgcG9pbnQgPSBuZXcgU1ZHUG9pbnQoKVxuXG4gICAgLy8gdXBkYXRlIHdpdGggY3VycmVudCB2YWx1ZXNcbiAgICBwb2ludC54ID0gdGhpcy54XG4gICAgcG9pbnQueSA9IHRoaXMueVxuXG4gICAgcmV0dXJuIHBvaW50XG4gIH1cblxuICBub3JtYWwgKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy55LCAtdGhpcy54KVxuICB9XG5cbiAgbm9ybWFsaXplICgpIHtcbiAgICBjb25zdCBhYnMgPSB0aGlzLmFicygpXG4gICAgaWYgKCFhYnMpIHRocm93IG5ldyBFcnJvcignQ2FuXFwndCBub3JtYWxpemUgdmVjdG9yIG9mIHplcm8gbGVuZ3RoJylcbiAgICByZXR1cm4gdGhpcy5kaXYoYWJzKVxuICB9XG5cbiAgcmVmbGVjdEF0IChwKSB7XG4gICAgcmV0dXJuIHAuYWRkKHAuc3ViKHRoaXMpKVxuICB9XG5cbiAgc3ViICh4LCB5KSB7XG4gICAgY29uc3QgcCA9IG5ldyBQb2ludCh4LCB5KVxuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54IC0gcC54LCB0aGlzLnkgLSBwLnkpXG4gIH1cblxuICB0b0FycmF5ICgpIHtcbiAgICByZXR1cm4gWyB0aGlzLngsIHRoaXMueSBdXG4gIH1cblxuICB0b1BhdGggKCkge1xuICAgIHJldHVybiBbICdNJywgdGhpcy54LCB0aGlzLnkgXS5qb2luKCcgJylcbiAgfVxuXG4gIC8vIHRyYW5zZm9ybSBwb2ludCB3aXRoIG1hdHJpeFxuICB0cmFuc2Zvcm0gKG1hdHJpeCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5uYXRpdmUoKS5tYXRyaXhUcmFuc2Zvcm0obWF0cml4KSlcbiAgfVxuXG4gIHRyYW5zZm9ybU8gKG1hdHJpeCkge1xuICAgIGNvbnN0IHsgeCwgeSB9ID0gdGhpcy5uYXRpdmUoKS5tYXRyaXhUcmFuc2Zvcm0obWF0cml4KVxuICAgIHRoaXMueCA9IHhcbiAgICB0aGlzLnkgPSB5XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTm9kZUZpbHRlciB9IGZyb20gJy4uL2RvbS9Ob2RlRmlsdGVyLmpzJ1xuXG5jb25zdCBzaG93VGhpc05vZGUgPSAod2hhdFRvU2hvdywgbm9kZSkgPT4ge1xuICBpZiAod2hhdFRvU2hvdyA9PT0gTm9kZUZpbHRlci5TSE9XX0FMTCkgcmV0dXJuIHRydWVcbiAgaWYgKHdoYXRUb1Nob3cgJiBOb2RlRmlsdGVyLlNIT1dfRUxFTUVOVCAmJiBub2RlLm5vZGVUeXBlID09PSBub2RlLkVMRU1FTlRfTk9ERSkgcmV0dXJuIHRydWVcbiAgaWYgKHdoYXRUb1Nob3cgJiBOb2RlRmlsdGVyLlNIT1dfVEVYVCAmJiBub2RlLm5vZGVUeXBlID09PSBub2RlLlRFWFRfTk9ERSkgcmV0dXJuIHRydWVcbiAgaWYgKHdoYXRUb1Nob3cgJiBOb2RlRmlsdGVyLlNIT1dfRU5USVRZX1JFRkVSRU5DRSAmJiBub2RlLm5vZGVUeXBlID09PSBub2RlLkVOVElUWV9SRUZFUkVOQ0VfTk9ERSkgcmV0dXJuIHRydWVcbiAgaWYgKHdoYXRUb1Nob3cgJiBOb2RlRmlsdGVyLlNIT1dfRU5USVRZICYmIG5vZGUubm9kZVR5cGUgPT09IG5vZGUuRU5USVRZX05PREUpIHJldHVybiB0cnVlXG4gIGlmICh3aGF0VG9TaG93ICYgTm9kZUZpbHRlci5TSE9XX1BST0NFU1NJTkdfSU5TVFJVQ1RJT04gJiYgbm9kZS5ub2RlVHlwZSA9PT0gbm9kZS5QUk9DRVNTSU5HX0lOU1RSVUNUSU9OX05PREUpIHJldHVybiB0cnVlXG4gIGlmICh3aGF0VG9TaG93ICYgTm9kZUZpbHRlci5TSE9XX0NPTU1FTlQgJiYgbm9kZS5ub2RlVHlwZSA9PT0gbm9kZS5DT01NRU5UX05PREUpIHJldHVybiB0cnVlXG4gIGlmICh3aGF0VG9TaG93ICYgTm9kZUZpbHRlci5TSE9XX0RPQ1VNRU5UICYmIG5vZGUubm9kZVR5cGUgPT09IG5vZGUuRE9DVU1FTlRfTk9ERSkgcmV0dXJuIHRydWVcbiAgaWYgKHdoYXRUb1Nob3cgJiBOb2RlRmlsdGVyLlNIT1dfRE9DVU1FTlRfVFlQRSAmJiBub2RlLm5vZGVUeXBlID09PSBub2RlLkRPQ1VNRU5UX1RZUEVfTk9ERSkgcmV0dXJuIHRydWVcbiAgaWYgKHdoYXRUb1Nob3cgJiBOb2RlRmlsdGVyLlNIT1dfRE9DVU1FTlRfRlJBR01FTlQgJiYgbm9kZS5ub2RlVHlwZSA9PT0gbm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFKSByZXR1cm4gdHJ1ZVxuICBpZiAod2hhdFRvU2hvdyAmIE5vZGVGaWx0ZXIuU0hPV19OT1RBVElPTiAmJiBub2RlLm5vZGVUeXBlID09PSBub2RlLk5PVEFUSU9OX05PREUpIHJldHVybiB0cnVlXG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgY2xhc3MgTm9kZUl0ZXJhdG9yIHtcbiAgY29uc3RydWN0b3IgKHJvb3QsIHdoYXRUb1Nob3cgPSBOb2RlRmlsdGVyLlNIT1dfQUxMLCBmaWx0ZXIgPSAoKSA9PiBOb2RlRmlsdGVyLkZJTFRFUl9BQ0NFUFQsIGluY2x1ZGVQYXJlbnQgPSB0cnVlKSB7XG4gICAgdGhpcy5yb290ID0gaW5jbHVkZVBhcmVudCA/IHsgY2hpbGROb2RlczogWyByb290IF0gfSA6IHJvb3RcbiAgICB0aGlzLndoYXRUb1Nob3cgPSB3aGF0VG9TaG93XG4gICAgdGhpcy5maWx0ZXIgPSBmaWx0ZXJcbiAgfVxuXG4gICogW1N5bWJvbC5pdGVyYXRvcl0gKCkge1xuICAgIGNvbnN0IG5vZGVzID0gdGhpcy5yb290LmNoaWxkTm9kZXNcblxuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xuICAgICAgaWYgKCFzaG93VGhpc05vZGUodGhpcy53aGF0VG9TaG93LCBub2RlKSkgY29udGludWVcblxuICAgICAgY29uc3QgZmlsdGVyUmV0ID0gdGhpcy5maWx0ZXIobm9kZSlcblxuICAgICAgaWYgKGZpbHRlclJldCA9PT0gTm9kZUZpbHRlci5GSUxURVJfUkVKRUNUKSBjb250aW51ZVxuICAgICAgaWYgKGZpbHRlclJldCA9PT0gTm9kZUZpbHRlci5GSUxURVJfQUNDRVBUKSB7XG4gICAgICAgIHlpZWxkIG5vZGVcbiAgICAgIH1cblxuICAgICAgeWllbGQgKiBuZXcgTm9kZUl0ZXJhdG9yKG5vZGUsIHRoaXMud2hhdFRvU2hvdywgdGhpcy5maWx0ZXIsIGZhbHNlKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzXG4gIH1cbn1cbiIsImltcG9ydCB7IEJveCwgTm9Cb3ggfSBmcm9tICcuLi9vdGhlci9Cb3guanMnXG5cbmV4cG9ydCBjbGFzcyBQb2ludENsb3VkIGV4dGVuZHMgQXJyYXkge1xuICBjb25zdHJ1Y3RvciAoLi4uYXJncykge1xuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMSAmJiB0eXBlb2YgYXJnc1swXSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHN1cGVyKGFyZ3Muc2hpZnQoKSlcbiAgICB9IGVsc2Uge1xuICAgICAgc3VwZXIoKVxuICAgIH1cblxuICAgIC8vIGV4Y2VwdCBtdWx0aXBsZSBwb2ludCBhcnJheXMgYXMgaW5wdXQgYW5kIG1lcmdlIHRoZW0gaW50byBvbmVcbiAgICBhcmdzLnJlZHVjZSgobGFzdCwgY3VycikgPT4ge1xuICAgICAgbGFzdC5wdXNoKC4uLmN1cnIpXG4gICAgICByZXR1cm4gdGhpc1xuICAgIH0sIHRoaXMpXG4gIH1cblxuICBiYm94ICgpIHtcbiAgICBpZiAoIXRoaXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbmV3IE5vQm94KClcbiAgICB9XG5cbiAgICBsZXQgeE1pbiA9IEluZmluaXR5XG4gICAgbGV0IHhNYXggPSAtSW5maW5pdHlcbiAgICBsZXQgeU1pbiA9IEluZmluaXR5XG4gICAgbGV0IHlNYXggPSAtSW5maW5pdHlcblxuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbiAocCkge1xuICAgICAgeE1pbiA9IE1hdGgubWluKHhNaW4sIHAueClcbiAgICAgIHhNYXggPSBNYXRoLm1heCh4TWF4LCBwLngpXG4gICAgICB5TWluID0gTWF0aC5taW4oeU1pbiwgcC55KVxuICAgICAgeU1heCA9IE1hdGgubWF4KHlNYXgsIHAueSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIG5ldyBCb3goXG4gICAgICB4TWluLCB5TWluLFxuICAgICAgeE1heCAtIHhNaW4sXG4gICAgICB5TWF4IC0geU1pblxuICAgIClcbiAgfVxuXG4gIG1lcmdlIChjbG91ZCkge1xuICAgIHJldHVybiBuZXcgUG9pbnRDbG91ZCh0aGlzLCBjbG91ZClcbiAgfVxuXG4gIHRyYW5zZm9ybSAobSkge1xuICAgIHJldHVybiBuZXcgUG9pbnRDbG91ZCh0aGlzLm1hcCgocCkgPT4gcC50cmFuc2Zvcm0obSkpKVxuICB9XG5cbn1cbiIsImltcG9ydCAqIGFzIHBhdGhVdGlscyBmcm9tICcuL3BhdGhVdGlscy5qcydcbmltcG9ydCAqIGFzIHJlZ2V4IGZyb20gJy4vcmVnZXguanMnXG5pbXBvcnQgKiBhcyB0ZXh0VXRpbHMgZnJvbSAnLi90ZXh0VXRpbHMuanMnXG5pbXBvcnQgeyBOb0JveCB9IGZyb20gJy4uL290aGVyL0JveC5qcydcbmltcG9ydCB7IE5vZGVJdGVyYXRvciB9IGZyb20gJy4vTm9kZUl0ZXJhdG9yLmpzJ1xuaW1wb3J0IHsgTm9kZUZpbHRlciB9IGZyb20gJy4uL2RvbS9Ob2RlRmlsdGVyLmpzJ1xuXG5jb25zdCBhcHBseVRyYW5zZm9ybWF0aW9uID0gKHNlZ21lbnRzLCBub2RlLCBhcHBseVRyYW5zZm9ybWF0aW9ucykgPT4ge1xuICBpZiAobm9kZS5tYXRyaXhpZnkgJiYgYXBwbHlUcmFuc2Zvcm1hdGlvbnMpIHtcbiAgICByZXR1cm4gc2VnbWVudHMudHJhbnNmb3JtKG5vZGUubWF0cml4aWZ5KCkpXG4gIH1cbiAgcmV0dXJuIHNlZ21lbnRzXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZWdtZW50cyA9IChub2RlLCBhcHBseVRyYW5zZm9ybWF0aW9ucywgcmJveCA9IGZhbHNlKSA9PiB7XG4gIGNvbnN0IHNlZ21lbnRzID0gZ2V0UGF0aFNlZ21lbnRzKG5vZGUsIHJib3gpXG4gIHJldHVybiBhcHBseVRyYW5zZm9ybWF0aW9uKHNlZ21lbnRzLCBub2RlLCBhcHBseVRyYW5zZm9ybWF0aW9ucylcbn1cblxuY29uc3QgZ2V0UGF0aFNlZ21lbnRzID0gKG5vZGUsIHJib3gpID0+IHtcbiAgaWYgKG5vZGUubm9kZVR5cGUgIT09IDEpIHJldHVybiBuZXcgcGF0aFV0aWxzLlBhdGhTZWdtZW50QXJyYXkoKVxuXG4gIHN3aXRjaCAobm9kZS5ub2RlTmFtZSkge1xuICBjYXNlICdyZWN0JzpcbiAgY2FzZSAnaW1hZ2UnOlxuICBjYXNlICdwYXR0ZXJuJzpcbiAgY2FzZSAnbWFzayc6XG4gIGNhc2UgJ2ZvcmVpZ25PYmplY3QnOlxuICAgIC8vIENyZWF0ZSBQYXRoIGZyb20gcmVjdCBhbmQgY3JlYXRlIFBvaW50Q2xvdWQgZnJvbSBQYXRoXG4gICAgcmV0dXJuIHBhdGhVdGlscy5nZXRQYXRoU2VnbWVudHMocGF0aFV0aWxzLnBhdGhGcm9tLnJlY3Qobm9kZSkpXG4gIGNhc2UgJ3N2Zyc6XG4gIGNhc2UgJ3N5bWJvbCc6XG4gICAgLy8gcmV0dXJuIHBhdGhVdGlscy5nZXRQYXRoU2VnbWVudHMocGF0aFV0aWxzLnBhdGhGcm9tLnJlY3Qobm9kZSkpXG4gICAgaWYgKHJib3gpIHtcbiAgICAgIHJldHVybiBwYXRoVXRpbHMuZ2V0UGF0aFNlZ21lbnRzKHBhdGhVdGlscy5wYXRoRnJvbS5yZWN0KG5vZGUpKVxuICAgIH1cbiAgLy8gQVRURU5USU9OOiBGQUxMIFRIUk9VR0hcbiAgLy8gQmVjYXVzZSBub3JtYWwgYmJveCBpcyBjYWxjdWxhdGVkIGJ5IHRoZSBjb250ZW50IG9mIHRoZSBlbGVtZW50IGFuZCBub3QgaXRzIHdpZHRoIGFuZCBoZWlnaHRcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gIGNhc2UgJ2cnOlxuICBjYXNlICdjbGlwUGF0aCc6XG4gIGNhc2UgJ2EnOlxuICBjYXNlICdtYXJrZXInOlxuICAgIC8vIEl0ZXJhdGUgdHJvdWdoIGFsbCBjaGlsZHJlbiBhbmQgZ2V0IHRoZSBwb2ludCBjbG91ZCBvZiBlYWNoXG4gICAgLy8gVGhlbiB0cmFuc2Zvcm0gaXQgd2l0aCB2aWV3Ym94IG1hdHJpeCBpZiBuZWVkZWRcbiAgICByZXR1cm4gbm9kZS5jaGlsZE5vZGVzLnJlZHVjZSgoc2VnbWVudHMsIGNoaWxkKSA9PiB7XG4gICAgICBpZiAoIWNoaWxkLm1hdHJpeGlmeSkgcmV0dXJuIHNlZ21lbnRzXG4gICAgICByZXR1cm4gc2VnbWVudHMubWVyZ2UoZ2V0U2VnbWVudHMoY2hpbGQsIHRydWUpLnRyYW5zZm9ybShjaGlsZC5nZW5lcmF0ZVZpZXdCb3hNYXRyaXgoKSkpXG4gICAgfSwgbmV3IHBhdGhVdGlscy5QYXRoU2VnbWVudEFycmF5KCkpXG4gIGNhc2UgJ2NpcmNsZSc6XG4gICAgcmV0dXJuIHBhdGhVdGlscy5nZXRQYXRoU2VnbWVudHMocGF0aFV0aWxzLnBhdGhGcm9tLmNpcmNsZShub2RlKSlcbiAgY2FzZSAnZWxsaXBzZSc6XG4gICAgcmV0dXJuIHBhdGhVdGlscy5nZXRQYXRoU2VnbWVudHMocGF0aFV0aWxzLnBhdGhGcm9tLmVsbGlwc2Uobm9kZSkpXG4gIGNhc2UgJ2xpbmUnOlxuICAgIHJldHVybiBwYXRoVXRpbHMuZ2V0UGF0aFNlZ21lbnRzKHBhdGhVdGlscy5wYXRoRnJvbS5saW5lKG5vZGUpKVxuICBjYXNlICdwb2x5bGluZSc6XG4gIGNhc2UgJ3BvbHlnb24nOlxuICAgIHJldHVybiBwYXRoVXRpbHMuZ2V0UGF0aFNlZ21lbnRzKHBhdGhVdGlscy5wYXRoRnJvbS5wb2x5bGluZShub2RlKSlcbiAgY2FzZSAncGF0aCc6XG4gIGNhc2UgJ2dseXBoJzpcbiAgY2FzZSAnbWlzc2luZy1nbHlwaCc6XG4gICAgcmV0dXJuIHBhdGhVdGlscy5nZXRQYXRoU2VnbWVudHMobm9kZS5nZXRBdHRyaWJ1dGUoJ2QnKSlcbiAgY2FzZSAndXNlJzoge1xuICAgIC8vIEdldCByZWZlcmVuY2UgZnJvbSBlbGVtZW50XG4gICAgY29uc3QgcmVmID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSB8fCBub2RlLmdldEF0dHJpYnV0ZSgneGxpbms6aHJlZicpXG4gICAgLy8gR2V0IHRoZSBhY3R1YWwgcmVmZXJlbmNlZCBOb2RlXG4gICAgY29uc3QgcmVmTm9kZSA9IG5vZGUuZ2V0Um9vdE5vZGUoKS5xdWVyeVNlbGVjdG9yKHJlZilcbiAgICAvLyBHZXQgdGhlIEJCb3ggb2YgdGhlIHJlZmVyZW5jZWQgZWxlbWVudCBhbmQgYXBwbHkgdGhlIHZpZXdib3ggb2YgPHVzZT5cbiAgICAvLyBUT0RPOiBEbyB3ZSBuZWVkIHRvIGFwcGx5IHRoZSB0cmFuc2Zvcm1hdGlvbnMgb2YgdGhlIGVsZW1lbnQ/XG4gICAgLy8gQ2hlY2sgYmJveCBvZiB0cmFuc2Zvcm1lZCBlbGVtZW50IHdoaWNoIGlzIHJldXNlZCB3aXRoIDx1c2U+XG4gICAgcmV0dXJuIGdldFNlZ21lbnRzKHJlZk5vZGUpLnRyYW5zZm9ybShub2RlLmdlbmVyYXRlVmlld0JveE1hdHJpeCgpKVxuICB9XG4gIGNhc2UgJ3RzcGFuJzpcbiAgY2FzZSAndGV4dCc6XG4gIGNhc2UgJ2FsdEdseXBoJzoge1xuICAgIGNvbnN0IGJveCA9IGdldFRleHRCQm94KG5vZGUpXG5cbiAgICBpZiAoYm94IGluc3RhbmNlb2YgTm9Cb3gpIHtcbiAgICAgIHJldHVybiBuZXcgcGF0aFV0aWxzLlBhdGhTZWdtZW50QXJyYXkoKVxuICAgIH1cblxuICAgIHJldHVybiBwYXRoVXRpbHMuZ2V0UGF0aFNlZ21lbnRzKHBhdGhVdGlscy5wYXRoRnJvbS5ib3goYm94KSlcbiAgfVxuICBkZWZhdWx0OlxuICAgIHJldHVybiBuZXcgcGF0aFV0aWxzLlBhdGhTZWdtZW50QXJyYXkoKVxuICB9XG59XG5cbmNvbnN0IGdldFRleHRCQm94ID0gKG5vZGUpID0+IHtcbiAgY29uc3QgdGV4dFJvb3QgPSBmaW5kVGV4dFJvb3Qobm9kZSlcbiAgY29uc3QgYm94ZXMgPSBnZXRUZXh0QkJveGVzKG5vZGUsIHRleHRSb290KVxuICByZXR1cm4gYm94ZXMuZmlsdGVyKGlzTm90RW1wdHlCb3gpLnJlZHVjZSgobGFzdCwgY3VycikgPT4gbGFzdC5tZXJnZShjdXJyKSwgbmV3IE5vQm94KCkpXG59XG5cbmNvbnN0IGZpbmRUZXh0Um9vdCA9IChub2RlKSA9PiB7XG4gIHdoaWxlIChub2RlLnBhcmVudE5vZGUpIHtcbiAgICBpZiAoKG5vZGUubm9kZU5hbWUgPT09ICd0ZXh0JyAmJiBub2RlLnBhcmVudE5vZGUubm9kZU5hbWUgPT09ICd0ZXh0JylcbiAgICB8fCAoKG5vZGUubm9kZU5hbWUgPT09ICd0c3BhbicgfHwgbm9kZS5ub2RlTmFtZSA9PT0gJ3RleHRQYXRoJykgJiYgWyAndHNwYW4nLCAndGV4dCcsICd0ZXh0UGF0aCcgXS5pbmNsdWRlcyhub2RlLnBhcmVudE5vZGUubm9kZU5hbWUpKSkge1xuICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZVxuICAgIH0gZWxzZSB7XG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBub2RlXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gdGFrZXMgYSBub2RlIG9mIHdoaWNoIHRoZSBiYm94IG5lZWRzIHRvIGJlIGNhbGN1bGF0ZWRcbi8vIEluIG9yZGVyIHRvIHBvc2l0aW9uIHRoZSBib3ggY29ycmVjdGx5LCB3ZSBuZWVkIHRvIGtub3cgd2VyZSB0aGUgcGFyZW50IGFuZCB3ZXJlIHRoZSBzaWJsaW5ncyAqYmVmb3JlKiBvdXIgbm9kZSBhcmVcbi8vIFRoYXRzIHdoeSBhIHRleHRSb290IGlzIHBhc3NlZCB3aGljaCBpcyB0aGUgbW9zdCBvdXRlciB0ZXh0RWxlbWVudCBuZWVkZWQgdG8gY2FsY3VsYXRlIGFsbCBib3hlc1xuLy8gV2hlbiB0aGUgaXRlcmF0b3IgaGl0cyB0aGUgZWxlbWVudCB3ZSBuZWVkIHRoZSBiYm94IG9mLCBpdCBpcyB0ZXJtaW5hdGVkIGFuZCB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBhZ2FpblxuLy8gb25seSBmb3IgdGhlIHN1YnN0cmVlIG9mIG91ciBub2RlIGFuZCB3aXRob3V0IHRleHRSb29yIGJ1dCBpbnN0ZWFkIHBvcywgZHggYW5kIGR5IGFyZSBrbm93blxuY29uc3QgZ2V0VGV4dEJCb3hlcyA9IGZ1bmN0aW9uICh0YXJnZXQsIHRleHRSb290ID0gdGFyZ2V0LCBwb3MgPSB7IHg6IDAsIHk6IDAgfSwgZHggPSBbIDAgXSwgZHkgPSBbIDAgXSwgYm94ZXMgPSBbXSkge1xuXG4gIC8vIENyZWF0ZSBOb2RlSXRlcmF0b3IuIE9ubHkgc2hvdyBlbGVtbnRzIGFuZCB0ZXh0IGFuZCBza2lwIGRlc2NyaXB0aXZlIGVsZW1lbnRzXG4gIC8vIFRPRE86IG1ha2UgYW4gaW5zdGFuY2VvZiBjaGVjayBmb3IgRGVzY3JpcHRpdmVFbGVtZW50IGluc3RlYWQgb2YgdGVzdGluZyBvbmUgYnkgb25lXG4gIC8vIE9ubHkgdGl0bGUgaXMgc2tpcHBlZCBhdG1cbiAgY29uc3QgaXRlciA9IG5ldyBOb2RlSXRlcmF0b3IodGV4dFJvb3QsIE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5UIHwgTm9kZUZpbHRlci5TSE9XX1RFWFQsIChub2RlKSA9PiB7XG4gICAgaWYgKG5vZGUubm9kZU5hbWUgPT09ICd0aXRsZScpIHJldHVybiBOb2RlRmlsdGVyLkZJTFRFUl9JR05PUkVcbiAgICByZXR1cm4gTm9kZUZpbHRlci5GSUxURVJfQUNDRVBUXG4gIH0pXG5cbiAgLy8gSXRlcmF0ZSB0cm91Z2ggYWxsIG5vZGVzIHRvcCB0byBib3R0b20sIGxlZnQgdG8gcmlnaHRcbiAgZm9yIChjb25zdCBub2RlIG9mIGl0ZXIpIHtcblxuICAgIC8vIElmIHdlIGhpdCBvdXIgdGFyZ2V0LCB3ZSBnYXRoZXJlZCBhbGwgcG9zaXRpb25hbCBpbmZvcm1hdGlvbiB3ZSBuZWVkIHRvIG1vdmUgdGhlIGJib3ggdG8gdGhlIGNvcnJlY3Qgc3BvdFxuICAgIGlmIChub2RlID09PSB0YXJnZXQgJiYgbm9kZSAhPT0gdGV4dFJvb3QpIHtcbiAgICAgIHJldHVybiBnZXRUZXh0QkJveGVzKG5vZGUsIG5vZGUsIHBvcywgZHgsIGR5KVxuICAgIH1cblxuICAgIC8vIFRyYXZlcnNlIHRyb3VnaCB0aGlzIG5vZGUgdXBkYXRpbmcgcG9zaXRpb25zIGFuZCBhZGQgYm94ZXNcbiAgICBnZXRQb3NpdGlvbkRldGFpbHNGb3Iobm9kZSwgcG9zLCBkeCwgZHksIGJveGVzKVxuICB9XG5cbiAgcmV0dXJuIGJveGVzXG59XG5cbmNvbnN0IGlzTm90RW1wdHlCb3ggPSBib3ggPT4gYm94LnggIT09IDAgfHwgYm94LnkgIT09IDAgfHwgYm94LndpZHRoICE9PSAwIHx8IGJveC5oZWlnaHQgIT09IDBcblxuLy8gVGhpcyBmdW5jdGlvbiBlaXRoZXIgdXBkYXRlcyBwb3MsIGR4IGFuZCBkeSAod2hlbiBpdHMgYW4gZWxlbWVudCkgb3IgY2FsY3VsYXRlcyB0aGUgYm94ZXMgZm9yIHRleHQgd2l0aCB0aGUgcGFzc2VkIGFyZ3VtZW50c1xuLy8gQWxsIGFyZ3VtZW50cyBhcmUgcGFzc2VkIGJ5IHJlZmVyZW5jZSBzbyBkb250IG92ZXJ3cml0ZSB0aGVtICh0cmVhdCB0aGVtIGFzIGNvbnN0ISlcbi8vIFRPRE86IEJyZWFrIHRoaXMgaW50byB0d28gZnVuY3Rpb25zP1xuY29uc3QgZ2V0UG9zaXRpb25EZXRhaWxzRm9yID0gKG5vZGUsIHBvcywgZHgsIGR5LCBib3hlcykgPT4ge1xuICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gbm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICBjb25zdCB4ID0gcGFyc2VGbG9hdChub2RlLmdldEF0dHJpYnV0ZSgneCcpKVxuICAgIGNvbnN0IHkgPSBwYXJzZUZsb2F0KG5vZGUuZ2V0QXR0cmlidXRlKCd5JykpXG5cbiAgICBwb3MueCA9IGlzTmFOKHgpID8gcG9zLnggOiB4XG4gICAgcG9zLnkgPSBpc05hTih5KSA/IHBvcy55IDogeVxuXG4gICAgY29uc3QgZHgwID0gKG5vZGUuZ2V0QXR0cmlidXRlKCdkeCcpIHx8ICcnKS5zcGxpdChyZWdleC5kZWxpbWl0ZXIpLmZpbHRlcihudW0gPT4gbnVtICE9PSAnJykubWFwKHBhcnNlRmxvYXQpXG4gICAgY29uc3QgZHkwID0gKG5vZGUuZ2V0QXR0cmlidXRlKCdkeScpIHx8ICcnKS5zcGxpdChyZWdleC5kZWxpbWl0ZXIpLmZpbHRlcihudW0gPT4gbnVtICE9PSAnJykubWFwKHBhcnNlRmxvYXQpXG5cbiAgICAvLyBUT0RPOiBldmVudHVhbGx5IHJlcGxhY2Ugb25seSBhcyBtdWNoIHZhbHVlcyBhcyB3ZSBoYXZlIHRleHQgY2hhcnMgKG5vZGUudGV4dENvbnRlbnQubGVuZ3RoKSBiZWNhdXNlIHdlIGNvdWxkIGVuZCB1cCBhZGRpbmcgdG8gbXVjaFxuICAgIC8vIHJlcGxhY2UgaW5pdGlhbCB2YWx1ZXMgd2l0aCBub2RlIHZhbHVlcyBpZiBwcmVzZW50XG4gICAgZHguc3BsaWNlKDAsIGR4MC5sZW5ndGgsIC4uLmR4MClcbiAgICBkeS5zcGxpY2UoMCwgZHkwLmxlbmd0aCwgLi4uZHkwKVxuICB9IGVsc2Uge1xuICAgIC8vIGdldCB0ZXh0IGRhdGFcbiAgICBjb25zdCBkYXRhID0gbm9kZS5kYXRhXG5cbiAgICBsZXQgaiA9IDBcbiAgICBjb25zdCBqbCA9IGRhdGEubGVuZ3RoXG4gICAgY29uc3QgZGV0YWlscyA9IGdldEZvbnREZXRhaWxzKG5vZGUpXG5cbiAgICAvLyBpZiBpdCBpcyBtb3JlIHRoYW4gb25lIGR4L2R5IHNpbmdsZSBsZXR0ZXJzIGFyZSBtb3ZlZCBieSB0aGUgYW1vdW50IChodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9TVkcvQXR0cmlidXRlL2R4KVxuICAgIGlmIChkeS5sZW5ndGggfHwgZHgubGVuZ3RoKSB7XG4gICAgICBmb3IgKDtqIDwgamw7IGorKykge1xuICAgICAgICAvLyBDYWxjdWxhdGUgYSBib3ggZm9yIGEgc2luZ2xlIGxldHRlclxuICAgICAgICBib3hlcy5wdXNoKHRleHRVdGlscy50ZXh0QkJveChkYXRhLnN1YnN0cihqLCAxKSwgcG9zLngsIHBvcy55LCBkZXRhaWxzKSlcblxuICAgICAgICAvLyBBZGQgdGhlIG5leHQgcG9zaXRpb24gdG8gY3VycmVudCBvbmVcbiAgICAgICAgcG9zLnggKz0gZHguc2hpZnQoKSB8fCAwXG4gICAgICAgIHBvcy55ICs9IGR5LnNoaWZ0KCkgfHwgMFxuXG4gICAgICAgIGlmICghZHkubGVuZ3RoICYmICFkeC5sZW5ndGgpIGJyZWFrXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaW4gY2FzZSBpdCB3YXMgb25seSBvbmUgZHgvZHkgb3Igbm8gbW9yZSBkeC9keSBtb3ZlIHRoZSByZXN0IG9mIHRoZSB0ZXh0XG4gICAgYm94ZXMucHVzaCh0ZXh0VXRpbHMudGV4dEJCb3goZGF0YS5zdWJzdHIoaiksIHBvcy54LCBwb3MueSwgZGV0YWlscykpXG4gICAgcG9zLnggKz0gYm94ZXNbYm94ZXMubGVuZ3RoIC0gMV0ud2lkdGhcbiAgfVxufVxuXG4vKlxuLy8gdGhpcyBmdW5jdGlvbiBpcyBwYXNzaW5nIGR4IGFuZCBkeSB2YWx1ZXMgYnkgcmVmZXJlbmNlcy4gRG9udCBhc3NpZ24gbmV3IHZhbHVlcyB0byBpdFxuY29uc3QgdGV4dEl0ZXJhdG9yID0gZnVuY3Rpb24gKG5vZGUsIHBvcyA9IHsgeDogMCwgeTogMCB9LCBkeCA9IFsgMCBdLCBkeSA9IFsgMCBdKSB7XG5cbiAgdmFyIHggPSBwYXJzZUZsb2F0KG5vZGUuZ2V0QXR0cmlidXRlKCd4JykpXG4gIHZhciB5ID0gcGFyc2VGbG9hdChub2RlLmdldEF0dHJpYnV0ZSgneScpKVxuXG4gIHBvcy54ID0gaXNOYU4oeCkgPyBwb3MueCA6IHhcbiAgcG9zLnkgPSBpc05hTih5KSA/IHBvcy55IDogeVxuXG4gIHZhciBkeDAgPSAobm9kZS5nZXRBdHRyaWJ1dGUoJ2R4JykgfHwgJycpLnNwbGl0KHJlZ2V4LmRlbGltaXRlcikuZmlsdGVyKG51bSA9PiBudW0gIT09ICcnKS5tYXAocGFyc2VGbG9hdClcbiAgdmFyIGR5MCA9IChub2RlLmdldEF0dHJpYnV0ZSgnZHknKSB8fCAnJykuc3BsaXQocmVnZXguZGVsaW1pdGVyKS5maWx0ZXIobnVtID0+IG51bSAhPT0gJycpLm1hcChwYXJzZUZsb2F0KVxuICB2YXIgYm94ZXMgPSBbXVxuICB2YXIgZGF0YSA9ICcnXG5cbiAgLy8gVE9ETzogZXZlbnR1YWxseSByZXBsYWNlIG9ubHkgYXMgbXVjaCB2YWx1ZXMgYXMgd2UgaGF2ZSB0ZXh0IGNoYXJzIChub2RlLnRleHRDb250ZW50Lmxlbmd0aCkgYmVjYXVzZSB3ZSBjb3VsZCBlbmQgdXAgYWRkaW5nIHRvIG11Y2hcbiAgLy8gcmVwbGFjZSBpbml0aWFsIHZhbHVlcyB3aXRoIG5vZGUgdmFsdWVzIGlmIHByZXNlbnRcbiAgZHguc3BsaWNlKDAsIGR4MC5sZW5ndGgsIC4uLmR4MClcbiAgZHkuc3BsaWNlKDAsIGR5MC5sZW5ndGgsIC4uLmR5MClcblxuICB2YXIgaSA9IDBcbiAgdmFyIGlsID0gbm9kZS5jaGlsZE5vZGVzLmxlbmd0aFxuXG4gIC8vIGl0ZXJhdGUgdGhyb3VnaCBhbGwgY2hpbGRyZW5cbiAgZm9yICg7IGkgPCBpbDsgKytpKSB7XG5cbiAgICAvLyBzaGlmdCBuZXh0IGNoaWxkXG4gICAgcG9zLnggKz0gZHguc2hpZnQoKSB8fCAwXG4gICAgcG9zLnkgKz0gZHkuc2hpZnQoKSB8fCAwXG5cbiAgICAvLyB0ZXh0XG4gICAgaWYgKG5vZGUuY2hpbGROb2Rlc1tpXS5ub2RlVHlwZSA9PT0gbm9kZS5URVhUX05PREUpIHtcblxuICAgICAgLy8gZ2V0IHRleHQgZGF0YVxuICAgICAgZGF0YSA9IG5vZGUuY2hpbGROb2Rlc1tpXS5kYXRhXG5cbiAgICAgIGxldCBqID0gMFxuICAgICAgY29uc3QgamwgPSBkYXRhLmxlbmd0aFxuXG4gICAgICAvLyBpZiBpdCBpcyBtb3JlIHRoYW4gb25lIGR4L2R5IHNpbmdsZSBsZXR0ZXJzIGFyZSBtb3ZlZCBieSB0aGUgYW1vdW50IChodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9TVkcvQXR0cmlidXRlL2R4KVxuICAgICAgaWYgKGR5Lmxlbmd0aCB8fCBkeC5sZW5ndGgpIHtcbiAgICAgICAgZm9yICg7aiA8IGpsOyBqKyspIHtcbiAgICAgICAgICBib3hlcy5wdXNoKHRleHRVdGlscy50ZXh0QkJveChkYXRhLnN1YnN0cihqLCAxKSwgcG9zLngsIHBvcy55LCBnZXRGb250RGV0YWlscyhub2RlKSkpXG5cbiAgICAgICAgICBwb3MueCArPSBkeC5zaGlmdCgpIHx8IDBcbiAgICAgICAgICBwb3MueSArPSBkeS5zaGlmdCgpIHx8IDBcblxuICAgICAgICAgIGlmICghZHkubGVuZ3RoICYmICFkeC5sZW5ndGgpIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gaW4gY2FzZSBpdCB3YXMgb25seSBvbmUgZHgvZHkgb3Igbm8gbW9yZSBkeC9keSBtb3ZlIHRoZSByZXN0IG9mIHRoZSB0ZXh0XG5cbiAgICAgIGJveGVzLnB1c2godGV4dFV0aWxzLnRleHRCQm94KGRhdGEuc3Vic3RyKGopLCBwb3MueCwgcG9zLnksIGdldEZvbnREZXRhaWxzKG5vZGUpKSlcbiAgICAgIHBvcy54ICs9IGJveGVzW2JveGVzLmxlbmd0aCAtIDFdLndpZHRoXG5cbiAgICAvLyBlbGVtZW50XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluIGNhc2Ugb2YgZWxlbWVudCwgcmVjdXJzaXZlbHkgY2FsbCBmdW5jdGlvbiBhZ2FpbiB3aXRoIG5ldyBzdGFydCB2YWx1ZXNcbiAgICAgIGJveGVzID0gYm94ZXMuY29uY2F0KHRleHRJdGVyYXRvcihub2RlLmNoaWxkTm9kZXNbaV0sIHBvcywgZHgsIGR5KSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYm94ZXNcbn0gKi9cblxuY29uc3QgZ2V0Rm9udERldGFpbHMgPSAobm9kZSkgPT4ge1xuICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gbm9kZS5URVhUX05PREUpIG5vZGUgPSBub2RlLnBhcmVudE5vZGVcblxuICBsZXQgZm9udFNpemUgPSBudWxsXG4gIGxldCBmb250RmFtaWx5ID0gbnVsbFxuICBsZXQgdGV4dEFuY2hvciA9IG51bGxcbiAgbGV0IGRvbWluYW50QmFzZWxpbmUgPSBudWxsXG5cbiAgY29uc3QgdGV4dENvbnRlbnRFbGVtZW50cyA9IFtcbiAgICAndGV4dCcsXG4gICAgJ3RzcGFuJyxcbiAgICAndHJlZicsXG4gICAgJ3RleHRQYXRoJyxcbiAgICAnYWx0R2x5cGgnLFxuICAgICdnJ1xuICBdXG5cbiAgZG8ge1xuICAgIC8vIFRPRE86IHN0b3Agb25cbiAgICBpZiAoIWZvbnRTaXplKSB7IGZvbnRTaXplID0gbm9kZS5zdHlsZS5mb250U2l6ZSB8fCBub2RlLmdldEF0dHJpYnV0ZSgnZm9udC1zaXplJykgfVxuICAgIGlmICghZm9udEZhbWlseSkgeyBmb250RmFtaWx5ID0gbm9kZS5zdHlsZS5mb250RmFtaWx5IHx8IG5vZGUuZ2V0QXR0cmlidXRlKCdmb250LWZhbWlseScpIH1cbiAgICBpZiAoIXRleHRBbmNob3IpIHsgdGV4dEFuY2hvciA9IG5vZGUuc3R5bGUudGV4dEFuY2hvciB8fCBub2RlLmdldEF0dHJpYnV0ZSgndGV4dC1hbmNob3InKSB9XG4gICAgaWYgKCFkb21pbmFudEJhc2VsaW5lKSB7IGRvbWluYW50QmFzZWxpbmUgPSBub2RlLnN0eWxlLmRvbWluYW50QmFzZWxpbmUgfHwgbm9kZS5nZXRBdHRyaWJ1dGUoJ2RvbWluYW50LWJhc2VsaW5lJykgfVxuICAgIC8vIFRPRE86IGNoZWNrIGZvciBhbGlnbm1lbnQtYmFzZWxpbmUgaW4gdHNwYW4sIHRyZWYsIHRleHRQYXRoLCBhbHRHbHlwaFxuICAgIC8vIFRPRE86IGFsaWdubWVudC1hZGp1c3QsIGJhc2VsaW5lLXNoaWZ0XG4gICAgLypcbiAgICBpZighYWxpZ25tZW50QmFzZWxpbmUpXG4gICAgYWxpZ25tZW50QmFzZWxpbmUgPSB0aGlzLnN0eWxlLmFsaWdubWVudEJhc2VsaW5lIHx8IHRoaXMuZ2V0QXR0cmlidXRlKCdhbGlnbm1lbnQtYmFzZWxpbmUnKVxuICAgICovXG5cbiAgfSB3aGlsZSAoXG4gICAgKG5vZGUgPSBub2RlLnBhcmVudE5vZGUpXG4gICAgJiYgbm9kZS5ub2RlVHlwZSA9PT0gbm9kZS5FTEVNRU5UX05PREVcbiAgICAmJiAodGV4dENvbnRlbnRFbGVtZW50cy5pbmNsdWRlcyhub2RlLm5vZGVOYW1lKSlcbiAgKVxuXG4gIHJldHVybiB7XG4gICAgZm9udEZhbWlseSxcbiAgICBmb250U2l6ZSxcbiAgICB0ZXh0QW5jaG9yOiB0ZXh0QW5jaG9yIHx8ICdzdGFydCcsXG4gICAgLy8gVE9ETzogdXNlIGNlbnRyYWwgZm9yIHdyaXRpbmctbW9kZSA9PT0gaG9yaXpvbnRhbCBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9TVkcvQXR0cmlidXRlL2RvbWluYW50LWJhc2VsaW5lXG4gICAgZG9taW5hbnRCYXNlbGluZTogZG9taW5hbnRCYXNlbGluZSB8fCAnYWxwaGFiZXRpY2FsJ1xuICAgIC8vIGZvbnRGYW1pbHlNYXBwaW5nczogdGhpcy5vd25lckRvY3VtZW50LmZvbnRGYW1pbHlNYXBwaW5ncyxcbiAgICAvLyBmb250RGlyOiB0aGlzLm93bmVyRG9jdW1lbnQuZm9udERpcixcbiAgICAvLyBwcmVsb2FkZWQ6IHRoaXMub3duZXJEb2N1bWVudC5fcHJlbG9hZGVkXG4gIH1cbn1cbiIsImltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJ1xuLy8gaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGRlZmF1bHQgYXMgX19kaXJuYW1lIH0gZnJvbSAnLi9kaXJuYW1lLmNqcycgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4vLyB1c2UgdGhpcyBhcyBzb29uIGFzIGltcG9ydC5tZXRhIGlzIHN0YW5kYXJkaXplZFxuLy8gY29uc3QgX19kaXJuYW1lID0gZGlybmFtZShmaWxlVVJMVG9QYXRoKGltcG9ydC5tZXRhLnVybCkpO1xuXG5leHBvcnQgY29uc3QgZm9udFNpemUgPSAxNlxuZXhwb3J0IGNvbnN0IGZvbnRGYW1pbHkgPSAnc2Fucy1zZXJpZidcbmV4cG9ydCBjb25zdCBmb250RGlyID0gam9pbihfX2Rpcm5hbWUsICcuLi8uLi8nLCAnZm9udHMvJylcbmV4cG9ydCBjb25zdCBmb250RmFtaWx5TWFwcGluZ3MgPSB7XG4gICdzYW5zLXNlcmlmJzogJ09wZW5TYW5zLVJlZ3VsYXIudHRmJyxcbiAgJ09wZW4gU2Fucyc6ICdPcGVuU2Fucy1SZWd1bGFyLnR0Zidcbn1cbiIsImltcG9ydCB7IGRlY2FtZWxpemUgfSBmcm9tICcuLi91dGlscy9zdHJVdGlscy5qcydcblxuZXhwb3J0IGNvbnN0IG9iamVjdFRvTWFwID0gZnVuY3Rpb24gKG9iaikge1xuICBpZiAob2JqIGluc3RhbmNlb2YgTWFwKSByZXR1cm4gbmV3IE1hcChvYmopXG4gIHJldHVybiBPYmplY3Qua2V5cyhvYmopLnJlZHVjZSgobWFwLCBrZXkpID0+IG1hcC5zZXQoa2V5LCBvYmpba2V5XSksIG5ldyBNYXAoKSlcbn1cblxuZXhwb3J0IGNvbnN0IG1hcFRvT2JqZWN0ID0gZnVuY3Rpb24gKG1hcCkge1xuICB2YXIgb2JqID0ge31cbiAgbWFwLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlXG4gIH0pXG4gIHJldHVybiBvYmpcbn1cblxuZXhwb3J0IGNvbnN0IG1hcE1hcCA9IGZ1bmN0aW9uIChtYXAsIGNiKSB7XG4gIHZhciBhcnIgPSBbXVxuICBtYXAuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgIGFyci5wdXNoKGNiKHZhbHVlLCBrZXkpKVxuICB9KVxuICByZXR1cm4gYXJyXG59XG5cbmV4cG9ydCBjb25zdCBtYXBUb0NzcyA9IGZ1bmN0aW9uIChteU1hcCkge1xuICByZXR1cm4gbWFwTWFwKG15TWFwLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgIGlmICghdmFsdWUpIHJldHVybiBmYWxzZVxuICAgIHJldHVybiBkZWNhbWVsaXplKGtleSkgKyAnOiAnICsgdmFsdWVcbiAgfSkuZmlsdGVyKGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gISFlbCB9KS5qb2luKCc7ICcpICsgJzsnIHx8IG51bGxcbn1cblxuZXhwb3J0IGNvbnN0IGNzc1RvTWFwID0gZnVuY3Rpb24gKGNzcykge1xuICByZXR1cm4gbmV3IE1hcChjc3Muc3BsaXQoL1xccyo7XFxzKi8pLmZpbHRlcihmdW5jdGlvbiAoZWwpIHsgcmV0dXJuICEhZWwgfSkubWFwKGZ1bmN0aW9uIChlbCkge1xuICAgIHJldHVybiBlbC5zcGxpdCgvXFxzKjpcXHMqLylcbiAgfSkpXG59XG4iLCJcbmV4cG9ydCBjb25zdCBzdmcgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG5leHBvcnQgY29uc3QgeGxpbmsgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaydcbmV4cG9ydCBjb25zdCBodG1sID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwnXG5leHBvcnQgY29uc3QgbWF0aG1sID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTgvTWF0aC9NYXRoTUwnXG5leHBvcnQgY29uc3QgeG1sID0gJ2h0dHA6Ly93d3cudzMub3JnL1hNTC8xOTk4L25hbWVzcGFjZSdcbmV4cG9ydCBjb25zdCB4bWxucyA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3htbG5zLydcbiIsImV4cG9ydCBjb25zdCBub2Rlc1RvTm9kZSA9IChub2RlcywgZG9jdW1lbnQpID0+IHtcbiAgbm9kZXMgPSBub2Rlcy5tYXAoKG5vZGUpID0+IHtcbiAgICBpZiAodHlwZW9mIG5vZGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobm9kZSlcbiAgICB9XG4gICAgcmV0dXJuIG5vZGVcbiAgfSlcbiAgaWYgKG5vZGVzLmxlbmd0aCA9PT0gMSkgeyByZXR1cm4gbm9kZXMgfVxuICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG4gIG5vZGVzLmZvckVhY2gobm9kZS5hcHBlbmRDaGlsZCwgbm9kZSlcbiAgcmV0dXJuIG5vZGVcbn1cbiIsImV4cG9ydCBjb25zdCBleHRlbmQgPSAoLi4ubW9kdWxlcykgPT4ge1xuICB2YXIgbWV0aG9kcywga2V5LCBpXG5cbiAgLy8gR2V0IG9iamVjdCB3aXRoIGV4dGVuc2lvbnNcbiAgbWV0aG9kcyA9IG1vZHVsZXMucG9wKClcblxuICBmb3IgKGkgPSBtb2R1bGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgZm9yIChrZXkgaW4gbWV0aG9kcykgeyBtb2R1bGVzW2ldLnByb3RvdHlwZVtrZXldID0gbWV0aG9kc1trZXldIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZXh0ZW5kU3RhdGljID0gKC4uLm1vZHVsZXMpID0+IHtcbiAgdmFyIG1ldGhvZHMsIGtleSwgaVxuXG4gIC8vIEdldCBvYmplY3Qgd2l0aCBleHRlbnNpb25zXG4gIG1ldGhvZHMgPSBtb2R1bGVzLnBvcCgpXG5cbiAgZm9yIChpID0gbW9kdWxlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGZvciAoa2V5IGluIG1ldGhvZHMpIHsgbW9kdWxlc1tpXVtrZXldID0gbWV0aG9kc1trZXldIH1cbiAgfVxufVxuXG4vLyBUT0RPOiByZWZhY3RvciBzbyB0aGF0IGl0IHRha2VzIGEgY2xhc3NcbmV4cG9ydCBjb25zdCBtaXhpbiA9IChtaXhpbiwgX2NsYXNzKSA9PiB7XG4gIGNvbnN0IGRlc2NyaXB0b3JzID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMobWl4aW4pXG4gIC8vIGNvbnN0IGFsbCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG1peGluKVxuXG4gIC8vIGNvbnN0IHByb3BOYW1lcyA9IE9iamVjdC5rZXlzKGRlc2NyaXB0b3JzKVxuICAvLyBjb25zdCBtZXRob2ROYW1lcyA9IGFsbC5maWx0ZXIocCA9PiAhcHJvcE5hbWVzLmluY2x1ZGVzKHApKVxuXG4gIC8vIGZvciAoY29uc3QgbWV0aG9kIG9mIG1ldGhvZE5hbWVzKSB7XG4gIC8vICAgX2NsYXNzLnByb3RvdHlwZVttZXRob2RdID0gbWl4aW5bbWV0aG9kXVxuICAvLyB9XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoX2NsYXNzLnByb3RvdHlwZSwgZGVzY3JpcHRvcnMpXG59XG4iLCJpbXBvcnQgeyBCb3gsIE5vQm94IH0gZnJvbSAnLi4vb3RoZXIvQm94LmpzJ1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi9vdGhlci9Qb2ludC5qcydcbmltcG9ydCAqIGFzIHJlZ2V4IGZyb20gJy4vcmVnZXguanMnXG4vLyBUT0RPOiB1c2Ugb3duIG1hdHJpeCBpbXBsZW1lbnRhdGlvblxuaW1wb3J0IHsgbWF0cml4RmFjdG9yeSB9IGZyb20gJy4vLi4vZG9tL3N2Zy9TVkdNYXRyaXguanMnXG5pbXBvcnQgeyBQb2ludENsb3VkIH0gZnJvbSAnLi9Qb2ludENsb3VkLmpzJ1xuXG5jb25zdCBwYXRoSGFuZGxlcnMgPSB7XG4gIE0gKGMsIHAsIHIsIHAwKSB7XG4gICAgcC54ID0gcDAueCA9IGNbMF1cbiAgICBwLnkgPSBwMC55ID0gY1sxXVxuXG4gICAgcmV0dXJuIG5ldyBNb3ZlKHApXG4gIH0sXG4gIEwgKGMsIHApIHtcbiAgICBjb25zdCByZXQgPSBuZXcgTGluZShwLngsIHAueSwgY1swXSwgY1sxXSkvLyAub2Zmc2V0KG8pXG4gICAgcC54ID0gY1swXVxuICAgIHAueSA9IGNbMV1cbiAgICByZXR1cm4gcmV0XG4gIH0sXG4gIEggKGMsIHApIHtcbiAgICByZXR1cm4gcGF0aEhhbmRsZXJzLkwoWyBjWzBdLCBwLnkgXSwgcClcbiAgfSxcbiAgViAoYywgcCkge1xuICAgIHJldHVybiBwYXRoSGFuZGxlcnMuTChbIHAueCwgY1swXSBdLCBwKVxuICB9LFxuICBRIChjLCBwLCByKSB7XG4gICAgY29uc3QgcmV0ID0gQ3ViaWMuZnJvbVF1YWQocCwgbmV3IFBvaW50KGNbMF0sIGNbMV0pLCBuZXcgUG9pbnQoY1syXSwgY1szXSkpLy8gLm9mZnNldChvKVxuICAgIHAueCA9IGNbMl1cbiAgICBwLnkgPSBjWzNdXG5cbiAgICBjb25zdCByZWZsZWN0ID0gbmV3IFBvaW50KGNbMF0sIGNbMV0pLnJlZmxlY3RBdChwKVxuICAgIHIueCA9IHJlZmxlY3QueFxuICAgIHIueSA9IHJlZmxlY3QueVxuXG4gICAgcmV0dXJuIHJldFxuICB9LFxuICBUIChjLCBwLCByLCBwMCwgcmVmbGVjdGlvbklzUG9zc2libGUpIHtcbiAgICBpZiAocmVmbGVjdGlvbklzUG9zc2libGUpIHsgYyA9IFsgci54LCByLnkgXS5jb25jYXQoYykgfSBlbHNlIHsgYyA9IFsgcC54LCBwLnkgXS5jb25jYXQoYykgfVxuICAgIHJldHVybiBwYXRoSGFuZGxlcnMuUShjLCBwLCByKVxuICB9LFxuICBDIChjLCBwLCByKSB7XG4gICAgY29uc3QgcmV0ID0gbmV3IEN1YmljKHAsIG5ldyBQb2ludChjWzBdLCBjWzFdKSwgbmV3IFBvaW50KGNbMl0sIGNbM10pLCBuZXcgUG9pbnQoY1s0XSwgY1s1XSkpLy8gLm9mZnNldChvKVxuICAgIHAueCA9IGNbNF1cbiAgICBwLnkgPSBjWzVdXG4gICAgY29uc3QgcmVmbGVjdCA9IG5ldyBQb2ludChjWzJdLCBjWzNdKS5yZWZsZWN0QXQocClcbiAgICByLnggPSByZWZsZWN0LnhcbiAgICByLnkgPSByZWZsZWN0LnlcbiAgICByZXR1cm4gcmV0XG4gIH0sXG4gIFMgKGMsIHAsIHIsIHAwLCByZWZsZWN0aW9uSXNQb3NzaWJsZSkge1xuICAgIC8vIHJlZmxlY3Rpb24gbWFrZXMgb25seSBzZW5zZSBpZiB0aGlzIGNvbW1hbmQgd2FzIHByZWNlZWRlZCBieSBhbm90aGVyIGJlemllcmUgY29tbWFuZCAoUVRTQylcbiAgICBpZiAocmVmbGVjdGlvbklzUG9zc2libGUpIHsgYyA9IFsgci54LCByLnkgXS5jb25jYXQoYykgfSBlbHNlIHsgYyA9IFsgcC54LCBwLnkgXS5jb25jYXQoYykgfVxuICAgIHJldHVybiBwYXRoSGFuZGxlcnMuQyhjLCBwLCByKVxuICB9LFxuICBaIChjLCBwLCByLCBwMCkge1xuICAgIC8vIEZJWE1FOiBUaGUgYmVoYXZpb3Igb2YgWiBkZXBlbmRzIG9uIHRoZSBjb21tYW5kIGJlZm9yZVxuICAgIHJldHVybiBwYXRoSGFuZGxlcnMuTChbIHAwLngsIHAwLnkgXSwgcClcbiAgfSxcbiAgQSAoYywgcCwgcikge1xuICAgIGNvbnN0IHJldCA9IG5ldyBBcmMocCwgbmV3IFBvaW50KGNbNV0sIGNbNl0pLCBjWzBdLCBjWzFdLCBjWzJdLCBjWzNdLCBjWzRdKVxuICAgIHAueCA9IGNbNV1cbiAgICBwLnkgPSBjWzZdXG4gICAgcmV0dXJuIHJldFxuICB9XG59XG5cbmNvbnN0IG1saHZxdGNzYSA9ICdtbGh2cXRjc2F6Jy5zcGxpdCgnJylcblxuZm9yIChsZXQgaSA9IDAsIGlsID0gbWxodnF0Y3NhLmxlbmd0aDsgaSA8IGlsOyArK2kpIHtcbiAgcGF0aEhhbmRsZXJzW21saHZxdGNzYVtpXV0gPSAoZnVuY3Rpb24gKGkpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGMsIHAsIHIsIHAwLCByZWZsZWN0aW9uSXNQb3NzaWJsZSkge1xuICAgICAgaWYgKGkgPT09ICdIJykgY1swXSA9IGNbMF0gKyBwLnhcbiAgICAgIGVsc2UgaWYgKGkgPT09ICdWJykgY1swXSA9IGNbMF0gKyBwLnlcbiAgICAgIGVsc2UgaWYgKGkgPT09ICdBJykge1xuICAgICAgICBjWzVdID0gY1s1XSArIHAueFxuICAgICAgICBjWzZdID0gY1s2XSArIHAueVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDAsIGpsID0gYy5sZW5ndGg7IGogPCBqbDsgKytqKSB7XG4gICAgICAgICAgY1tqXSA9IGNbal0gKyAoaiAlIDIgPyBwLnkgOiBwLngpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhdGhIYW5kbGVyc1tpXShjLCBwLCByLCBwMCwgcmVmbGVjdGlvbklzUG9zc2libGUpXG4gICAgfVxuICB9KShtbGh2cXRjc2FbaV0udG9VcHBlckNhc2UoKSlcbn1cblxuZnVuY3Rpb24gcGF0aFJlZ1JlcGxhY2UgKGEsIGIsIGMsIGQpIHtcbiAgcmV0dXJuIGMgKyBkLnJlcGxhY2UocmVnZXguZG90cywgJyAuJylcbn1cblxuZnVuY3Rpb24gaXNCZXppZXJlIChvYmopIHtcbiAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIEN1YmljXG59XG5cbmV4cG9ydCBjb25zdCBwYXRoUGFyc2VyID0gKGFycmF5KSA9PiB7XG5cbiAgLy8gcHJlcGFyZSBmb3IgcGFyc2luZ1xuICBjb25zdCBwYXJhbUNudCA9IHsgTTogMiwgTDogMiwgSDogMSwgVjogMSwgQzogNiwgUzogNCwgUTogNCwgVDogMiwgQTogNywgWjogMCB9XG5cbiAgYXJyYXkgPSBhcnJheVxuICAgIC5yZXBsYWNlKHJlZ2V4Lm51bWJlcnNXaXRoRG90cywgcGF0aFJlZ1JlcGxhY2UpIC8vIGNvbnZlcnQgNDUuMTIzLjEyMyB0byA0NS4xMjMgLjEyM1xuICAgIC5yZXBsYWNlKHJlZ2V4LnBhdGhMZXR0ZXJzLCAnICQmICcpIC8vIHB1dCBzb21lIHJvb20gYmV0d2VlbiBsZXR0ZXJzIGFuZCBudW1iZXJzXG4gICAgLnJlcGxhY2UocmVnZXguaHlwaGVuLCAnJDEgLScpIC8vIGFkZCBzcGFjZSBiZWZvcmUgaHlwaGVuXG4gICAgLnRyaW0oKSAvLyB0cmltXG4gICAgLnNwbGl0KHJlZ2V4LmRlbGltaXRlcikgLy8gc3BsaXQgaW50byBhcnJheVxuXG4gIC8vIGFycmF5IG5vdyBpcyBhbiBhcnJheSBjb250YWluaW5nIGFsbCBwYXJ0cyBvZiBhIHBhdGggZS5nLiBbJ00nLCAnMCcsICcwJywgJ0wnLCAnMzAnLCAnMzAnIC4uLl1cbiAgY29uc3QgYXJyID0gW11cbiAgY29uc3QgcCA9IG5ldyBQb2ludCgpXG4gIGNvbnN0IHAwID0gbmV3IFBvaW50KClcbiAgY29uc3QgciA9IG5ldyBQb2ludCgpXG4gIGxldCBpbmRleCA9IDBcbiAgY29uc3QgbGVuID0gYXJyYXkubGVuZ3RoXG4gIGxldCBzXG5cbiAgZG8ge1xuICAgIC8vIFRlc3QgaWYgd2UgaGF2ZSBhIHBhdGggbGV0dGVyXG4gICAgaWYgKHJlZ2V4LmlzUGF0aExldHRlci50ZXN0KGFycmF5W2luZGV4XSkpIHtcbiAgICAgIHMgPSBhcnJheVtpbmRleF1cbiAgICAgICsraW5kZXhcbiAgICAvLyBJZiBsYXN0IGxldHRlciB3YXMgYSBtb3ZlIGNvbW1hbmQgYW5kIHdlIGdvdCBubyBuZXcsIGl0IGRlZmF1bHRzIHRvIFtMXWluZVxuICAgIH0gZWxzZSBpZiAocyA9PT0gJ00nKSB7XG4gICAgICBzID0gJ0wnXG4gICAgfSBlbHNlIGlmIChzID09PSAnbScpIHtcbiAgICAgIHMgPSAnbCdcbiAgICB9XG5cbiAgICBhcnIucHVzaChcbiAgICAgIHBhdGhIYW5kbGVyc1tzXS5jYWxsKG51bGwsXG4gICAgICAgIGFycmF5LnNsaWNlKGluZGV4LCAoaW5kZXggPSBpbmRleCArIHBhcmFtQ250W3MudG9VcHBlckNhc2UoKV0pKS5tYXAocGFyc2VGbG9hdCksXG4gICAgICAgIHAsIHIsIHAwLFxuICAgICAgICBpc0JlemllcmUoYXJyW2Fyci5sZW5ndGggLSAxXSlcbiAgICAgIClcbiAgICApXG5cbiAgfSB3aGlsZSAobGVuID4gaW5kZXgpXG5cbiAgcmV0dXJuIGFyclxufVxuXG5jbGFzcyBNb3ZlIHtcbiAgY29uc3RydWN0b3IgKHApIHtcbiAgICB0aGlzLnAxID0gcC5jbG9uZSgpXG4gIH1cblxuICAvLyBGSVhNRTogVXNlIHBvaW50Y2xvdWRcbiAgYmJveCAoKSB7XG4gICAgY29uc3QgcCA9IHRoaXMucDFcbiAgICByZXR1cm4gbmV3IEJveChwLngsIHAueSwgMCwgMClcbiAgfVxuXG4gIGdldENsb3VkICgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50Q2xvdWQoWyB0aGlzLnAxIF0pXG4gIH1cblxuICBsZW5ndGggKCkgeyByZXR1cm4gMCB9XG5cbiAgdG9QYXRoICgpIHtcbiAgICByZXR1cm4gWyAnTScsIHRoaXMucDEueCwgdGhpcy5wMS55IF0uam9pbignICcpXG4gIH1cblxuICB0b1BhdGhGcmFnbWVudCAoKSB7XG4gICAgcmV0dXJuIFsgJ00nLCB0aGlzLnAxLngsIHRoaXMucDEueSBdXG4gIH1cblxuICB0cmFuc2Zvcm0gKG1hdHJpeCkge1xuICAgIHRoaXMucDEudHJhbnNmb3JtTyhtYXRyaXgpXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXJjIHtcbiAgY29uc3RydWN0b3IgKHAxLCBwMiwgcngsIHJ5LCDPhiwgYXJjLCBzd2VlcCkge1xuICAgIC8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9TVkcvaW1wbG5vdGUuaHRtbCNBcmNDb3JyZWN0aW9uT3V0T2ZSYW5nZVJhZGlpXG4gICAgaWYgKCFyeCB8fCAhcnkpIHJldHVybiBuZXcgTGluZShwMSwgcDIpXG5cbiAgICByeCA9IE1hdGguYWJzKHJ4KVxuICAgIHJ5ID0gTWF0aC5hYnMocnkpXG5cbiAgICB0aGlzLnAxID0gcDEuY2xvbmUoKVxuICAgIHRoaXMucDIgPSBwMi5jbG9uZSgpXG4gICAgdGhpcy5hcmMgPSBhcmMgPyAxIDogMFxuICAgIHRoaXMuc3dlZXAgPSBzd2VlcCA/IDEgOiAwXG5cbiAgICAvLyBDYWxjdWxhdGUgY29zIGFuZCBzaW4gb2YgYW5nbGUgcGhpXG4gICAgY29uc3QgY29zz4YgPSBNYXRoLmNvcyjPhiAvIDE4MCAqIE1hdGguUEkpXG4gICAgY29uc3Qgc2luz4YgPSBNYXRoLnNpbijPhiAvIDE4MCAqIE1hdGguUEkpXG5cbiAgICAvLyBodHRwczovL3d3dy53My5vcmcvVFIvU1ZHL2ltcGxub3RlLmh0bWwjQXJjQ29udmVyc2lvbkVuZHBvaW50VG9DZW50ZXJcbiAgICAvLyAoZXEuIDUuMSlcbiAgICBjb25zdCBwMV8gPSBuZXcgUG9pbnQoXG4gICAgICAocDEueCAtIHAyLngpIC8gMixcbiAgICAgIChwMS55IC0gcDIueSkgLyAyXG4gICAgKS50cmFuc2Zvcm0obWF0cml4RmFjdG9yeShcbiAgICAgIGNvc8+GLCAtc2luz4YsIHNpbs+GLCBjb3PPhiwgMCwgMFxuICAgICkpXG5cbiAgICAvLyAoZXEuIDYuMilcbiAgICAvLyBNYWtlIHN1cmUgdGhlIHJhZGl1cyBmaXQgd2l0aCB0aGUgYXJjIGFuZCBjb3JyZWN0IGlmIG5lY2Nlc3NhcnlcbiAgICBjb25zdCByYXRpbyA9IChwMV8ueCAqKiAyIC8gcnggKiogMikgKyAocDFfLnkgKiogMiAvIHJ5ICoqIDIpXG5cbiAgICAvLyAoZXEuIDYuMylcbiAgICBpZiAocmF0aW8gPiAxKSB7XG4gICAgICByeCA9IE1hdGguc3FydChyYXRpbykgKiByeFxuICAgICAgcnkgPSBNYXRoLnNxcnQocmF0aW8pICogcnlcbiAgICB9XG5cbiAgICAvLyAoZXEuIDUuMilcbiAgICBjb25zdCByeFF1YWQgPSByeCAqKiAyXG4gICAgY29uc3QgcnlRdWFkID0gcnkgKiogMlxuXG4gICAgY29uc3QgZGl2aXNvcjEgPSByeFF1YWQgKiBwMV8ueSAqKiAyXG4gICAgY29uc3QgZGl2aXNvcjIgPSByeVF1YWQgKiBwMV8ueCAqKiAyXG4gICAgY29uc3QgZGl2aWRlbmQgPSAocnhRdWFkICogcnlRdWFkIC0gZGl2aXNvcjEgLSBkaXZpc29yMilcblxuICAgIGxldCBjX1xuICAgIGlmIChNYXRoLmFicyhkaXZpZGVuZCkgPCAxZS0xNSkge1xuICAgICAgY18gPSBuZXcgUG9pbnQoMCwgMClcbiAgICB9IGVsc2Uge1xuICAgICAgY18gPSBuZXcgUG9pbnQoXG4gICAgICAgIHJ4ICogcDFfLnkgLyByeSxcbiAgICAgICAgLXJ5ICogcDFfLnggLyByeFxuICAgICAgKS5tdWwoTWF0aC5zcXJ0KFxuICAgICAgICBkaXZpZGVuZCAvIChkaXZpc29yMSArIGRpdmlzb3IyKVxuICAgICAgKSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hcmMgPT09IHRoaXMuc3dlZXApIGNfID0gY18ubXVsKC0xKVxuXG4gICAgLy8gKGVxLiA1LjMpXG4gICAgY29uc3QgYyA9IGNfLnRyYW5zZm9ybShtYXRyaXhGYWN0b3J5KFxuICAgICAgY29zz4YsIHNpbs+GLCAtc2luz4YsIGNvc8+GLCAwLCAwXG4gICAgKSkuYWRkKG5ldyBQb2ludChcbiAgICAgIChwMS54ICsgcDIueCkgLyAyLFxuICAgICAgKHAxLnkgKyBwMi55KSAvIDJcbiAgICApKVxuXG4gICAgY29uc3QgYW5nbGVQb2ludCA9IG5ldyBQb2ludChcbiAgICAgIChwMV8ueCAtIGNfLngpIC8gcngsXG4gICAgICAocDFfLnkgLSBjXy55KSAvIHJ5XG4gICAgKVxuXG4gICAgLyogRm9yIGVxLiA1LjQgc2VlIGFuZ2xlVG8gZnVuY3Rpb24gKi9cblxuICAgIC8vIChlcS4gNS41KVxuICAgIGNvbnN0IM64ID0gbmV3IFBvaW50KDEsIDApLmFuZ2xlVG8oYW5nbGVQb2ludClcblxuICAgIC8vIChlcS4gNS42KVxuICAgIGxldCDOlM64ID0gYW5nbGVQb2ludC5hbmdsZVRvKG5ldyBQb2ludChcbiAgICAgICgtcDFfLnggLSBjXy54KSAvIHJ4LFxuICAgICAgKC1wMV8ueSAtIGNfLnkpIC8gcnlcbiAgICApKVxuXG4gICAgzpTOuCA9ICjOlM64ICUgKDIgKiBNYXRoLlBJKSlcblxuICAgIGlmICghc3dlZXAgJiYgzpTOuCA+IDApIM6UzrggLT0gMiAqIE1hdGguUElcbiAgICBpZiAoc3dlZXAgJiYgzpTOuCA8IDApIM6UzrggKz0gMiAqIE1hdGguUElcblxuICAgIHRoaXMuYyA9IGNcbiAgICB0aGlzLnRoZXRhID0gzrggKiAxODAgLyBNYXRoLlBJXG4gICAgdGhpcy50aGV0YTIgPSAozrggKyDOlM64KSAqIDE4MCAvIE1hdGguUElcblxuICAgIHRoaXMuZGVsdGEgPSDOlM64ICogMTgwIC8gTWF0aC5QSVxuICAgIHRoaXMucnggPSByeFxuICAgIHRoaXMucnkgPSByeVxuICAgIHRoaXMucGhpID0gz4ZcbiAgICB0aGlzLmNvc8+GID0gY29zz4ZcbiAgICB0aGlzLnNpbs+GID0gc2luz4ZcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ2VudGVyRm9ybSAoYywgcngsIHJ5LCDPhiwgzrgsIM6UzrgpIHtcbiAgICBjb25zdCBjb3PPhiA9IE1hdGguY29zKM+GIC8gMTgwICogTWF0aC5QSSlcbiAgICBjb25zdCBzaW7PhiA9IE1hdGguc2luKM+GIC8gMTgwICogTWF0aC5QSSlcbiAgICBjb25zdCBtID0gbWF0cml4RmFjdG9yeShjb3PPhiwgc2luz4YsIC1zaW7PhiwgY29zz4YsIDAsIDApXG5cbiAgICBjb25zdCBwMSA9IG5ldyBQb2ludChcbiAgICAgIHJ4ICogTWF0aC5jb3MozrggLyAxODAgKiBNYXRoLlBJKSxcbiAgICAgIHJ5ICogTWF0aC5zaW4ozrggLyAxODAgKiBNYXRoLlBJKVxuICAgICkudHJhbnNmb3JtKG0pLmFkZChjKVxuXG4gICAgY29uc3QgcDIgPSBuZXcgUG9pbnQoXG4gICAgICByeCAqIE1hdGguY29zKCjOuCArIM6UzrgpIC8gMTgwICogTWF0aC5QSSksXG4gICAgICByeSAqIE1hdGguc2luKCjOuCArIM6UzrgpIC8gMTgwICogTWF0aC5QSSlcbiAgICApLnRyYW5zZm9ybShtKS5hZGQoYylcblxuICAgIGNvbnN0IGFyYyA9IE1hdGguYWJzKM6UzrgpID4gMTgwID8gMSA6IDBcbiAgICBjb25zdCBzd2VlcCA9IM6UzrggPiAwID8gMSA6IDBcblxuICAgIHJldHVybiBuZXcgQXJjKHAxLCBwMiwgcngsIHJ5LCDPhiwgYXJjLCBzd2VlcClcbiAgfVxuXG4gIGJib3ggKCkge1xuICAgIGNvbnN0IGNsb3VkID0gdGhpcy5nZXRDbG91ZCgpXG4gICAgcmV0dXJuIGNsb3VkLmJib3goKVxuICB9XG5cbiAgY2xvbmUgKCkge1xuICAgIHJldHVybiBuZXcgQXJjKHRoaXMucDEsIHRoaXMucDIsIHRoaXMucngsIHRoaXMucnksIHRoaXMucGhpLCB0aGlzLmFyYywgdGhpcy5zd2VlcClcbiAgfVxuXG4gIGdldENsb3VkICgpIHtcbiAgICBpZiAodGhpcy5wMS5lcXVhbHModGhpcy5wMikpIHJldHVybiBuZXcgUG9pbnRDbG91ZChbIHRoaXMucDEgXSlcblxuICAgIC8vIGFyYyBjb3VsZCBiZSByb3RhdGVkLiB0aGUgbWluIGFuZCBtYXggdmFsdWVzIHRoZW4gZG9udCBsaWUgb24gbXVsdGlwbGVzIG9mIDkwIGRlZ3Jlc3MgYnV0IGFyZSBzaGlmdGVkIGJ5IHRoZSByb3RhdGlvbiBhbmdsZVxuICAgIC8vIHNvIHdlIGZpcnN0IGNhbGN1bGF0ZSBvdXIgMC85MCBkZWdyZWUgYW5nbGVcbiAgICBsZXQgzrgwMSA9IE1hdGguYXRhbigtdGhpcy5zaW7PhiAvIHRoaXMuY29zz4YgKiB0aGlzLnJ5IC8gdGhpcy5yeCkgKiAxODAgLyBNYXRoLlBJXG4gICAgbGV0IM64MDIgPSBNYXRoLmF0YW4odGhpcy5jb3PPhiAvIHRoaXMuc2luz4YgKiB0aGlzLnJ5IC8gdGhpcy5yeCkgKiAxODAgLyBNYXRoLlBJXG4gICAgbGV0IM64MSA9IHRoaXMudGhldGFcbiAgICBsZXQgzrgyID0gdGhpcy50aGV0YTJcblxuICAgIGlmICjOuDEgPCAwIHx8IM64MiA8IDApIHtcbiAgICAgIM64MSArPSAzNjBcbiAgICAgIM64MiArPSAzNjBcbiAgICB9XG5cbiAgICBpZiAozrgyIDwgzrgxKSB7XG4gICAgICBjb25zdCB0ZW1wID0gzrgxXG4gICAgICDOuDEgPSDOuDJcbiAgICAgIM64MiA9IHRlbXBcblxuICAgIH1cblxuICAgIHdoaWxlICjOuDAxIC0gOTAgPiDOuDAxKSDOuDAxIC09IDkwXG4gICAgd2hpbGUgKM64MDEgPCDOuDEpIM64MDEgKz0gOTBcbiAgICB3aGlsZSAozrgwMiAtIDkwID4gzrgwMikgzrgwMiAtPSA5MFxuICAgIHdoaWxlICjOuDAyIDwgzrgxKSDOuDAyICs9IDkwXG5cbiAgICBjb25zdCBhbmdsZVRvVGVzdCA9IFsgzrgwMSwgzrgwMiwgKM64MDEgKyA5MCksICjOuDAyICsgOTApLCAozrgwMSArIDE4MCksICjOuDAyICsgMTgwKSwgKM64MDEgKyAyNzApLCAozrgwMiArIDI3MCkgXVxuXG4gICAgY29uc3QgcG9pbnRzID0gYW5nbGVUb1Rlc3QuZmlsdGVyKGZ1bmN0aW9uIChhbmdsZSkge1xuICAgICAgcmV0dXJuIChhbmdsZSA+IM64MSAmJiBhbmdsZSA8IM64MilcbiAgICB9KS5tYXAoZnVuY3Rpb24gKGFuZ2xlKSB7XG4gICAgICB3aGlsZSAodGhpcy50aGV0YSA8IGFuZ2xlKSBhbmdsZSAtPSAzNjBcbiAgICAgIHJldHVybiB0aGlzLnBvaW50QXQoKChhbmdsZSAtIHRoaXMudGhldGEpICUgMzYwKSAvICh0aGlzLmRlbHRhKSkgLy8gVE9ETzogcmVwbGFjZSB0aGF0IGNhbGwgd2l0aCBwb2ludEF0QW5nbGVcbiAgICB9LmJpbmQodGhpcykpLmNvbmNhdCh0aGlzLnAxLCB0aGlzLnAyKVxuXG4gICAgcmV0dXJuIG5ldyBQb2ludENsb3VkKHBvaW50cylcbiAgfVxuXG4gIGxlbmd0aCAoKSB7XG4gICAgaWYgKHRoaXMucDEuZXF1YWxzKHRoaXMucDIpKSByZXR1cm4gMFxuXG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5wMi5zdWIodGhpcy5wMSkuYWJzKClcblxuICAgIGNvbnN0IHJldCA9IHRoaXMuc3BsaXRBdCgwLjUpXG4gICAgY29uc3QgbGVuMSA9IHJldFswXS5wMi5zdWIocmV0WzBdLnAxKS5hYnMoKVxuICAgIGNvbnN0IGxlbjIgPSByZXRbMV0ucDIuc3ViKHJldFsxXS5wMSkuYWJzKClcblxuICAgIGlmIChsZW4xICsgbGVuMiAtIGxlbmd0aCA8IDAuMDAwMDEpIHtcbiAgICAgIHJldHVybiBsZW4xICsgbGVuMlxuICAgIH1cblxuICAgIHJldHVybiByZXRbMF0ubGVuZ3RoKCkgKyByZXRbMV0ubGVuZ3RoKClcbiAgfVxuXG4gIHBvaW50QXQgKHQpIHtcbiAgICBpZiAodGhpcy5wMS5lcXVhbHModGhpcy5wMikpIHJldHVybiB0aGlzLnAxLmNsb25lKClcblxuICAgIGNvbnN0IHRJbkFuZ2xlID0gKHRoaXMudGhldGEgKyB0ICogdGhpcy5kZWx0YSkgLyAxODAgKiBNYXRoLlBJXG4gICAgY29uc3Qgc2luzrggPSBNYXRoLnNpbih0SW5BbmdsZSlcbiAgICBjb25zdCBjb3POuCA9IE1hdGguY29zKHRJbkFuZ2xlKVxuXG4gICAgcmV0dXJuIG5ldyBQb2ludChcbiAgICAgIHRoaXMuY29zz4YgKiB0aGlzLnJ4ICogY29zzrggLSB0aGlzLnNpbs+GICogdGhpcy5yeSAqIHNpbs64ICsgdGhpcy5jLngsXG4gICAgICB0aGlzLnNpbs+GICogdGhpcy5yeSAqIGNvc864ICsgdGhpcy5jb3PPhiAqIHRoaXMucnggKiBzaW7OuCArIHRoaXMuYy55XG4gICAgKVxuICB9XG5cbiAgc3BsaXRBdCAodCkge1xuICAgIGNvbnN0IGFic0RlbHRhID0gTWF0aC5hYnModGhpcy5kZWx0YSlcbiAgICBjb25zdCBkZWx0YTEgPSBhYnNEZWx0YSAqIHRcbiAgICBjb25zdCBkZWx0YTIgPSBhYnNEZWx0YSAqICgxIC0gdClcblxuICAgIGNvbnN0IHBvaW50QXRUID0gdGhpcy5wb2ludEF0KHQpXG5cbiAgICByZXR1cm4gW1xuICAgICAgbmV3IEFyYyh0aGlzLnAxLCBwb2ludEF0VCwgdGhpcy5yeCwgdGhpcy5yeSwgdGhpcy5waGksIGRlbHRhMSA+IDE4MCwgdGhpcy5zd2VlcCksXG4gICAgICBuZXcgQXJjKHBvaW50QXRULCB0aGlzLnAyLCB0aGlzLnJ4LCB0aGlzLnJ5LCB0aGlzLnBoaSwgZGVsdGEyID4gMTgwLCB0aGlzLnN3ZWVwKVxuICAgIF1cbiAgfVxuXG4gIHRvUGF0aCAoKSB7XG4gICAgcmV0dXJuIFsgJ00nLCB0aGlzLnAxLngsIHRoaXMucDEueSwgJ0EnLCB0aGlzLnJ4LCB0aGlzLnJ5LCB0aGlzLnBoaSwgdGhpcy5hcmMsIHRoaXMuc3dlZXAsIHRoaXMucDIueCwgdGhpcy5wMi55IF0uam9pbignICcpXG4gIH1cblxuICB0b1BhdGhGcmFnbWVudCAoKSB7XG4gICAgcmV0dXJuIFsgJ0EnLCB0aGlzLnJ4LCB0aGlzLnJ5LCB0aGlzLnBoaSwgdGhpcy5hcmMsIHRoaXMuc3dlZXAsIHRoaXMucDIueCwgdGhpcy5wMi55IF1cbiAgfVxuXG4gIHRvU3RyaW5nICgpIHtcbiAgICByZXR1cm4gYHAxOiAke3RoaXMucDEueC50b0ZpeGVkKDQpfSAke3RoaXMucDEueS50b0ZpeGVkKDQpfSwgcDI6ICR7dGhpcy5wMi54LnRvRml4ZWQoNCl9ICR7dGhpcy5wMi55LnRvRml4ZWQoNCl9LCBjOiAke3RoaXMuYy54LnRvRml4ZWQoNCl9ICR7dGhpcy5jLnkudG9GaXhlZCg0KX0gdGhldGE6ICR7dGhpcy50aGV0YS50b0ZpeGVkKDQpfSwgdGhldGEyOiAke3RoaXMudGhldGEyLnRvRml4ZWQoNCl9LCBkZWx0YTogJHt0aGlzLmRlbHRhLnRvRml4ZWQoNCl9LCBsYXJnZTogJHt0aGlzLmFyY30sIHN3ZWVwOiAke3RoaXMuc3dlZXB9YFxuICB9XG5cbiAgdHJhbnNmb3JtIChtYXRyaXgpIHtcbiAgICByZXR1cm4gbmV3IEFyYyh0aGlzLnAxLnRyYW5zZm9ybShtYXRyaXgpLCB0aGlzLnAyLnRyYW5zZm9ybShtYXRyaXgpLCB0aGlzLnJ4LCB0aGlzLnJ5LCB0aGlzLnBoaSwgdGhpcy5hcmMsIHRoaXMuc3dlZXApXG4gIH1cbn1cblxuY2xhc3MgQ3ViaWMge1xuICBjb25zdHJ1Y3RvciAocDEsIGMxLCBjMiwgcDIpIHtcbiAgICBpZiAocDEgaW5zdGFuY2VvZiBQb2ludCkge1xuICAgICAgdGhpcy5wMSA9IG5ldyBQb2ludChwMSlcbiAgICAgIHRoaXMuYzEgPSBuZXcgUG9pbnQoYzEpXG4gICAgICB0aGlzLmMyID0gbmV3IFBvaW50KGMyKVxuICAgICAgdGhpcy5wMiA9IG5ldyBQb2ludChwMilcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wMSA9IG5ldyBQb2ludChwMS5wMSlcbiAgICAgIHRoaXMuYzEgPSBuZXcgUG9pbnQocDEuYzEpXG4gICAgICB0aGlzLmMyID0gbmV3IFBvaW50KHAxLmMyKVxuICAgICAgdGhpcy5wMiA9IG5ldyBQb2ludChwMS5wMilcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbVF1YWQgKHAxLCBjLCBwMikge1xuICAgIGNvbnN0IGMxID0gcDEubXVsKDEgLyAzKS5hZGQoYy5tdWwoMiAvIDMpKVxuICAgIGNvbnN0IGMyID0gYy5tdWwoMiAvIDMpLmFkZChwMi5tdWwoMSAvIDMpKVxuICAgIHJldHVybiBuZXcgQ3ViaWMocDEsIGMxLCBjMiwgcDIpXG4gIH1cblxuICBiYm94ICgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDbG91ZCgpLmJib3goKVxuICB9XG5cbiAgZmluZFJvb3RzICgpIHtcbiAgICByZXR1cm4gdGhpcy5maW5kUm9vdHNYKCkuY29uY2F0KHRoaXMuZmluZFJvb3RzWSgpKVxuICB9XG5cbiAgZmluZFJvb3RzWCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmluZFJvb3RzWFkodGhpcy5wMS54LCB0aGlzLmMxLngsIHRoaXMuYzIueCwgdGhpcy5wMi54KVxuICB9XG5cbiAgZmluZFJvb3RzWFkgKHAxLCBwMiwgcDMsIHA0KSB7XG4gICAgY29uc3QgYSA9IDMgKiAoLXAxICsgMyAqIHAyIC0gMyAqIHAzICsgcDQpXG4gICAgY29uc3QgYiA9IDYgKiAocDEgLSAyICogcDIgKyBwMylcbiAgICBjb25zdCBjID0gMyAqIChwMiAtIHAxKVxuXG4gICAgaWYgKGEgPT09IDApIHJldHVybiBbIC1jIC8gYiBdLmZpbHRlcihmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIGVsID4gMCAmJiBlbCA8IDEgfSlcblxuICAgIGlmIChiICogYiAtIDQgKiBhICogYyA8IDApIHJldHVybiBbXVxuICAgIGlmIChiICogYiAtIDQgKiBhICogYyA9PT0gMCkgcmV0dXJuIFsgTWF0aC5yb3VuZCgoLWIgLyAoMiAqIGEpKSAqIDEwMDAwMCkgLyAxMDAwMDAgXS5maWx0ZXIoZnVuY3Rpb24gKGVsKSB7IHJldHVybiBlbCA+IDAgJiYgZWwgPCAxIH0pXG5cbiAgICByZXR1cm4gW1xuICAgICAgTWF0aC5yb3VuZCgoLWIgKyBNYXRoLnNxcnQoYiAqIGIgLSA0ICogYSAqIGMpKSAvICgyICogYSkgKiAxMDAwMDApIC8gMTAwMDAwLFxuICAgICAgTWF0aC5yb3VuZCgoLWIgLSBNYXRoLnNxcnQoYiAqIGIgLSA0ICogYSAqIGMpKSAvICgyICogYSkgKiAxMDAwMDApIC8gMTAwMDAwXG4gICAgXS5maWx0ZXIoZnVuY3Rpb24gKGVsKSB7IHJldHVybiBlbCA+IDAgJiYgZWwgPCAxIH0pXG4gIH1cblxuICBmaW5kUm9vdHNZICgpIHtcbiAgICByZXR1cm4gdGhpcy5maW5kUm9vdHNYWSh0aGlzLnAxLnksIHRoaXMuYzEueSwgdGhpcy5jMi55LCB0aGlzLnAyLnkpXG4gIH1cblxuICBmbGF0bmVzcyAoKSB7XG4gICAgbGV0IHV4ID0gTWF0aC5wb3coMyAqIHRoaXMuYzEueCAtIDIgKiB0aGlzLnAxLnggLSB0aGlzLnAyLngsIDIpXG4gICAgbGV0IHV5ID0gTWF0aC5wb3coMyAqIHRoaXMuYzEueSAtIDIgKiB0aGlzLnAxLnkgLSB0aGlzLnAyLnksIDIpXG4gICAgY29uc3QgdnggPSBNYXRoLnBvdygzICogdGhpcy5jMi54IC0gMiAqIHRoaXMucDIueCAtIHRoaXMucDEueCwgMilcbiAgICBjb25zdCB2eSA9IE1hdGgucG93KDMgKiB0aGlzLmMyLnkgLSAyICogdGhpcy5wMi55IC0gdGhpcy5wMS55LCAyKVxuXG4gICAgaWYgKHV4IDwgdngpIHsgdXggPSB2eCB9XG4gICAgaWYgKHV5IDwgdnkpIHsgdXkgPSB2eSB9XG5cbiAgICByZXR1cm4gdXggKyB1eVxuICB9XG5cbiAgZ2V0Q2xvdWQgKCkge1xuICAgIGNvbnN0IHBvaW50cyA9IHRoaXMuZmluZFJvb3RzKClcbiAgICAgIC5maWx0ZXIocm9vdCA9PiByb290ICE9PSAwICYmIHJvb3QgIT09IDEpXG4gICAgICAubWFwKHJvb3QgPT4gdGhpcy5wb2ludEF0KHJvb3QpKVxuICAgICAgLmNvbmNhdCh0aGlzLnAxLCB0aGlzLnAyKVxuXG4gICAgcmV0dXJuIG5ldyBQb2ludENsb3VkKHBvaW50cylcbiAgfVxuXG4gIGxlbmd0aCAoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVuZ3RoQXQoKVxuICB9XG5cbiAgbGVuZ3RoQXQgKHQgPSAxKSB7XG4gICAgY29uc3QgY3VydmVzID0gdGhpcy5zcGxpdEF0KHQpWzBdLm1ha2VGbGF0KHQpXG5cbiAgICBsZXQgbGVuZ3RoID0gMFxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBjdXJ2ZXMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIGxlbmd0aCArPSBjdXJ2ZXNbaV0ucDIuc3ViKGN1cnZlc1tpXS5wMSkuYWJzKClcbiAgICB9XG5cbiAgICByZXR1cm4gbGVuZ3RoXG4gIH1cblxuICBtYWtlRmxhdCAodCkge1xuICAgIGlmICh0aGlzLmZsYXRuZXNzKCkgPiAwLjE1KSB7XG4gICAgICByZXR1cm4gdGhpcy5zcGxpdEF0KDAuNSlcbiAgICAgICAgLm1hcChmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIGVsLm1ha2VGbGF0KHQgKiAwLjUpIH0pXG4gICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKGxhc3QsIGN1cnJlbnQpIHsgcmV0dXJuIGxhc3QuY29uY2F0KGN1cnJlbnQpIH0sIFtdKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRfdmFsdWUgPSB0XG4gICAgICByZXR1cm4gWyB0aGlzIF1cbiAgICB9XG4gIH1cblxuICBwb2ludEF0ICh0KSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludChcbiAgICAgICgxIC0gdCkgKiAoMSAtIHQpICogKDEgLSB0KSAqIHRoaXMucDEueCArIDMgKiAoMSAtIHQpICogKDEgLSB0KSAqIHQgKiB0aGlzLmMxLnggKyAzICogKDEgLSB0KSAqIHQgKiB0ICogdGhpcy5jMi54ICsgdCAqIHQgKiB0ICogdGhpcy5wMi54LFxuICAgICAgKDEgLSB0KSAqICgxIC0gdCkgKiAoMSAtIHQpICogdGhpcy5wMS55ICsgMyAqICgxIC0gdCkgKiAoMSAtIHQpICogdCAqIHRoaXMuYzEueSArIDMgKiAoMSAtIHQpICogdCAqIHQgKiB0aGlzLmMyLnkgKyB0ICogdCAqIHQgKiB0aGlzLnAyLnlcbiAgICApXG4gIH1cblxuICBzcGxpdEF0ICh6KSB7XG4gICAgY29uc3QgeCA9IHRoaXMuc3BsaXRBdFNjYWxhcih6LCAneCcpXG4gICAgY29uc3QgeSA9IHRoaXMuc3BsaXRBdFNjYWxhcih6LCAneScpXG5cbiAgICBjb25zdCBhID0gbmV3IEN1YmljKFxuICAgICAgbmV3IFBvaW50KHhbMF1bMF0sIHlbMF1bMF0pLFxuICAgICAgbmV3IFBvaW50KHhbMF1bMV0sIHlbMF1bMV0pLFxuICAgICAgbmV3IFBvaW50KHhbMF1bMl0sIHlbMF1bMl0pLFxuICAgICAgbmV3IFBvaW50KHhbMF1bM10sIHlbMF1bM10pXG4gICAgKVxuXG4gICAgY29uc3QgYiA9IG5ldyBDdWJpYyhcbiAgICAgIG5ldyBQb2ludCh4WzFdWzBdLCB5WzFdWzBdKSxcbiAgICAgIG5ldyBQb2ludCh4WzFdWzFdLCB5WzFdWzFdKSxcbiAgICAgIG5ldyBQb2ludCh4WzFdWzJdLCB5WzFdWzJdKSxcbiAgICAgIG5ldyBQb2ludCh4WzFdWzNdLCB5WzFdWzNdKVxuICAgIClcblxuICAgIHJldHVybiBbIGEsIGIgXVxuICB9XG5cbiAgc3BsaXRBdFNjYWxhciAoeiwgcCkge1xuICAgIGNvbnN0IHAxID0gdGhpcy5wMVtwXVxuICAgIGNvbnN0IHAyID0gdGhpcy5jMVtwXVxuICAgIGNvbnN0IHAzID0gdGhpcy5jMltwXVxuICAgIGNvbnN0IHA0ID0gdGhpcy5wMltwXVxuXG4gICAgY29uc3QgdCA9IHogKiB6ICogeiAqIHA0IC0gMyAqIHogKiB6ICogKHogLSAxKSAqIHAzICsgMyAqIHogKiAoeiAtIDEpICogKHogLSAxKSAqIHAyIC0gKHogLSAxKSAqICh6IC0gMSkgKiAoeiAtIDEpICogcDFcblxuICAgIHJldHVybiBbXG4gICAgICBbXG4gICAgICAgIHAxLFxuICAgICAgICB6ICogcDIgLSAoeiAtIDEpICogcDEsXG4gICAgICAgIHogKiB6ICogcDMgLSAyICogeiAqICh6IC0gMSkgKiBwMiArICh6IC0gMSkgKiAoeiAtIDEpICogcDEsXG4gICAgICAgIHRcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIHQsXG4gICAgICAgIHogKiB6ICogcDQgLSAyICogeiAqICh6IC0gMSkgKiBwMyArICh6IC0gMSkgKiAoeiAtIDEpICogcDIsXG4gICAgICAgIHogKiBwNCAtICh6IC0gMSkgKiBwMyxcbiAgICAgICAgcDRcbiAgICAgIF1cbiAgICBdXG4gIH1cblxuICB0b1BhdGggKCkge1xuICAgIHJldHVybiBbICdNJywgdGhpcy5wMS54LCB0aGlzLnAxLnkgXS5jb25jYXQodGhpcy50b1BhdGhGcmFnbWVudCgpKS5qb2luKCcgJylcbiAgfVxuXG4gIHRvUGF0aEZyYWdtZW50ICgpIHtcbiAgICByZXR1cm4gWyAnQycsIHRoaXMuYzEueCwgdGhpcy5jMS55LCB0aGlzLmMyLngsIHRoaXMuYzIueSwgdGhpcy5wMi54LCB0aGlzLnAyLnkgXVxuICB9XG5cbiAgdHJhbnNmb3JtIChtYXRyaXgpIHtcbiAgICB0aGlzLnAxLnRyYW5zZm9ybU8obWF0cml4KVxuICAgIHRoaXMuYzEudHJhbnNmb3JtTyhtYXRyaXgpXG4gICAgdGhpcy5jMi50cmFuc2Zvcm1PKG1hdHJpeClcbiAgICB0aGlzLnAyLnRyYW5zZm9ybU8obWF0cml4KVxuICAgIHJldHVybiB0aGlzXG4gIH1cbn1cblxuY2xhc3MgTGluZSB7XG4gIGNvbnN0cnVjdG9yICh4MSwgeTEsIHgyLCB5Mikge1xuICAgIGlmICh4MSBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgdGhpcy5wMSA9IG5ldyBQb2ludCh4MSlcbiAgICAgIHRoaXMucDIgPSBuZXcgUG9pbnQoeTEpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucDEgPSBuZXcgUG9pbnQoeDEsIHkxKVxuICAgICAgdGhpcy5wMiA9IG5ldyBQb2ludCh4MiwgeTIpXG4gICAgfVxuICB9XG5cbiAgYmJveCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q2xvdWQoKS5iYm94KClcbiAgfVxuXG4gIGdldENsb3VkICgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50Q2xvdWQoWyB0aGlzLnAxLCB0aGlzLnAyIF0pXG4gIH1cblxuICBsZW5ndGggKCkge1xuICAgIHJldHVybiB0aGlzLnAyLnN1Yih0aGlzLnAxKS5hYnMoKVxuICB9XG5cbiAgcG9pbnRBdCAodCkge1xuICAgIGNvbnN0IHZlYyA9IHRoaXMucDIuc3ViKHRoaXMucDEpLm11bCh0KVxuICAgIHJldHVybiB0aGlzLnAxLmFkZCh2ZWMpXG4gIH1cblxuICB0b1BhdGggKCkge1xuICAgIHJldHVybiBbICdNJywgdGhpcy5wMS54LCB0aGlzLnAxLnksIHRoaXMucDIueCwgdGhpcy5wMi55IF0uam9pbignICcpXG4gIH1cblxuICB0b1BhdGhGcmFnbWVudCAoKSB7XG4gICAgcmV0dXJuIFsgJ0wnLCB0aGlzLnAyLngsIHRoaXMucDIueSBdXG4gIH1cblxuICB0cmFuc2Zvcm0gKG1hdHJpeCkge1xuICAgIHRoaXMucDEudHJhbnNmb3JtTyhtYXRyaXgpXG4gICAgdGhpcy5wMi50cmFuc2Zvcm1PKG1hdHJpeClcbiAgICByZXR1cm4gdGhpc1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBwYXRoQkJveCA9IGZ1bmN0aW9uIChkKSB7XG4gIHJldHVybiBwYXRoUGFyc2VyKGQpLnJlZHVjZSgobCwgYykgPT4gbC5tZXJnZShjLmJib3goKSksIG5ldyBOb0JveCgpKVxufVxuXG5leHBvcnQgY2xhc3MgUGF0aFNlZ21lbnRBcnJheSBleHRlbmRzIEFycmF5IHtcbiAgYmJveCAoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVkdWNlKChsLCBjKSA9PiBsLm1lcmdlKGMuYmJveCgpKSwgbmV3IE5vQm94KCkpXG4gIH1cblxuICBjbG91ZCAoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVkdWNlKFxuICAgICAgKGNsb3VkLCBzZWdtZW50KSA9PiBzZWdtZW50LmdldENsb3VkKCkubWVyZ2UoY2xvdWQpLFxuICAgICAgbmV3IFBvaW50Q2xvdWQoKVxuICAgIClcbiAgfVxuXG4gIG1lcmdlIChvdGhlcikge1xuICAgIHJldHVybiB0aGlzLmNvbmNhdChvdGhlcilcbiAgfVxuXG4gIHRyYW5zZm9ybSAobWF0cml4KSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKHNlZ21lbnQgPT4gc2VnbWVudC50cmFuc2Zvcm0obWF0cml4KSlcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0UGF0aFNlZ21lbnRzID0gZnVuY3Rpb24gKGQpIHtcbiAgcmV0dXJuIG5ldyBQYXRoU2VnbWVudEFycmF5KC4uLnBhdGhQYXJzZXIoZCkpXG59XG5cbmV4cG9ydCBjb25zdCBwb2ludEF0TGVuZ3RoID0gZnVuY3Rpb24gKGQsIGxlbikge1xuICBjb25zdCBzZWdzID0gcGF0aFBhcnNlcihkKVxuXG4gIGNvbnN0IHNlZ0xlbmd0aHMgPSBzZWdzLm1hcChlbCA9PiBlbC5sZW5ndGgoKSlcblxuICBjb25zdCBsZW5ndGggPSBzZWdMZW5ndGhzLnJlZHVjZSgobCwgYykgPT4gbCArIGMsIDApXG5cbiAgbGV0IGkgPSAwXG5cbiAgbGV0IHQgPSBsZW4gLyBsZW5ndGhcblxuICAvLyBGSVhNRTogUG9wIE1vdmUgYmVmb3JlIHVzaW5nIHNob3J0Y3V0P1xuICAvLyBzaG9ydGN1dCBmb3IgdHJpdmlhbCBjYXNlc1xuICBpZiAodCA+PSAxKSB7XG4gICAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgYSBwMi4gSWYgbm90LCB1c2UgcDFcbiAgICBpZiAoc2Vnc1tzZWdzLmxlbmd0aCAtIDFdLnAyKSB7XG4gICAgICByZXR1cm4gc2Vnc1tzZWdzLmxlbmd0aCAtIDFdLnAyLm5hdGl2ZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzZWdzW3NlZ3MubGVuZ3RoIC0gMV0ucDEubmF0aXZlKClcbiAgICB9XG4gIH1cblxuICBpZiAodCA8PSAwKSByZXR1cm4gc2Vnc1swXS5wMS5uYXRpdmUoKVxuXG4gIC8vIHJlbW92ZSBtb3ZlIGNvbW1hbmRzIGF0IHRoZSB2ZXJ5IGVuZCBvZiB0aGUgcGF0aFxuICB3aGlsZSAoc2Vnc1tzZWdzLmxlbmd0aCAtIDFdIGluc3RhbmNlb2YgTW92ZSkgc2Vncy5wb3AoKVxuXG4gIGxldCBzZWdFbmQgPSAwXG5cbiAgZm9yIChjb25zdCBpbCA9IHNlZ0xlbmd0aHMubGVuZ3RoOyBpIDwgaWw7ICsraSkge1xuICAgIGNvbnN0IGsgPSBzZWdMZW5ndGhzW2ldIC8gbGVuZ3RoXG4gICAgc2VnRW5kICs9IGtcblxuICAgIGlmIChzZWdFbmQgPiB0KSB7XG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHJhdGlvID0gbGVuZ3RoIC8gc2VnTGVuZ3Roc1tpXVxuICB0ID0gcmF0aW8gKiAodCAtIHNlZ0VuZCkgKyAxXG5cbiAgcmV0dXJuIHNlZ3NbaV0ucG9pbnRBdCh0KS5uYXRpdmUoKVxufVxuXG5leHBvcnQgY29uc3QgbGVuZ3RoID0gZnVuY3Rpb24gKGQpIHtcbiAgcmV0dXJuIHBhdGhQYXJzZXIoZClcbiAgICAucmVkdWNlKChsLCBjKSA9PiBsICsgYy5sZW5ndGgoKSwgMClcbn1cblxuZXhwb3J0IGNvbnN0IGRlYnVnID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgY29uc3QgcGFyc2UgPSBwYXRoUGFyc2VyKG5vZGUuZ2V0QXR0cmlidXRlKCdkJykpXG5cbiAgY29uc3QgcmV0ID0ge1xuICAgIHBhdGhzOiBwYXJzZS5tYXAoZWwgPT4gZWwudG9QYXRoKCkpLFxuICAgIGZyYWdtZW50czogcGFyc2UubWFwKGVsID0+IGVsLnRvUGF0aEZyYWdtZW50KCkuam9pbignICcpKSxcbiAgICBiYm94czogcGFyc2UubWFwKGVsID0+IHtcbiAgICAgIGNvbnN0IGJveCA9IGVsLmJib3goKVxuICAgICAgcmV0dXJuIFsgYm94LngsIGJveC55LCBib3gud2lkdGgsIGJveC5oZWlnaHQgXVxuICAgIH0pLFxuICAgIGJib3g6IHBhcnNlLnJlZHVjZSgobCwgYykgPT4gbC5tZXJnZShjLmJib3goKSksIG5ldyBOb0JveCgpKSxcbiAgICBiYm94c1RyYW5zZm9ybWVkOiBwYXJzZS5tYXAoZWwgPT4ge1xuICAgICAgcmV0dXJuIGVsLmdldENsb3VkKCkudHJhbnNmb3JtKG5vZGUubWF0cml4aWZ5KCkpLmJib3goKVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcmV0LCB7XG4gICAgYmJveFRyYW5zZm9ybWVkOiByZXQuYmJveHNUcmFuc2Zvcm1lZC5yZWR1Y2UoKGwsIGMpID0+IGwubWVyZ2UoYyksIG5ldyBOb0JveCgpKVxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgZ2V0Q2xvdWQgPSAoZCkgPT4ge1xuICByZXR1cm4gcGF0aFBhcnNlcihkKS5yZWR1Y2UoKGNsb3VkLCBzZWdtZW50KSA9PlxuICAgIHNlZ21lbnQuZ2V0Q2xvdWQoKS5tZXJnZShjbG91ZCksIG5ldyBQb2ludENsb3VkKClcbiAgKVxufVxuXG5leHBvcnQgY29uc3QgcGF0aEZyb20gPSB7XG4gIGJveCAoeyB4LCB5LCB3aWR0aCwgaGVpZ2h0IH0pIHtcbiAgICByZXR1cm4gYE0gJHt4fSAke3l9IGggJHt3aWR0aH0gdiAke2hlaWdodH0gSCAke3h9IFYgJHt5fWBcbiAgfSxcbiAgcmVjdCAobm9kZSkge1xuICAgIGNvbnN0IHdpZHRoID0gcGFyc2VGbG9hdChub2RlLmdldEF0dHJpYnV0ZSgnd2lkdGgnKSkgfHwgMFxuICAgIGNvbnN0IGhlaWdodCA9IHBhcnNlRmxvYXQobm9kZS5nZXRBdHRyaWJ1dGUoJ2hlaWdodCcpKSB8fCAwXG4gICAgY29uc3QgeCA9IHBhcnNlRmxvYXQobm9kZS5nZXRBdHRyaWJ1dGUoJ3gnKSkgfHwgMFxuICAgIGNvbnN0IHkgPSBwYXJzZUZsb2F0KG5vZGUuZ2V0QXR0cmlidXRlKCd5JykpIHx8IDBcbiAgICByZXR1cm4gYE0gJHt4fSAke3l9IGggJHt3aWR0aH0gdiAke2hlaWdodH0gSCAke3h9IFYgJHt5fWBcbiAgfSxcbiAgY2lyY2xlIChub2RlKSB7XG4gICAgY29uc3QgciA9IHBhcnNlRmxvYXQobm9kZS5nZXRBdHRyaWJ1dGUoJ3InKSkgfHwgMFxuICAgIGNvbnN0IHggPSBwYXJzZUZsb2F0KG5vZGUuZ2V0QXR0cmlidXRlKCdjeCcpKSB8fCAwXG4gICAgY29uc3QgeSA9IHBhcnNlRmxvYXQobm9kZS5nZXRBdHRyaWJ1dGUoJ2N5JykpIHx8IDBcblxuICAgIGlmIChyID09PSAwKSByZXR1cm4gJ00wIDAnXG5cbiAgICByZXR1cm4gYE0gJHt4IC0gcn0gJHt5fSBBICR7cn0gJHtyfSAwIDAgMCAke3ggKyByfSAke3l9IEEgJHtyfSAke3J9IDAgMCAwICR7eCAtIHJ9ICR7eX1gXG4gIH0sXG4gIGVsbGlwc2UgKG5vZGUpIHtcbiAgICBjb25zdCByeCA9IHBhcnNlRmxvYXQobm9kZS5nZXRBdHRyaWJ1dGUoJ3J4JykpIHx8IDBcbiAgICBjb25zdCByeSA9IHBhcnNlRmxvYXQobm9kZS5nZXRBdHRyaWJ1dGUoJ3J5JykpIHx8IDBcbiAgICBjb25zdCB4ID0gcGFyc2VGbG9hdChub2RlLmdldEF0dHJpYnV0ZSgnY3gnKSkgfHwgMFxuICAgIGNvbnN0IHkgPSBwYXJzZUZsb2F0KG5vZGUuZ2V0QXR0cmlidXRlKCdjeScpKSB8fCAwXG5cbiAgICByZXR1cm4gYE0gJHt4IC0gcnh9ICR7eX0gQSAke3J4fSAke3J5fSAwIDAgMCAke3ggKyByeH0gJHt5fSBBICR7cnh9ICR7cnl9IDAgMCAwICR7eCAtIHJ4fSAke3l9YFxuICB9LFxuICBsaW5lIChub2RlKSB7XG4gICAgY29uc3QgeDEgPSBwYXJzZUZsb2F0KG5vZGUuZ2V0QXR0cmlidXRlKCd4MScpKSB8fCAwXG4gICAgY29uc3QgeDIgPSBwYXJzZUZsb2F0KG5vZGUuZ2V0QXR0cmlidXRlKCd4MicpKSB8fCAwXG4gICAgY29uc3QgeTEgPSBwYXJzZUZsb2F0KG5vZGUuZ2V0QXR0cmlidXRlKCd5MScpKSB8fCAwXG4gICAgY29uc3QgeTIgPSBwYXJzZUZsb2F0KG5vZGUuZ2V0QXR0cmlidXRlKCd5MicpKSB8fCAwXG5cbiAgICByZXR1cm4gYE0gJHt4MX0gJHt5MX0gTCAke3gyfSAke3kyfWBcbiAgfSxcbiAgcG9seWdvbiAobm9kZSkge1xuICAgIHJldHVybiBgTSAke25vZGUuZ2V0QXR0cmlidXRlKCdwb2ludHMnKX0gemBcbiAgfSxcbiAgcG9seWxpbmUgKG5vZGUpIHtcbiAgICByZXR1cm4gYE0gJHtub2RlLmdldEF0dHJpYnV0ZSgncG9pbnRzJyl9YFxuICB9XG59XG4iLCIvLyBzcGxpdHMgYSB0cmFuc2Zvcm1hdGlvbiBjaGFpblxuZXhwb3J0IGNvbnN0IHRyYW5zZm9ybXMgPSAvXFwpXFxzKiw/XFxzKi9cblxuLy8gc3BsaXQgYXQgd2hpdGVzcGFjZSBhbmQgY29tbWFcbmV4cG9ydCBjb25zdCBkZWxpbWl0ZXIgPSAvW1xccyxdKy9cblxuLy8gVGhlIGZvbGxvd2luZyByZWdleCBhcmUgdXNlZCB0byBwYXJzZSB0aGUgZCBhdHRyaWJ1dGUgb2YgYSBwYXRoXG5cbi8vIE1hdGNoZXMgYWxsIGh5cGhlbnMgd2hpY2ggYXJlIG5vdCBhZnRlciBhbiBleHBvbmVudFxuZXhwb3J0IGNvbnN0IGh5cGhlbiA9IC8oW15lXSktL2dpXG5cbi8vIFJlcGxhY2VzIGFuZCB0ZXN0cyBmb3IgYWxsIHBhdGggbGV0dGVyc1xuZXhwb3J0IGNvbnN0IHBhdGhMZXR0ZXJzID0gL1tNTEhWQ1NRVEFaXS9naVxuXG4vLyB5ZXMgd2UgbmVlZCB0aGlzIG9uZSwgdG9vXG5leHBvcnQgY29uc3QgaXNQYXRoTGV0dGVyID0gL1tNTEhWQ1NRVEFaXS9pXG5cbi8vIG1hdGNoZXMgMC4xNTQuMjMuNDVcbmV4cG9ydCBjb25zdCBudW1iZXJzV2l0aERvdHMgPSAvKChcXGQ/XFwuXFxkKyg/OmVbKy1dP1xcZCspPykoKD86XFwuXFxkKyg/OmVbKy1dP1xcZCspPykrKSkrL2dpXG5cbi8vIG1hdGNoZXMgLlxuZXhwb3J0IGNvbnN0IGRvdHMgPSAvXFwuL2dcbiIsIi8vIEVuc3VyZSB0byBzaXgtYmFzZWQgaGV4XG5leHBvcnQgY29uc3QgZnVsbEhleCA9IGZ1bmN0aW9uIChoZXgpIHtcbiAgcmV0dXJuIGhleC5sZW5ndGggPT09IDRcbiAgICA/IFsgJyMnLFxuICAgICAgaGV4LnN1YnN0cmluZygxLCAyKSwgaGV4LnN1YnN0cmluZygxLCAyKSxcbiAgICAgIGhleC5zdWJzdHJpbmcoMiwgMyksIGhleC5zdWJzdHJpbmcoMiwgMyksXG4gICAgICBoZXguc3Vic3RyaW5nKDMsIDQpLCBoZXguc3Vic3RyaW5nKDMsIDQpXG4gICAgXS5qb2luKCcnKSA6IGhleFxufVxuXG5leHBvcnQgY29uc3QgaGV4VG9SR0IgPSBmdW5jdGlvbiAodmFsT3JNYXApIHtcbiAgaWYgKHR5cGVvZiB2YWxPck1hcCBpbnN0YW5jZW9mIE1hcCkge1xuICAgIGZvciAoY29uc3QgWyBrZXksIHZhbCBdIG9mIHZhbE9yTWFwKSB7XG4gICAgICB2YWxPck1hcC5zZXQoa2V5LCBoZXhUb1JHQih2YWwpKVxuICAgIH1cbiAgICByZXR1cm4gdmFsT3JNYXBcbiAgfVxuXG4gIGlmICghLyNbMC05YS1mXXszLDZ9Ly50ZXN0KHZhbE9yTWFwKSkgeyByZXR1cm4gdmFsT3JNYXAgfVxuXG4gIHZhbE9yTWFwID0gZnVsbEhleCh2YWxPck1hcClcblxuICByZXR1cm4gJ3JnYignICsgW1xuICAgIHBhcnNlSW50KHZhbE9yTWFwLnNsaWNlKDEsIDMpLCAxNiksXG4gICAgcGFyc2VJbnQodmFsT3JNYXAuc2xpY2UoMywgNSksIDE2KSxcbiAgICBwYXJzZUludCh2YWxPck1hcC5zbGljZSg1LCA3KSwgMTYpXG4gIF0uam9pbignLCcpICsgJyknXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWNhbWVsaXplIChzKSB7XG4gIHJldHVybiBTdHJpbmcocykucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgZnVuY3Rpb24gKG0sIGcxLCBnMikge1xuICAgIHJldHVybiBnMSArICctJyArIGcyLnRvTG93ZXJDYXNlKClcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbWVsQ2FzZSAocykge1xuICByZXR1cm4gU3RyaW5nKHMpLnJlcGxhY2UoLyhbYS16XSktKFthLXpdKS9nLCBmdW5jdGlvbiAobSwgZzEsIGcyKSB7XG4gICAgcmV0dXJuIGcxICsgZzIudG9VcHBlckNhc2UoKVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUXVvdGVzIChzdHIpIHtcbiAgaWYgKHN0ci5zdGFydHNXaXRoKCdcIicpIHx8IHN0ci5zdGFydHNXaXRoKFwiJ1wiKSkge1xuICAgIHJldHVybiBzdHIuc2xpY2UoMSwgLTEpXG4gIH1cbiAgcmV0dXJuIHN0clxufVxuXG5leHBvcnQgZnVuY3Rpb24gaHRtbEVudGl0aWVzIChzdHIpIHtcbiAgcmV0dXJuIFN0cmluZyhzdHIpLnJlcGxhY2UoLyYvZywgJyZhbXA7JykucmVwbGFjZSgvPC9nLCAnJmx0OycpLnJlcGxhY2UoLz4vZywgJyZndDsnKS5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaHRtbEVudGl0aWVzIChzdHIpIHtcbiAgcmV0dXJuIFN0cmluZyhzdHIpLnJlcGxhY2UoLyZhbXA7L2csICcmJykucmVwbGFjZSgvJmx0Oy9nLCAnPCcpLnJlcGxhY2UoLyZndDsvZywgJz4nKS5yZXBsYWNlKCcmcXVvdDsnLCAnXCInKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2RhdGEgKHN0cikge1xuICByZXR1cm4gYDwhW0NEQVRBWyR7c3RyfV1dPmBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbW1lbnQgKHN0cikge1xuICByZXR1cm4gYDwhLS0ke3N0cn0tLT5gXG59XG5cbmV4cG9ydCBjb25zdCBzcGxpdE5vdEluQnJhY2tldHMgPSAoc3RyLCBkZWxpbWl0ZXIpID0+IHtcbiAgdmFyIHJvdW5kQnJhY2tldHMgPSAwXG5cbiAgdmFyIHNxdWFyZUJyYWNrZXRzID0gMFxuXG4gIHZhciBsYXN0SW5kZXggPSAwXG5cbiAgdmFyIHNwbGl0ID0gW11cblxuICB2YXIgY2g7IHZhciBpOyB2YXIgaWxcblxuICBmb3IgKGkgPSAwLCBpbCA9IHN0ci5sZW5ndGg7IGkgPCBpbDsgKytpKSB7XG4gICAgY2ggPSBzdHIuY2hhckF0KGkpXG5cbiAgICBpZiAoY2ggPT09IGRlbGltaXRlciAmJiAhcm91bmRCcmFja2V0cyAmJiAhc3F1YXJlQnJhY2tldHMpIHtcbiAgICAgIHNwbGl0LnB1c2goc3RyLnNsaWNlKGxhc3RJbmRleCwgaSkudHJpbSgpKVxuICAgICAgbGFzdEluZGV4ID0gaSArIDFcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaWYgKGNoID09PSAnKCcpICsrcm91bmRCcmFja2V0c1xuICAgIGVsc2UgaWYgKGNoID09PSAnKScpIC0tcm91bmRCcmFja2V0c1xuICAgIGVsc2UgaWYgKGNoID09PSAnWycpICsrc3F1YXJlQnJhY2tldHNcbiAgICBlbHNlIGlmIChjaCA9PT0gJ10nKSAtLXNxdWFyZUJyYWNrZXRzXG4gIH1cblxuICBzcGxpdC5wdXNoKHN0ci5zbGljZShsYXN0SW5kZXgpLnRyaW0oKSlcbiAgcmV0dXJuIHNwbGl0XG59XG4iLCJjb25zdCBodG1sRW50aXRpZXMgPSBmdW5jdGlvbiAoc3RyKSB7XG4gIHJldHVybiBTdHJpbmcoc3RyKS5yZXBsYWNlKC8mL2csICcmYW1wOycpLnJlcGxhY2UoLzwvZywgJyZsdDsnKS5yZXBsYWNlKC8+L2csICcmZ3Q7JykucmVwbGFjZSgvXCIvZywgJyZxdW90OycpXG59XG5cbnZhciBlbXB0eUVsZW1lbnRzID0ge1xuICBicjogdHJ1ZSxcbiAgaHI6IHRydWUsXG4gIGltZzogdHJ1ZSxcbiAgbGluazogdHJ1ZVxufVxuXG5leHBvcnQgY29uc3QgdGFnID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgY29uc3QgYXR0cnMgPSBbIC4uLm5vZGUuYXR0cnMgXS5tYXAoZnVuY3Rpb24gKG5vZGUpIHtcbiAgICByZXR1cm4gKG5vZGUucHJlZml4ID8gbm9kZS5wcmVmaXggKyAnOicgOiAnJykgKyBub2RlLmxvY2FsTmFtZSArICc9XCInICsgaHRtbEVudGl0aWVzKG5vZGUudmFsdWUpICsgJ1wiJ1xuICB9KVxuXG4gIGNvbnN0IHsgcHJlZml4LCBsb2NhbE5hbWUgfSA9IG5vZGVcbiAgY29uc3QgcXVhbGlmaWVkTmFtZSA9IChwcmVmaXggPyBwcmVmaXggKyAnOicgOiAnJykgKyBsb2NhbE5hbWVcblxuICByZXR1cm4gJzwnICsgW10uY29uY2F0KHF1YWxpZmllZE5hbWUsIGF0dHJzKS5qb2luKCcgJykgKyAnPicgKyAoZW1wdHlFbGVtZW50c1txdWFsaWZpZWROYW1lLnRvTG93ZXJDYXNlKCldID8gJycgOiBub2RlLmlubmVySFRNTCArICc8LycgKyBxdWFsaWZpZWROYW1lICsgJz4nKVxufVxuXG5leHBvcnQgY29uc3QgY2xvbmVOb2RlID0gZnVuY3Rpb24gKG5vZGUpIHtcblxuICBjb25zdCB7IHByZWZpeCwgbG9jYWxOYW1lLCBuYW1lc3BhY2VVUkk6IG5zLCBub2RlVmFsdWUsIG93bmVyRG9jdW1lbnQgfSA9IG5vZGVcblxuICAvLyBCdWlsZCB1cCB0aGUgY29ycmVjdGx5IGNhc2VkIHF1YWxpZmllZCBuYW1lXG4gIGNvbnN0IHF1YWxpZmllZE5hbWUgPSAocHJlZml4ID8gcHJlZml4ICsgJzonIDogJycpICsgbG9jYWxOYW1lXG5cbiAgLy8gQ2hlY2sgaWYgbm9kZSB3YXMgY3JlYXRlZCB1c2luZyBub24tbmFtZXNwYWNlIGZ1bmN0aW9uIHdoaWNoIGNhbiBsZWFkIHRvIDogaW4gdGhlIGxvY2FsTmFtZS5cbiAgLy8gVGhpcyBjaGVjayBhbGxvd3MgZmFsc2UgbmVnYXRpdmVzIGJlY2F1c2UgYGxvY2FsYCBvbmx5IG1hdHRlcnMgSUYgdGhlcmUgYXJlIDogaW4gdGhlIGxvY2FsTmFtZVxuICAvLyBhbmQgd2UgZG9udCBjYXJlIGFib3V0IGl0IHdoZW4gdGhlcmUgYXJlIG5vblxuICBjb25zdCBsb2NhbCA9IGxvY2FsTmFtZS5pbmNsdWRlcygnOicpXG5cbiAgdmFyIGNsb25lID0gbmV3IG5vZGUuY29uc3RydWN0b3IocXVhbGlmaWVkTmFtZSwge1xuICAgIGF0dHJzOiBuZXcgU2V0KFsgLi4ubm9kZS5hdHRycyBdLm1hcChub2RlID0+IG5vZGUuY2xvbmVOb2RlKCkpKSxcbiAgICBub2RlVmFsdWUsXG4gICAgb3duZXJEb2N1bWVudCxcbiAgICBsb2NhbFxuICB9LCBucylcblxuICByZXR1cm4gY2xvbmVcbn1cbiIsImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgZm9udGtpdCBmcm9tICdmb250a2l0J1xuaW1wb3J0ICogYXMgZGVmYXVsdHMgZnJvbSAnLi9kZWZhdWx0cy5qcydcbmltcG9ydCB7IEJveCwgTm9Cb3ggfSBmcm9tICcuLi9vdGhlci9Cb3guanMnXG5pbXBvcnQgeyBnZXRDb25maWcsIGdldEZvbnRzIH0gZnJvbSAnLi4vY29uZmlnLmpzJ1xuXG5leHBvcnQgY29uc3QgdGV4dEJCb3ggPSBmdW5jdGlvbiAodGV4dCwgeCwgeSwgZGV0YWlscykge1xuXG4gIGlmICghdGV4dCkgcmV0dXJuIG5ldyBOb0JveCgpXG5cbiAgY29uc3QgY29uZmlnID0gZ2V0Q29uZmlnKClcbiAgY29uc3QgcHJlbG9hZGVkID0gZ2V0Rm9udHMoKVxuXG4gIHZhciBmYW1pbGllcyA9IChkZXRhaWxzLmZvbnRGYW1pbHkgfHwgZGVmYXVsdHMuZm9udEZhbWlseSkuc3BsaXQoL1xccyosXFxzKi8pXG4gIHZhciBmb250TWFwID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdHMuZm9udEZhbWlseU1hcHBpbmdzLCBjb25maWcuZm9udEZhbWlseU1hcHBpbmdzKVxuICB2YXIgZm9udFNpemUgPSBkZXRhaWxzLmZvbnRTaXplIHx8IGRlZmF1bHRzLmZvbnRTaXplXG4gIHZhciBmb250RGlyID0gY29uZmlnLmZvbnREaXIgfHwgZGVmYXVsdHMuZm9udERpclxuICB2YXIgZm9udEZhbWlseVxuICB2YXIgZm9udFxuXG4gIGZvciAodmFyIGkgPSAwLCBpbCA9IGZhbWlsaWVzLmxlbmd0aDsgaSA8IGlsOyArK2kpIHtcbiAgICBpZiAoZm9udE1hcFtmYW1pbGllc1tpXV0pIHtcbiAgICAgIGZvbnRGYW1pbHkgPSBmYW1pbGllc1tpXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoIWZvbnRGYW1pbHkpIHtcbiAgICBmb250RmFtaWx5ID0gZGVmYXVsdHMuZm9udEZhbWlseVxuICB9XG5cbiAgaWYgKHByZWxvYWRlZFtmb250RmFtaWx5XSkge1xuICAgIGZvbnQgPSBwcmVsb2FkZWRbZm9udEZhbWlseV1cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBmaWxlbmFtZSA9IHBhdGguam9pbihmb250RGlyLCBmb250TWFwW2ZvbnRGYW1pbHldKVxuICAgIHRyeSB7XG4gICAgICBmb250ID0gZm9udGtpdC5vcGVuU3luYyhmaWxlbmFtZSlcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLndhcm4oYENvdWxkIG5vdCBvcGVuIGZvbnQgXCIke2ZvbnRGYW1pbHl9XCIgaW4gZmlsZSBcIiR7ZmlsZW5hbWV9XCIuICR7ZS50b1N0cmluZygpfWApXG4gICAgICByZXR1cm4gbmV3IE5vQm94KClcbiAgICB9XG5cbiAgICBwcmVsb2FkZWRbZm9udEZhbWlseV0gPSBmb250XG4gIH1cblxuICB2YXIgZm9udEhlaWdodCA9IGZvbnQuYXNjZW50IC0gZm9udC5kZXNjZW50XG4gIHZhciBsaW5lSGVpZ2h0ID0gZm9udEhlaWdodCA+IGZvbnQudW5pdHNQZXJFbSA/IGZvbnRIZWlnaHQgOiBmb250SGVpZ2h0ICsgZm9udC5saW5lR2FwXG5cbiAgdmFyIGhlaWdodCA9IGxpbmVIZWlnaHQgLyBmb250LnVuaXRzUGVyRW0gKiBmb250U2l6ZVxuICB2YXIgd2lkdGggPSBmb250LmxheW91dCh0ZXh0KS5nbHlwaHMucmVkdWNlKChsYXN0LCBjdXJyKSA9PiBsYXN0ICsgY3Vyci5hZHZhbmNlV2lkdGgsIDApIC8gZm9udC51bml0c1BlckVtICogZm9udFNpemVcblxuICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9TVkcvQXR0cmlidXRlL3RleHQtYW5jaG9yXG4gIHZhciB4QWRqdXN0ID0gMFxuICBpZiAoZGV0YWlscy50ZXh0QW5jaG9yID09PSAnZW5kJykge1xuICAgIHhBZGp1c3QgPSAtd2lkdGhcbiAgfSBlbHNlIGlmIChkZXRhaWxzLnRleHRBbmNob3IgPT09ICdtaWRkbGUnKSB7XG4gICAgeEFkanVzdCA9IC13aWR0aCAvIDJcbiAgfVxuXG4gIC8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi8yMDAyL1dELWNzczMtbGluZWJveC0yMDAyMDUxNS9cbiAgLy8gNC4yLiBCYXNlbGluZSBpZGVudGlmaWVyc1xuICB2YXIgeUFkanVzdCA9IGZvbnQuYXNjZW50IC8vIGFscGhhYmV0aWNcbiAgaWYgKGRldGFpbHMuZG9taW5hbnRCYXNlbGluZSA9PT0gJ2JlZm9yZS1lZGdlJyB8fCBkZXRhaWxzLmRvbWluYW50QmFzZWxpbmUgPT09ICd0ZXh0LWJlZm9yZS1lZGdlJykge1xuICAgIHlBZGp1c3QgPSAwXG4gIH0gZWxzZSBpZiAoZGV0YWlscy5kb21pbmFudEJhc2VsaW5lID09PSAnaGFuZ2luZycpIHtcbiAgICB5QWRqdXN0ID0gZm9udC5hc2NlbnQgLSBmb250LnhIZWlnaHQgLSBmb250LmNhcEhlaWdodFxuICB9IGVsc2UgaWYgKGRldGFpbHMuZG9taW5hbnRCYXNlbGluZSA9PT0gJ21hdGhlbWF0aWNhbCcpIHtcbiAgICB5QWRqdXN0ID0gZm9udC5hc2NlbnQgLSBmb250LnhIZWlnaHRcbiAgfSBlbHNlIGlmIChkZXRhaWxzLmRvbWluYW50QmFzZWxpbmUgPT09ICdtaWRkbGUnKSB7XG4gICAgeUFkanVzdCA9IGZvbnQuYXNjZW50IC0gZm9udC54SGVpZ2h0IC8gMlxuICB9IGVsc2UgaWYgKGRldGFpbHMuZG9taW5hbnRCYXNlbGluZSA9PT0gJ2NlbnRyYWwnKSB7XG4gICAgeUFkanVzdCA9IGZvbnQuYXNjZW50IC8gMiArIGZvbnQuZGVzY2VudCAvIDJcbiAgfSBlbHNlIGlmIChkZXRhaWxzLmRvbWluYW50QmFzZWxpbmUgPT09ICdpZGVvZ3JhcGhpYycpIHtcbiAgICB5QWRqdXN0ID0gZm9udC5hc2NlbnQgKyBmb250LmRlc2NlbnRcbiAgfVxuXG4gIHJldHVybiBuZXcgQm94KHggKyB4QWRqdXN0LCB5IC0geUFkanVzdCAvIGZvbnQudW5pdHNQZXJFbSAqIGZvbnRTaXplLCB3aWR0aCwgaGVpZ2h0KVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgKiBhcyBkZWZhdWx0cyBmcm9tICcuL3NyYy91dGlscy9kZWZhdWx0cy5qcydcblxuZXhwb3J0ICogZnJvbSAnLi9zcmMvZG9tL0F0dHIuanMnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9kb20vQ2hhcmFjdGVyRGF0YS5qcydcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2RvbS9Db21tZW50LmpzJ1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvZG9tL0N1c3RvbUV2ZW50LmpzJ1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvZG9tL0RvY3VtZW50LmpzJ1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvZG9tL0RvY3VtZW50RnJhZ21lbnQuanMnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9kb20vRWxlbWVudC5qcydcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2RvbS9FdmVudC5qcydcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2RvbS9FdmVudFRhcmdldC5qcydcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2RvbS9Ob2RlLmpzJ1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvZG9tL05vZGVGaWx0ZXIuanMnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9kb20vVGV4dC5qcydcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2RvbS9XaW5kb3cuanMnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9kb20vaHRtbC9IVE1MRWxlbWVudC5qcydcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2RvbS9odG1sL0hUTUxJbWFnZUVsZW1lbnQuanMnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9kb20vaHRtbC9IVE1MTGlua0VsZW1lbnQuanMnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9kb20vaHRtbC9IVE1MUGFyc2VyLmpzJ1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvZG9tL2h0bWwvSFRNTFNjcmlwdEVsZW1lbnQuanMnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9kb20vbWl4aW5zL2VsZW1lbnRBY2Nlc3MuanMnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9kb20vbWl4aW5zL1BhcmVudE5vZGUuanMnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9kb20vc3ZnL1NWR0VsZW1lbnQuanMnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9kb20vc3ZnL1NWR0dyYXBoaWNzRWxlbWVudC5qcydcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2RvbS9zdmcvU1ZHTWF0cml4LmpzJ1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvZG9tL3N2Zy9TVkdQYXRoRWxlbWVudC5qcydcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2RvbS9zdmcvU1ZHUG9pbnQuanMnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9kb20vc3ZnL1NWR1NWR0VsZW1lbnQuanMnXG5leHBvcnQgKiBmcm9tICcuL3NyYy9kb20vc3ZnL1NWR1RleHRDb250ZW50RWxlbWVudC5qcydcblxuZXhwb3J0ICogZnJvbSAnLi9zcmMvY29uZmlnLmpzJ1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvZmFjdG9yaWVzLmpzJ1xuZXhwb3J0IHsgZGVmYXVsdHMgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9