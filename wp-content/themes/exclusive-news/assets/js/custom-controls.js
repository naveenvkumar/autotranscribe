(function (api) {

    api.sectionConstructor['exclusive-news-upsell'] = api.Section.extend({

        // Remove events for this section.
        attachEvents: function () {},

        // Ensure this section is active. Normally, sections without contents aren't visible.
        isContextuallyActive: function () {
            return true;
        }
        
    });

})(wp.customize);