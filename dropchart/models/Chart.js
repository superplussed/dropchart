define('Chart', ['DefaultOptions', 'Canvas', 'Axis', 'Popover', 'Event', 'utils'],
  function(DefaultOptions, Canvas, Axis, Popover, Event, utils) {

  function Chart(obj) {
    console.log('init Chart');
    this.data = obj.data;
    delete obj.data;
    this.defaultOptions = this.defaultHistogramOptions;
    this.options = $.extend(utils.cloneObj(this.defaultOptions), obj);
    var canvas = new Canvas(this.options);
    $.extend(Chart.prototype, new Popover());
    $.extend(Chart.prototype, new Event());
    $.extend(Chart.prototype, new Axis(canvas));
  }
  $.extend(Chart.prototype, new DefaultOptions());
  Chart.prototype.abortRender = false;
  Chart.prototype.resizing = false;

  Chart.prototype.initRoot = function() {
    this.abortRender = false;
    if (!this.root) {
      $('#' + this.options.id)
        .css('width', utils.intToPx(this.options.chartWidth))
        .css('height', utils.intToPx(this.options.chartHeight))
        .append("<div class='d4-root' id='" + this.options.id + "-root'></div>");
      this.root = d3.select('#' + this.options.id + '-root').append('svg:svg');
    }
    if (!this.abortRender) {
      this.rootGroup = this.root.append('svg:g')
        .attr('id', this.options.id + '-group')
        .attr('transform', 'translate(' + this.canvas.translateX(this.options.marginLeft) + ', ' + this.canvas.translateY(this.options.marginTop) + ')');
      this.createScale(this.data);

      if (this.options.chartLabelText) {

        this.chartLabelGroup = this.root.append('svg:g');
        this.positionChartLabelGroup();

        this.chartLabel = this.chartLabelGroup.append('svg:rect')
          .attr('fill', this.options.chartLabelColor)
          .attr('stroke', this.options.chartLabelStrokeColor)
          .attr('stroke-width', this.options.chartLabelStrokeWidth)
          .attr('opacity', this.options.chartLabelOpacity)
          .attr('rx', this.options.chartLabelRadius)
          .attr('ry', this.options.chartLabelRadius)
          .attr('width', this.options.chartLabelWidth)
          .attr('height', this.options.chartLabelHeight);

        this.chartLabelText = this.chartLabelGroup.append('svg:text')
          .attr('x', this.canvas.formatX(this.options.chartLabelFontX))
          .attr('y', this.canvas.formatY(this.options.chartLabelFontY))
          .attr('fill', this.options.chartLabelFontColor)
          .attr('font-size', this.options.chartLabelFontSize)
          .attr('opacity', this.options.chartLabelFontOpacity)
          .text(this.options.chartLabelText);
      }
    }
  };

  Chart.prototype.clear = function() {
    d3.select('#' + this.options.id + '-root').select('#' + this.options.id + '-group').remove();
  };

  Chart.prototype.destroy = function() {
    this.root = null;
    d3.select('#' + this.options.id + '-root').remove();
  };

  Chart.prototype.adjustVerticalPositions = function() {
    var that = this;
    if (that.bars) {
      that.barBG
        .attr('x', function(d, i) { return that.canvas.formatX(that.canvas.xScale(i)); })
        .attr('width', this.formatX(that.barWidth));

      that.bar
        .attr('x', function(d, i) { return that.canvas.formatX(that.canvas.xScale(i)); })
        .attr('width', this.formatX(this.barWidth));
    }
    this.xAxisLabel
      .attr('width', that.canvas.formatX(this.barWidth))
      .attr('x', function(d, i) { return that.canvas.formatX(that.canvas.xScale(i)); });
    
    this.xAxisLabelText
      .attr('x', function(d, i) {
        return that.canvas.formatX(that.canvas.xScale(i) + (that.barWidth / 2));
      });

    this.positionChartLabelGroup();
  };

  Chart.prototype.positionChartLabelGroup = function() {
    if (this.chartLabelGroup) {
      this.chartLabelGroup.attr('transform', 'translate(' + this.canvas.translateX(this.options.chartLabelX) + ', ' + this.canvas.translateY(this.options.chartLabelY) + ')');
    }
  };

  Chart.prototype.resize = function() {
    var that = this;
    if (!that.resizing) {
      that.resizing = true;
      window.setTimeout(function() {
        that.resizing = false;
        that.getContainerBound();
        that.assignRangesFromDimensions();
        that.adjustVerticalPositions();
      }, 100);
    }
  };

  return Chart;
});
