// components/ctable/ctable.js
Component({
  properties: {
    left: {
      type: Array,
      value: []
    },
    right: {
      type: Array,
      value: []
    },
    striped: {
      type: Boolean,
      value: true
    },
    bordered: {
      type: Boolean,
      value: true
    },
    leftflex: {
      type: Number,
      value: 1
    },
    rightflex: {
      type: Number,
      value: 2
    },
    leftfont: {
      type: Boolean,
      value: true
    },
    rightfont: {
      type: Boolean,
      value: false
    }
  },
})
