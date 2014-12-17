// JavaScript Document


//拖拽滑动条插件;
(function(window, $, undefined) {
    function DragX(obj, cfg) {
        this.list = [];
        obj = typeof obj === "string" ? $(obj) : obj;
        this.obj = obj = $(".slider-control", obj);
        var D = this;
        if (cfg.onDrag) {
            this.list.push(cfg.onDrag);
        };
        if(cfg.triggerSetValue) {
            this.triggerSetValue = cfg.triggerSetValue;
        };
        this.Max;
        this.Min;
        $(obj).on("mousedown",
        function(e) {
            e = e || window.event;
            var _this = this;
            var _disX = e.pageX - parseInt($(_this).css("left"));
            $(document).on("mousemove.drag",
            function(ev) {
                ev = ev || window.event;
                var val = ev.pageX - _disX;
                if (D.Min || D.Max) val = Math.min(D.Max, Math.max(val, D.Min));
                //保存变量;
                D.val = val;

                $(_this).css("left", val);

                D.trigger();
            });
            $(document).on("mouseup",
            function() {
                $(this).off("mousemove.drag")
            });
        });
        this.setRange(0, obj.closest(".slider").width() - obj.width());
        obj.closest(".slider").css("height", obj.height());
    };
	DragX.prototype.setValue = function(percent) {
		this.obj.css("left", parseInt(this.obj.parent().width())*percent);
        this.triggerSetValue(percent);
	};
    DragX.prototype.trigger = function(arguments) {
        for (var i = 0; i < this.list.length; i++) {
            this.list[i].apply(this, arguments);
        };
        return this;
    };
    DragX.prototype.setRange = function(Min, Max) {
        this.Min = parseInt(Min);
        this.Max = parseInt(Max);
        return this;
    };
    DragX.prototype.getValue = function() {
        return this.val;
    };
    DragX.prototype.getPercent = function() {
        return this.val / this.Max * 100;
    };
    DragX.prototype.onDrag = function(fn) {
        if (typeof fn === "function") list.push(fn);
        return this;
    };
    DragX.prototype.getObj = function() {
        return this.obj;
    };
	DragX.prototype.disabledDrag = function() {
		this.obj.off("mousedown");
		return this;
	}
    $.sliderX = function(obj, cfg) {
        $(obj).each(function() {
            this.drag = new DragX(this, cfg);
        })
    };
})(window, $);