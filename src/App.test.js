import React from 'react';
import ReactDOM from 'react-dom';
const TestUtils = require('react-addons-test-utils');
const should = require('chai').should();

describe('ShowCard component', function() {
    it('Renders a div incl ShowTitle, ShowEpisodes, and ShowImage', function() {
        const renderer = TestUtils.createRenderer();
        renderer.render( <ShowCard / > )
        var result = renderer.getRenderOutput();
        result.type.should.equal('div');
		result.props.children[0].props.children.should.have.lengthOf(3)
    });

    it('Renders ShowTitle', function(){
    	const renderer = TestUtils.createRenderer();
        renderer.render( <ShowTitle showTitle="test"/ > )
        var result = renderer.getRenderOutput();
        result.type.should.equal('h1');
        result.props.children.should.equal('test');
    });

    it('Renders EpisodeNumbers', function(){
    	const renderer = TestUtils.createRenderer();
        renderer.render( <EpisodeNumbers episodeNumbers="22"/ > )
        var result = renderer.getRenderOutput();
        result.type.should.equal('h1');
        result.props.children.should.equal('22');
    });

    it('Renders ShowImage', function(){
    	const renderer = TestUtils.createRenderer();
        renderer.render( <ShowImage showImage="testing"/ > )
        var result = renderer.getRenderOutput();
        console.log(result.props.children);
        result.type.should.equal('img');
    });
});
